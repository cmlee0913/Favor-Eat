package com.example.backend.api.dto.diary.request;

import com.example.backend.api.entity.diary.Diary;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RequestDiary {
    private String title;
    private String content;
    private String emotion;
    private List<RequestPhotos> requestPhotosList;

    @Builder
    public Diary toEntity(Long userNo) {
        return Diary.builder()
            .no(userNo)
            .title(this.title)
            .content(this.content)
            .emotion(this.emotion)
            .registedDate(LocalDateTime.now().getYear() +
                "-" + LocalDateTime.now().getMonth() +
                "-" + LocalDateTime.now().getDayOfMonth())
            .build();
    }
}
