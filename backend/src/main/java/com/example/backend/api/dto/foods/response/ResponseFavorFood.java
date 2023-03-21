package com.example.backend.api.dto.foods.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ResponseFavorFood {
    private Long no;
    private Long foodId;

    @Builder
    public ResponseFavorFood(Long no, Long foodId){
        this.no = no;
        this.foodId = foodId;
    }
}
