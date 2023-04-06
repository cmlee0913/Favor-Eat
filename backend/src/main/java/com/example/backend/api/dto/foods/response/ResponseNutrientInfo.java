package com.example.backend.api.dto.foods.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ResponseNutrientInfo {
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

    @Builder
    public ResponseNutrientInfo(Float calorie, Float moisture, Float protein, Float fat,
        Float carbohydrate, Float sugars, Float fiber, Float calcium, Float iron,
        Float phosphorus, Float potassium, Float salt, Float vitaminA, Float vitaminC,
        Float vitaminD, Float cholesterol, Float saturatedfat, Float transfat) {
        this.calorie = calorie;
        this.moisture = moisture;
        this.protein = protein;
        this.fat = fat;
        this.carbohydrate = carbohydrate;
        this.sugars = sugars;
        this.fiber = fiber;
        this.calcium = calcium;
        this.iron = iron;
        this.phosphorus = phosphorus;
        this.potassium = potassium;
        this.salt = salt;
        this.vitaminA = vitaminA;
        this.vitaminC = vitaminC;
        this.vitaminD = vitaminD;
        this.cholesterol = cholesterol;
        this.saturatedfat = saturatedfat;
        this.transfat = transfat;
    }
}
