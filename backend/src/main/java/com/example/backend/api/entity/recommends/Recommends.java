package com.example.backend.api.entity.recommends;

import com.example.backend.api.dto.foods.response.ResponseRecommendFood;
import com.example.backend.api.dto.foods.response.ResponseTasteInfo;
import com.example.backend.api.entity.foods.Foods;
import com.example.backend.api.entity.idclass.UsersFoodsID;
import com.example.backend.api.entity.users.Users;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@IdClass(UsersFoodsID.class)
@Entity(name = "recommends")
public class Recommends {

    @Id
    @Column(name = "no")
    private Long no;
    @Id
    @Column(name = "foods_id")
    private Long foodsId;
    @Column(name = "recommends_no")
    private Integer recommendsNo;

    @ManyToOne
    @JoinColumn(name = "no", insertable = false, updatable = false)
    private Users users;
    @ManyToOne
    @JoinColumn(name = "foods_id", insertable = false, updatable = false)
    private Foods foods;

    @Builder
    public Recommends(Long no, Long foodsId, Integer recommendsNo){
        this.no = no;
        this.foodsId = foodsId;
        this.recommendsNo = recommendsNo;
    }

    public ResponseRecommendFood toDTO() {
        return ResponseRecommendFood.builder()
            .id(this.foodsId)
            .name(this.foods.getName())
            .image(this.foods.getImage())
            .time(this.foods.getTime())
            .level(this.foods.getLevel())
            .responseTasteInfo(buildTasteInfoDTO())
            .build();
    }

    private ResponseTasteInfo buildTasteInfoDTO() {
        return ResponseTasteInfo.builder()
            .fatness(this.foods.getFatness())
            .saltiness(this.foods.getSaltiness())
            .spiciness(this.foods.getSpiciness())
            .sweetness(this.foods.getSweetness())
            .build();
    }
}
