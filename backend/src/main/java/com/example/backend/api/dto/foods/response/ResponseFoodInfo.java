package com.example.backend.api.dto.foods.response;

import java.util.List;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ResponseFoodInfo {
    private String name;
    private String quantity;
    private String time;
    private String level;

    private ResponseNutrientInfo nutrientInfo;
    private ResponseTasteInfo tasteInfo;
    private List<ResponseRecipe> recipesList;
    private List<ResponseIngredientsInFood> ingredientsInFoodsList;

    @Builder
    public ResponseFoodInfo(String name, String quantity, String time, String level,
        ResponseNutrientInfo nutrientInfo,
        ResponseTasteInfo tasteInfo,
        List<ResponseRecipe> recipesList,
        List<ResponseIngredientsInFood> ingredientsInFoodsList) {
        this.name = name;
        this.quantity = quantity;
        this.time = time;
        this.level = level;
        this.nutrientInfo = nutrientInfo;
        this.tasteInfo = tasteInfo;
        this.recipesList = recipesList;
        this.ingredientsInFoodsList = ingredientsInFoodsList;
    }
}
