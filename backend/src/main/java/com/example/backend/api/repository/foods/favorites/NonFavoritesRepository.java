package com.example.backend.api.repository.foods.favorites;

import com.example.backend.api.entity.foods.favorites.NonFavorites;
import com.example.backend.api.entity.idclass.UsersFoodsID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NonFavoritesRepository extends JpaRepository<NonFavorites, UsersFoodsID> {

}
