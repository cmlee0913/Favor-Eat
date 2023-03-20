package com.example.backend.api.service.foods;

import com.example.backend.api.dto.foods.response.ResponseFoodInfo;
import com.example.backend.api.domain.foods.entity.Foods;
import com.example.backend.api.domain.foods.repository.FoodsRepository;
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
