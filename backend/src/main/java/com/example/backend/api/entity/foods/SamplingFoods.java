package com.example.backend.api.entity.foods;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity(name = "sampling_foods")
public class SamplingFoods {
    @Id
    private Long id;
    private String name;
    private String image;

    @Builder
    public SamplingFoods(Long id, String name, String image){
        this.id = id;
        this.name = name;
        this.image = image;
    }
}
