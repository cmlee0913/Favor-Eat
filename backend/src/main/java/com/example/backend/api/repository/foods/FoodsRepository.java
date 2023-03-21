package com.example.backend.api.repository.foods;

import com.example.backend.api.entity.foods.Foods;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodsRepository extends JpaRepository<Foods, Long> {
    Optional<Foods> findById(Long id);
}
