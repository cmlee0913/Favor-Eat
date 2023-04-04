export interface RecipeImgProps {
  mainImg: any;
}

export interface RecipeNavType {
  category: string;
  content: JSX.Element;
  isOpen: boolean;
}

export interface RecipeProps {
  RecipeArr: Array<RecipeNavType>;
  selectIdx: number;
}

export interface RecipeContentProps {
  RecipeArr: Array<RecipeNavType>;
  selectIdx: number;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
}

export interface RecipeNavProps {
  RecipeArr: Array<RecipeNavType>;
  selectIdx: number;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  level: string;
  time: string;
}

export interface RecipeHeaderProps {
  selectIdx: number;
  name: string;
  level: string;
  time: string;
}

export interface RecipeData {
  name: string;
  quantity: string;
  time: string;
  level: string;
  image: string;
  nutrientInfo: {
    calorie: number;
    moisture: number;
    protein: number;
    fat: number;
    carbohydrate: number;
    sugars: number;
    fiber: number;
    calcium: number;
    iron: number;
    phosphorus: number;
    potassium: number;
    salt: number;
    vitaminA: number;
    vitaminC: number;
    vitaminD: number;
    cholesterol: number;
    saturatedfat: number;
    transfat: number;
  };
  tasteInfo: {
    spicy: number;
    sweet: number;
    salty: number;
    oily: number;
  };
  recipesList: Array<RecipeList>;
  ingredientsInFoodList: Array<ingredientsInFoods>;
}

interface RecipeList {
  content: string;
  image: string;
}

interface ingredientsInFoods {
  name: string;
  unit: string;
  amount: string;
}

export interface MainNutrient {
  calorie: number;
  moisture: number;
  protein: number;
  fat: number;
  carbohydrate: number;
}

export interface RecipeProcessProps {
  quantity: string;
  ingredientsInFoodList: Array<ingredientsInFoods>;
  recipesList: Array<RecipeList>;
}

export interface FlavorRatingObject {
  spicy: number;
  sweet: number;
  salty: number;
  oily: number;
}

export interface FlavorRatingValueRequest {
  foodsId: number;
  spiciness: number;
  sweetness: number;
  saltiness: number;
  fatness: number;
}
