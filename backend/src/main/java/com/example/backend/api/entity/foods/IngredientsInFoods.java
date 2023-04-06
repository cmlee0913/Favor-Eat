package com.example.backend.api.entity.foods;

import com.example.backend.api.dto.foods.response.ResponseIngredientsInFood;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.example.backend.api.entity.idclass.IngredientsInFoodsID;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@IdClass(IngredientsInFoodsID.class)
@Entity(name = "ingredients_in_foods")
public class IngredientsInFoods {
    @Id
    @Column(name = "ingredients_id")
    private Long ingredientsId;
    @Id
    @Column(name = "foods_id")
    private Long foodsId;

    private String unit;
    private String amount;

    @ManyToOne
    @JoinColumn(name = "foods_id", insertable = false, updatable = false)
    private Foods foods;

    @ManyToOne
    @JoinColumn(name = "ingredients_id", insertable = false, updatable = false)
    private Ingredients ingredients;

    public ResponseIngredientsInFood toDTO(){
        return ResponseIngredientsInFood.builder()
            .name(ingredients.getName())
            .amount(this.amount)
            .unit(this.unit).build();
    }
}
