package com.example.backend.api.entity.idclass;

import java.io.Serializable;
import javax.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class IngredientsInFoodsID implements Serializable {
    @Column(name = "ingredients_id")
    private Long ingredientsId;
    @Column(name = "foods_id")
    private Long foodsId;
}
