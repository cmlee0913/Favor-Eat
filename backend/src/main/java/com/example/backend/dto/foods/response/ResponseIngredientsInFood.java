package com.example.backend.dto.foods.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ResponseIngredientsInFood {
    private String unit;
    private Float amount;

    @Builder
    public ResponseIngredientsInFood(String unit, Float amount) {
        this.unit = unit;
        this.amount = amount;
    }
}
