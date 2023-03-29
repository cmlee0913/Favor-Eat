package com.example.backend.api.dto.foods.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ResponseTasteInfo {
    Float spicy;
    Float sweet;
    Float salty;
    Float oily;

    @Builder
    public ResponseTasteInfo(Float spicy, Float sweet, Float salty, Float oily) {
        this.spicy = spicy;
        this.sweet = sweet;
        this.salty = salty;
        this.oily = oily;
    }
}
