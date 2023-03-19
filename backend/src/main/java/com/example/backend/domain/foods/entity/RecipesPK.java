package com.example.backend.domain.foods.entity;

import java.io.Serializable;
import javax.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class RecipesPK implements Serializable {
    @Column(name = "foods_id")
    private Long foodsId;
    private Integer step;
}
