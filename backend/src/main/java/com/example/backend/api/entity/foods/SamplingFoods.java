package com.example.backend.api.entity.foods;

import com.example.backend.api.dto.foods.response.ResponseBasicFoodInfo;
import javax.persistence.Column;
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
    @Column(name = "id")
    private Long foodsId;
    private String name;
    private String image;

    @Builder
    public SamplingFoods(Long foodsId, String name, String image){
        this.foodsId = foodsId;
        this.name = name;
        this.image = image;
    }

    public ResponseBasicFoodInfo toDTO() {
        return ResponseBasicFoodInfo.builder()
            .foodsId(this.foodsId)
            .name(this.name)
            .image(this.image)
            .build();
    }
}
