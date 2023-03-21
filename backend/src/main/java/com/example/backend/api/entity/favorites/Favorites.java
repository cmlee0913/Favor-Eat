package com.example.backend.api.entity.favorites;

import com.example.backend.api.entity.idclass.UsersFoodsID;
import com.example.backend.api.entity.foods.Foods;
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
@Entity(name = "favorites")
public class Favorites {
    @Id
    @Column(name = "no")
    private Long no;
    @Id
    @Column(name = "foods_id")
    private Long foodsId;

    @ManyToOne
    @JoinColumn(name = "no", insertable = false, updatable = false)
    private Users users;
    @ManyToOne
    @JoinColumn(name = "foods_id", insertable = false, updatable = false)
    private Foods foods;

    @Builder
    public Favorites(Long no, Long foodsId){
        this.no = no;
        this.foodsId = foodsId;
    }
}
