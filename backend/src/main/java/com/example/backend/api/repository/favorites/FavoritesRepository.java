package com.example.backend.api.repository.favorites;

import com.example.backend.api.entity.favorites.Favorites;
import com.example.backend.api.entity.idclass.UsersFoodsID;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoritesRepository extends JpaRepository<Favorites, UsersFoodsID> {
    Optional<Favorites> findByNo(Long no);
}
