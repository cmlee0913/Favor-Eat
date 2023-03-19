package com.example.backend.dto.foods.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ResponseRecipe {
    String content;
    String image;

    @Builder
    public ResponseRecipe(String content, String image) {
        this.content = content;
        this.image = image;
    }
}
