package com.example.backend.api.dto.foods.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ResponseIngredientsInFood {
    private String unit;
    private String amount;

    @Builder
    public ResponseIngredientsInFood(String unit, String amount) {
        this.unit = unit;
        this.amount = amount;
    }
}
