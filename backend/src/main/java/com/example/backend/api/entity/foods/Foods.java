package com.example.backend.api.entity.foods;

import com.example.backend.api.dto.foods.response.ResponseFoodInfo;
import com.example.backend.api.dto.foods.response.ResponseIngredientsInFood;
import com.example.backend.api.dto.foods.response.ResponseNutrientInfo;
import com.example.backend.api.dto.foods.response.ResponseRecipe;
import com.example.backend.api.dto.foods.response.ResponseTasteInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@NoArgsConstructor
@Entity(name = "foods")
public class Foods {

    @Id
    private Long id;
    private String name;
    @Column(name = "sub_name")
    private String subName;
    private String quantity;
    private String time;
    private String level;
    private String image;
    private Float spiciness;
    private Float sweetness;
    private Float saltiness;
    private Float fatness;
    private Float calorie;
    private Float moisture;
    private Float protein;
    private Float fat;
    private Float carbohydrate;
    private Float sugars;
    private Float fiber;
    private Float calcium;
    private Float iron;
    private Float phosphorus;
    private Float potassium;
    private Float salt;
    private Float vitaminA;
    private Float vitaminC;
    private Float vitaminD;
    private Float cholesterol;
    private Float saturatedfat;
    private Float transfat;

    @OneToMany(mappedBy = "foods")
    @JsonIgnoreProperties({"foods"})
    List<Recipes> recipesList;

    @OneToMany(mappedBy = "foods")
    @JsonIgnoreProperties({"foods"})
    List<IngredientsInFoods> ingredientsInFoodsList;

    public ResponseFoodInfo toDTO() {
        return ResponseFoodInfo.builder()
            .name(this.getName())
            .level(this.getLevel())
            .quantity(this.getQuantity())
            .time(this.getTime())
            .image(this.getImage())
            .recipesList(recipesListEntityToDTO(this.recipesList))
            .nutrientInfo(buildNutrientInfoDTO())
            .tasteInfo(buildTasteInfoDTO())
            .ingredientsInFoodsList(ingredientsListEntityToDTO(this.ingredientsInFoodsList))
            .build();
    }

    private ResponseNutrientInfo buildNutrientInfoDTO() {
        return ResponseNutrientInfo.builder()
            .calcium(this.calcium)
            .calorie(this.calorie)
            .carbohydrate(this.carbohydrate)
            .fat(this.fat)
            .cholesterol(this.cholesterol)
            .iron(this.iron)
            .fiber(this.fiber)
            .moisture(this.moisture)
            .phosphorus(this.phosphorus)
            .potassium(this.potassium)
            .protein(this.protein)
            .salt(this.salt)
            .saturatedfat(this.saturatedfat)
            .sugars(this.sugars)
            .transfat(this.transfat)
            .vitaminA(this.vitaminA)
            .vitaminC(this.vitaminC)
            .vitaminD(this.vitaminD)
            .build();
    }


    private ResponseTasteInfo buildTasteInfoDTO() {
        return ResponseTasteInfo.builder()
            .oily(this.getFatness())
            .salty(this.getSaltiness())
            .spicy(this.getSpiciness())
            .sweet(this.getSweetness())
            .build();
    }

    private List<ResponseRecipe> recipesListEntityToDTO(List<Recipes> recipesList) {
        return recipesList.stream()
            .map(recipe -> new ResponseRecipe(recipe.getContent(), recipe.getImage()))
            .collect(Collectors.toList());
    }

    private List<ResponseIngredientsInFood> ingredientsListEntityToDTO(
        List<IngredientsInFoods> ingredientsInFoodsList) {
        return ingredientsInFoodsList.stream()
            .map(ingredients -> new ResponseIngredientsInFood(ingredients.getUnit(),
                ingredients.getAmount()))
            .collect(Collectors.toList());
    }

    public void updateSpiciness(Float spiciness){
        this.spiciness = spiciness;
    }
    public void updateSweetness(Float sweetness){
        this.sweetness = sweetness;
    }
    public void updateSaltiness(Float saltiness){
        this.saltiness = saltiness;
    }
    public void updateFatness(Float fatness){
        this.fatness = fatness;
    }
}
