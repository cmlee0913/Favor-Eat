package com.example.backend.api.entity.diary;

import com.example.backend.api.dto.diary.response.ResponsePhotosAttribute;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity(name = "photos")
public class Photos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "photos_id")
    private Long photosId;

    @Column(name = "id")
    private Long id;

    @Column(name = "original_name")
    private String original_name;

    @Column(name = "saved_name")
    private String saved_name;

    @ManyToOne
    @JoinColumn(name = "id", insertable = false, updatable = false)
    private Diary diary;

    @Builder
    public Photos(Long id, String original_name, String saved_name) {
        this.id = id;
        this.original_name = original_name;
        this.saved_name = saved_name;
    }

    public ResponsePhotosAttribute toDTO() {
        return ResponsePhotosAttribute.builder()
            .original_name(this.original_name)
            .saved_name(this.saved_name)
            .build();
    }
}
