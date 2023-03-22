package com.example.backend.api.dto.users.request;

import com.example.backend.api.entity.users.Evaluations;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RequestTasteEvaluations {
    private Long foodsId;
    private Float spiciness;
    private Float sweetness;
    private Float saltiness;
    private Float fatness;

    @Builder
    public RequestTasteEvaluations(Long foodsId, Float spiciness, Float sweetness,
        Float saltiness, Float fatness) {
        this.foodsId = foodsId;
        this.spiciness = spiciness;
        this.sweetness = sweetness;
        this.saltiness = saltiness;
        this.fatness = fatness;
    }

    public Evaluations toEntity(Long usersNo) {
        return Evaluations.builder()
            .no(usersNo)
            .fatness(this.getFatness())
            .saltiness(this.getSaltiness())
            .spiciness(this.getSpiciness())
            .sweetness(this.getSweetness())
            .foodsId(this.getFoodsId())
            .build();
    }
}
