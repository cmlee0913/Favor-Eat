package com.example.backend.api.service.foods;

import com.example.backend.api.dto.foods.response.ResponseFavorFood;
import com.example.backend.api.dto.foods.response.ResponseFoodInfo;
import com.example.backend.api.entity.favorites.Favorites;
import com.example.backend.api.entity.foods.Foods;
import com.example.backend.api.entity.idclass.UsersFoodsID;
import com.example.backend.api.repository.favorites.FavoritesRepository;
import com.example.backend.api.repository.foods.FoodsRepository;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FoodsService {

    private final FoodsRepository foodsRepository;
    private final FavoritesRepository favoritesRepository;

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

    /**
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

    @Transactional
    public void unregistFavorFood(Long no, Long id) throws RuntimeException{
        UsersFoodsID favoritesId = new UsersFoodsID(no, id);
        favoritesRepository.deleteById(favoritesId);
    }

    public List<ResponseFavorFood> getFavorFoodList(long no) {
        List<ResponseFavorFood> responseFavorFoodList = null;

        List<Favorites> favoritesList = favoritesRepository.findByNo(no);
        return favoritesList.stream()
            .map(favorites -> favorites.toDTO())
            .collect(Collectors.toList());
    }
}
