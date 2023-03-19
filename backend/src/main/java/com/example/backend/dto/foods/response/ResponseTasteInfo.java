package com.example.backend.dto.foods.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ResponseTasteInfo {
    Float spiciness;
    Float sweetness;
    Float saltiness;
    Float fatness;

    @Builder
    public ResponseTasteInfo(Float spiciness, Float sweetness, Float saltiness, Float fatness) {
        this.spiciness = spiciness;
        this.sweetness = sweetness;
        this.saltiness = saltiness;
        this.fatness = fatness;
    }
}
