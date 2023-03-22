package com.example.backend.api.service.foods;

import com.example.backend.api.entity.favorites.Favorites;
import com.example.backend.api.repository.favorites.FavoritesRepository;
import com.example.backend.api.entity.foods.Foods;
import com.example.backend.api.repository.foods.FoodsRepository;
import com.example.backend.api.dto.foods.response.ResponseFoodInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FoodsService {

    private final FoodsRepository foodsRepository;
    private final FavoritesRepository favoritesRepository;

    public ResponseFoodInfo getFoodInfo(Long id) {
        Foods foods = foodsRepository.findById(id).get();

        ResponseFoodInfo responseFoodInfo = null;
        if (foods != null) {
            responseFoodInfo = foods.toDTO();
        }
        return responseFoodInfo;
    }

    public boolean registFavorFood(Long no, Long id) {
        Favorites favorites = favoritesRepository.save(
            Favorites.builder().no(no).foodsId(id).build());

        if(favorites.getNo() > 0){
            return true;
        }else{
            return false;
        }
    }
}
