package com.example.backend.api.dto.diary.request;

import com.example.backend.api.entity.diary.Diary;
import java.time.Instant;
import java.util.List;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RequestDiaryAttribute {
    private String title;
    private String content;
    private String emotion;
    private List<RequestPhotosAttribute> requestPhotosAttributeList;

    @Builder
    public Diary toEntity(Long userNo) {
        return Diary.builder()
            .no(userNo)
            .title(this.title)
            .content(this.content)
            .emotion(this.emotion)
            .registedDate(Long.toString(Instant.now().toEpochMilli()))
            .build();
    }
}
