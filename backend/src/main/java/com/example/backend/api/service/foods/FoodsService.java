package com.example.backend.api.service.foods;

import com.example.backend.api.dto.foods.response.ResponseBasicFoodInfo;
import com.example.backend.api.dto.foods.response.ResponseFoodInfo;
import com.example.backend.api.dto.foods.response.ResponseRecommendFood;
import com.example.backend.api.dto.foods.response.ResponseTasteInfo;
import com.example.backend.api.entity.foods.Favorites;
import com.example.backend.api.entity.foods.NonFavorites;
import com.example.backend.api.entity.foods.Recommends;
import com.example.backend.api.entity.foods.SamplingFoods;
import com.example.backend.api.entity.idclass.UsersFoodsID;
import com.example.backend.api.repository.foods.FavoritesRepository;
import com.example.backend.api.repository.foods.FoodsRepository;
import com.example.backend.api.repository.foods.NonFavoritesRepository;
import com.example.backend.api.repository.foods.RecommendsRepository;
import com.example.backend.api.repository.foods.SamplingFoodsRepository;
import com.example.backend.api.repository.users.EvaluationsRepository;
import com.example.backend.exception.ResourceNotExistException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Slf4j
@Service
@RequiredArgsConstructor
public class FoodsService {

    private final FoodsRepository foodsRepository;
    private final FavoritesRepository favoritesRepository;
    private final NonFavoritesRepository nonFavoritesRepository;
    private final SamplingFoodsRepository samplingFoodsRepository;
    private final RecommendsRepository recommendsRepository;
    private final EvaluationsRepository evaluationsRepository;

    /**
     * Given a user number and a food entree, return the entree's basic information, flavor, and
     * whether it was liked or not.
     *
     * @param id must not be null
     * @return food info dto, never return null
     * @throws NullPointerException if it can't find entity
     */
    public ResponseFoodInfo getFoodInfo(Long no, Long id) {
        Map<String, Float> averageFlavorValues = evaluationsRepository.getAverageById(id);
        ResponseTasteInfo foodsTasteInfo = ResponseTasteInfo.builder()
            .salty(averageFlavorValues.get("saltiness"))
            .spicy(averageFlavorValues.get("spiciness"))
            .sweet(averageFlavorValues.get("sweetness"))
            .oily(averageFlavorValues.get("fatness")).build();

        return foodsRepository.findById(id).orElseThrow(NullPointerException::new)
            .toDTO(favoritesRepository.findById(new UsersFoodsID(no, id)).isPresent(), foodsTasteInfo);
    }

    /**
     * Returns the food sample data at the given index.
     *
     * @param index must not be null
     * @return basic foods info list, list size is 100 always
     */
    public List<ResponseBasicFoodInfo> getSamplingFoodList(Long index) {
        return samplingFoodsRepository.findAll(PageRequest.of(Math.toIntExact(index), 100))
            .getContent().stream()
            .map(SamplingFoods::toDTO)
            .collect(Collectors.toList());
    }

    /**
     * Returns a list of foods liked by a given number of users.
     *
     * @param no must not be null
     * @return list of foods liked by user
     */
    public List<ResponseBasicFoodInfo> getFavorFoodList(Long no) {
        return favoritesRepository.findByNo(no).stream()
            .map(Favorites::toDTO)
            .collect(Collectors.toList());
    }

    /**
     * Create and save a Favorties entity with the given values.
     *
     * @param no must not be null
     * @param id must not be null
     * @return true if the given values saved, otherwise false
     */
    @Transactional
    public boolean registFavorFood(Long no, Long id) {
        Favorites favorites = favoritesRepository.save(
            Favorites.builder().no(no).foodsId(id).build());

        return favorites.getNo() > 0;
    }

    /**
     * Delete a Favorties entity with the given values.
     *
     * @param no must not be null
     * @param id must not be null
     * @throws RuntimeException when deletion failed
     */
    @Transactional
    public void unregistFavorFood(Long no, Long id) {
        favoritesRepository.deleteById(new UsersFoodsID(no, id));
    }

    /**
     * Create and save a NonFavorties entity with the given values.
     *
     * @param no must not be null
     * @param id must not be null
     * @return true if the given values saved, otherwise false
     */
    @Transactional
    public boolean registNonFavorFood(Long no, Long id) {
        NonFavorites nonFavorites = nonFavoritesRepository.save(
            NonFavorites.builder().no(no).foodsId(id).build());

        return nonFavorites.getNo() > 0;
    }

    /**
     * Returns a list of possible food recommendations.
     *
     * @param no must not be null
     * @return a list of food recommendations
     * @throws NullPointerException list is null
     */
    public List<ResponseRecommendFood> getRecommendFoodList(Long no) {
        return recommendsRepository.findByNo(no).stream()
            .map(Recommends::toDTO)
            .collect(Collectors.toList());
    }

}
