package com.example.backend.api.repository.foods.favorites;

import com.example.backend.api.entity.foods.favorites.Favorites;
import com.example.backend.api.entity.idclass.UsersFoodsID;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoritesRepository extends JpaRepository<Favorites, UsersFoodsID> {
    List<Favorites> findByNo(Long no);
}
