package com.example.backend.api.service.foods;

import com.example.backend.api.dto.foods.response.ResponseBasicFoodInfo;
import com.example.backend.api.dto.foods.response.ResponseFoodInfo;
import com.example.backend.api.entity.favorites.Favorites;
import com.example.backend.api.entity.favorites.NonFavorites;
import com.example.backend.api.entity.foods.Foods;
import com.example.backend.api.entity.foods.SamplingFoods;
import com.example.backend.api.entity.idclass.UsersFoodsID;
import com.example.backend.api.repository.favorites.FavoritesRepository;
import com.example.backend.api.repository.favorites.NonFavoritesRepository;
import com.example.backend.api.repository.foods.FoodsRepository;
import com.example.backend.api.repository.foods.SamplingFoodsRepository;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FoodsService {

    private final FoodsRepository foodsRepository;
    private final FavoritesRepository favoritesRepository;
    private final NonFavoritesRepository nonFavoritesRepository;
    private final SamplingFoodsRepository samplingFoodsRepository;

    /**
     * @param id must not be null
     * @return food info dto, never return null
     * @throws NullPointerException if it can't find entity
     */
    public ResponseFoodInfo getFoodInfo(Long id) throws NullPointerException {
        //ResponseFoodInfo responseFoodInfo = null;
        return foodsRepository.findById(id)
            .map(Foods::toDTO).orElseThrow(NullPointerException::new);
    }

    public List<ResponseBasicFoodInfo> getSamplingFoodList(Long index) {
        PageRequest pageRequest = PageRequest.of(Math.toIntExact(index), 100);
        Page<SamplingFoods> samplingList = samplingFoodsRepository.findAll(pageRequest);
        return samplingList.getContent().stream()
            .map(samplingfoods -> samplingfoods.toDTO())
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
        UsersFoodsID favoritesId = new UsersFoodsID(no, id);
        favoritesRepository.deleteById(favoritesId);
    }

    public List<ResponseBasicFoodInfo> getFavorFoodList(long no) {
        List<ResponseBasicFoodInfo> responseBasicFoodInfoList = null;

        List<Favorites> favoritesList = favoritesRepository.findByNo(no);
        return favoritesList.stream()
            .map(favorites -> favorites.toDTO())
            .collect(Collectors.toList());
    }

    @Transactional
    public boolean registNonFavorFood(Long no, Long id) {
        NonFavorites nonFavorites = nonFavoritesRepository.save(
            NonFavorites.builder().no(no).foodsId(id).build()
        );

        return nonFavorites.getNo() > 0;
    }
}
