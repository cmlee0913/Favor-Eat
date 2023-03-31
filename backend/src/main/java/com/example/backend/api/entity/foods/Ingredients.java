package com.example.backend.api.entity.foods;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity(name = "ingredients")
public class Ingredients {
    @Id
    private Long id;
    private String name;

}
