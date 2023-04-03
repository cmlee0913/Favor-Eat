package com.example.backend.api.dto.diary.response;

import java.util.List;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ResponseDiaryAttribute {
    private Long id;
    private String title;
    private String content;
    private String emotion;
    private String registedDate;
    private List<ResponsePhotosAttribute> responsePhotoAttributes;

    @Builder
    public ResponseDiaryAttribute(Long id, String title, String content, String emotion,
        String registedDate, List<ResponsePhotosAttribute> responsePhotoAttributes) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.emotion = emotion;
        this.registedDate = registedDate;
        this.responsePhotoAttributes = responsePhotoAttributes;
    }
}
