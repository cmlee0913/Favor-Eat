package com.example.backend.api.dto.diary.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ResponsePhotos {
    private String original_name;
    private String saved_name;

    @Builder
    public ResponsePhotos(String original_name, String saved_name) {
        this.original_name = original_name;
        this.saved_name = saved_name;
    }
}
