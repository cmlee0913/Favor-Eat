package com.example.backend.api.repository.favorites;

import com.example.backend.api.entity.favorites.NonFavorites;
import com.example.backend.api.entity.idclass.UsersFoodsID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NonFavoritesRepository extends JpaRepository<NonFavorites, UsersFoodsID> {

}
