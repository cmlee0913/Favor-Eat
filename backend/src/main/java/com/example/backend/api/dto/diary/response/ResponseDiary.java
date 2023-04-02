package com.example.backend.api.dto.diary.response;

import java.time.LocalDateTime;
import java.util.List;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ResponseDiary {
    private Long id;
    private String title;
    private String content;
    private String emotion;
    private String registedDate;
    private List<ResponsePhotos> responsePhotos;

    @Builder
    public ResponseDiary(Long id, String title, String content, String emotion,
        String registedDate, List<ResponsePhotos> responsePhotos) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.emotion = emotion;
        this.registedDate = registedDate;
        this.responsePhotos = responsePhotos;
    }
}
