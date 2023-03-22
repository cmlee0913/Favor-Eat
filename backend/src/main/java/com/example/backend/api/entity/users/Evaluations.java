package com.example.backend.api.entity.users;

import com.example.backend.api.entity.idclass.UsersFoodsID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@IdClass(UsersFoodsID.class)
@Entity(name = "evaluations")
public class Evaluations {

    @Id
    @Column(name = "no")
    private Long no;
    @Id
    @Column(name = "foods_id")
    private Long foodsId;

    private Float spiciness;
    private Float sweetness;
    private Float saltiness;
    private Float fatness;

    @Builder
    public Evaluations(Long no, Long foodsId, Float spiciness, Float sweetness,
        Float saltiness, Float fatness) {
        this.no = no;
        this.foodsId = foodsId;
        this.spiciness = spiciness;
        this.sweetness = sweetness;
        this.saltiness = saltiness;
        this.fatness = fatness;
    }
}
