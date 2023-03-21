package com.example.backend.api.domain.favorites.repository;

import com.example.backend.api.domain.favorites.entity.Favorites;
import com.example.backend.api.domain.favorites.entity.FavoritesPK;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoritesRepository extends JpaRepository<Favorites, FavoritesPK> {
    Optional<Favorites> findByNo(Long no);
}
