package com.example.backend.api.repository.foods;

import com.example.backend.api.entity.foods.NonFavorites;
import com.example.backend.api.entity.idclass.UsersFoodsID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NonFavoritesRepository extends JpaRepository<NonFavorites, UsersFoodsID> {

}
