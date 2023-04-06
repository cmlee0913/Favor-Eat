package com.example.backend.api.dto.foods.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ResponseRecommendFood {
    private Long id;
    private String name;
    private String image;
    private String time;
    private String level;
    private ResponseTasteInfo responseTasteInfo;

    @Builder
    public ResponseRecommendFood(Long id, String name, String image, String time,
        String level, ResponseTasteInfo responseTasteInfo) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.time = time;
        this.level = level;
        this.responseTasteInfo = responseTasteInfo;
    }
}
