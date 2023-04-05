package com.example.backend.api.repository.foods;

import com.example.backend.api.entity.foods.Favorites;
import com.example.backend.api.entity.idclass.UsersFoodsID;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoritesRepository extends JpaRepository<Favorites, UsersFoodsID> {

    List<Favorites> findByNo(Long no);

    @Override
    Optional<Favorites> findById(UsersFoodsID usersFoodsID);
}
