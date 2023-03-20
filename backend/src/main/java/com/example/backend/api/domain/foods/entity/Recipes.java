package com.example.backend.api.domain.foods.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@IdClass(RecipesPK.class)
@Entity(name = "recipes")
public class Recipes {
    @Id
    @Column(name="foods_id")
    private Long foodsId;
    @Id
    private Integer step;

    private String content;
    private String image;

    @ManyToOne()
    @JoinColumn(name = "foods_id", insertable = false, updatable = false)
    private Foods foods;
}
