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
@IdClass(IngredientsInFoodsPK.class)
@Entity(name = "ingredients_in_foods")
public class IngredientsInFoods {
    @Id
    @Column(name = "ingredients_id")
    private Long ingredientsId;
    @Id
    @Column(name = "foods_id")
    private Long foodsId;

    private String unit;
    private Float amount;

    @ManyToOne
    @JoinColumn(name = "foods_id", insertable = false, updatable = false)
    private Foods foods;
}
