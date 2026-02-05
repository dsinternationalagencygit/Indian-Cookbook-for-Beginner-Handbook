
export type MealType = 'Vegetarian' | 'Chicken' | 'Rice & Sides' | 'Any';
export type TimeAvailable = '< 30 mins' | '30-60 mins' | '> 60 mins' | 'Any';
export type SpiceLevel = 'Mild' | 'Medium' | 'Hot' | 'Any';
export type CookingStyle = 'One Pot' | 'Stovetop' | 'Oven/Grill' | 'Any';

export interface IngredientGroup {
  category: string;
  items: string[];
}

export interface Recipe {
  id: string;
  name: string;
  section: string;
  mealType: MealType;
  time: string;
  timeType: TimeAvailable; // For filtering
  spice: SpiceLevel;
  style: CookingStyle;
  difficulty: string;
  serves: string;
  description: string;
  ingredients: IngredientGroup[];
  instructions: string[];
  substitutions?: string[];
  notes?: string[];
  commonMistakes?: string[];
  servingSuggestions?: string[];
  finishAndAdjust?: string[];
}

export interface UserPreferences {
  mealType: MealType;
  time: TimeAvailable;
  spice: SpiceLevel;
  style: CookingStyle;
}
