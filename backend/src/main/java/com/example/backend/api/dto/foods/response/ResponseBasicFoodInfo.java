package com.example.backend.api.dto.foods.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ResponseBasicFoodInfo {
    private Long foodsId;
    private String name;
    private String image;

    @Builder
    public ResponseBasicFoodInfo(Long foodsId, String name, String image){
        this.foodsId = foodsId;
        this.name = name;
        this.image = image;
    }
}
