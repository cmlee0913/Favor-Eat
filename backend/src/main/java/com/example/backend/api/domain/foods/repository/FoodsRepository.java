package com.example.backend.api.domain.foods.repository;

import com.example.backend.api.domain.foods.entity.Foods;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodsRepository extends JpaRepository<Foods, Long> {
    Optional<Foods> findById(Long id);
}
