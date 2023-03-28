package com.example.backend.api.repository.foods;

import com.example.backend.api.entity.foods.SamplingFoods;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SamplingFoodsRepository extends JpaRepository <SamplingFoods, Long> {
}
