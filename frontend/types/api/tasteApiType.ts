//취향분석시 응답받은 food data
export interface FoodForTasteResponseType {
  image: string;
  name: string;
  foodsId: number;
}

//취향 검사 결과 request
export interface FoodRateValueRequestType {
  foodsId: number;
  spiciness: number;
  sweetness: number;
  saltiness: number;
  fatness: number;
}
