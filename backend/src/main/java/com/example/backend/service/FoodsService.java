package com.example.backend.service;

import com.example.backend.domain.foods.entity.Foods;
import com.example.backend.domain.foods.repository.FoodsRepository;
import com.example.backend.dto.foods.response.ResponseFoodInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FoodsService {
    private final FoodsRepository foodsRepository;

    public ResponseFoodInfo getFoodInfo(Long id) {
        Foods foods = foodsRepository.findById(id).get();

        ResponseFoodInfo responseFoodInfo = null;
        if(foods != null) {
            responseFoodInfo = foods.toDTO();
        }
        return  responseFoodInfo;
    }
}
