package com.example.backend.api.service.foods;

import com.example.backend.api.dto.foods.response.ResponseBasicFoodInfo;
import com.example.backend.api.dto.foods.response.ResponseFoodInfo;
import com.example.backend.api.dto.foods.response.ResponseRecommendFood;
import com.example.backend.api.entity.foods.Favorites;
import com.example.backend.api.entity.foods.Foods;
import com.example.backend.api.entity.foods.NonFavorites;
import com.example.backend.api.entity.idclass.UsersFoodsID;
import com.example.backend.api.repository.foods.FavoritesRepository;
import com.example.backend.api.repository.foods.FoodsRepository;
import com.example.backend.api.repository.foods.NonFavoritesRepository;
import com.example.backend.api.repository.foods.RecommendsRepository;
import com.example.backend.api.repository.foods.SamplingFoodsRepository;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FoodsService {

    private final FoodsRepository foodsRepository;
    private final FavoritesRepository favoritesRepository;
    private final NonFavoritesRepository nonFavoritesRepository;
    private final SamplingFoodsRepository samplingFoodsRepository;
    private final RecommendsRepository recommendsRepository;

    /**
     * @param id must not be null
     * @return food info dto, never return null
     * @throws NullPointerException if it can't find entity
     */
    public ResponseFoodInfo getFoodInfo(Long id) throws NullPointerException {
        return foodsRepository.findById(id)
            .map(Foods::toDTO).orElseThrow(NullPointerException::new);
    }

    /**
     * @param index must not be null
     * @return basic foods info list, list size is 100 always
     */
    public List<ResponseBasicFoodInfo> getSamplingFoodList(Long index) {
        return samplingFoodsRepository.findAll(PageRequest.of(Math.toIntExact(index), 100))
            .getContent().stream()
            .map(samplingfoods -> samplingfoods.toDTO())
            .collect(Collectors.toList());
    }

    public List<ResponseBasicFoodInfo> getFavorFoodList(Long no) {
        return favoritesRepository.findByNo(no).stream()
            .map(favorites -> favorites.toDTO())
            .collect(Collectors.toList());
    }

    /**
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

    @Transactional
    public void unregistFavorFood(Long no, Long id) throws RuntimeException {
        favoritesRepository.deleteById(new UsersFoodsID(no, id));
    }

    @Transactional
    public boolean registNonFavorFood(Long no, Long id) {
        NonFavorites nonFavorites = nonFavoritesRepository.save(
            NonFavorites.builder().no(no).foodsId(id).build());

        return nonFavorites.getNo() > 0;
    }

    public List<ResponseRecommendFood> getRecommendFoodList(Long no) {
        return recommendsRepository.findByNo(no).stream()
            .map(recommends -> recommends.toDTO())
            .collect(Collectors.toList());
    }
}
