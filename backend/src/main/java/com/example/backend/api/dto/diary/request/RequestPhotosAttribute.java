package com.example.backend.api.dto.diary.request;

import com.example.backend.api.entity.diary.Photos;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RequestPhotosAttribute {

    private String original_name;
    private String saved_name;

    @Builder
    public Photos toEntity(Long diaryId) {
        return Photos.builder()
            .id(diaryId)
            .original_name(this.original_name)
            .saved_name(this.saved_name)
            .build();
    }
}
