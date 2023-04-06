package com.example.backend.api.entity.idclass;

import java.io.Serializable;
import javax.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class RecipesID implements Serializable {
    @Column(name = "foods_id")
    private Long foodsId;
    private Integer step;
}
