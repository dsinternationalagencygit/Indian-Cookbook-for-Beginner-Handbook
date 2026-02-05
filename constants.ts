
import { Recipe, MealType, TimeAvailable, SpiceLevel, CookingStyle } from './types';

export const MEAL_TYPES: MealType[] = ['Vegetarian', 'Chicken', 'Rice & Sides', 'Any'];
export const TIME_OPTIONS: TimeAvailable[] = ['< 30 mins', '30-60 mins', '> 60 mins', 'Any'];
export const SPICE_LEVELS: SpiceLevel[] = ['Mild', 'Medium', 'Hot', 'Any'];
export const COOKING_STYLES: CookingStyle[] = ['One Pot', 'Stovetop', 'Oven/Grill', 'Any'];

export const RECIPES: Recipe[] = [
  // SECTION 1: EVERYDAY VEGETARIAN
  {
    id: 'v1',
    name: 'Chana Masala',
    section: 'Everyday Vegetarian Dishes',
    mealType: 'Vegetarian',
    time: '35 minutes',
    timeType: '30-60 mins',
    spice: 'Medium',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'A comforting North Indian curry made with pantry staples and bold, balanced spices.',
    ingredients: [
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, finely chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp ground cumin', '1 tsp ground coriander', '½ tsp turmeric powder', '1 tsp Kashmiri chili powder or mild paprika'] },
      { category: 'Sauce and Chickpeas', items: ['1 cup canned crushed tomatoes', '2 cans chickpeas (15 oz each), drained and rinsed', '½ cup water'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Salt to taste', 'Fresh cilantro, chopped, optional'] }
    ],
    instructions: [
      'Heat oil in a pan over medium heat. Add the chopped onions and cook for 6 to 8 minutes until soft and lightly golden.',
      'Stir in the ginger garlic paste and cook for about 30 seconds, just until fragrant.',
      'Add cumin, coriander, turmeric, and chili powder. Stir for 20-30 seconds to bloom.',
      'Add crushed tomatoes and salt. Cook for 8-10 mins until oil separates.',
      'Stir in chickpeas and water. Simmer uncovered for 10 minutes.',
      'Add garam masala, adjust salt, and simmer for 2-3 more minutes.',
      'Let rest for 5 minutes before serving.'
    ],
    substitutions: ['No canned tomatoes? Use 2 fresh tomatoes.', 'Want extra protein? Add cubed potatoes or spinach.'],
    commonMistakes: ['Burning spices (lower heat first).', 'Watery curry (simmer uncovered to thicken).'],
    finishAndAdjust: ['Check seasoning: Chickpeas need plenty of salt.', 'Balance acidity: Add pinch of sugar if too tangy.']
  },
  {
    id: 'v2',
    name: 'Dal Tadka',
    section: 'Everyday Vegetarian Dishes',
    mealType: 'Vegetarian',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Mild',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'A simple and comforting lentil dish finished with a fragrant spiced oil for extra flavor.',
    ingredients: [
      { category: 'Dal Base', items: ['1 cup yellow split pigeon peas (toor dal), rinsed', '3 cups water', '½ tsp turmeric powder', '¾ tsp salt'] },
      { category: 'Tadka', items: ['2 tbsp oil or ghee', '1 small onion, finely chopped', '1 tsp ginger garlic paste', '1 tsp ground cumin', '½ tsp Kashmiri chili powder'] },
      { category: 'Finish', items: ['½ tsp garam masala', 'Fresh cilantro', 'Lemon juice, optional'] }
    ],
    instructions: [
      'Simmer lentils, water, turmeric, and salt for 15-18 mins until fully soft.',
      'Lightly mash the lentils for a creamy texture; keep warm on low.',
      'In a small pan, heat oil/ghee and cook onion 5-6 mins until golden.',
      'Stir in ginger garlic paste, then cumin and chili powder for 30 seconds.',
      'Pour the hot tadka over the dal and stir.',
      'Add garam masala and simmer for 2-3 minutes.'
    ],
    substitutions: ['No toor dal? Use yellow lentils or red lentils.', 'No ghee? Use neutral oil.'],
    commonMistakes: ['Undercooking lentils - they must be fully soft.', 'Burning the tadka spices.'],
    finishAndAdjust: ['Adjust consistency: Add hot water to loosen if needed.', 'Balance flavor: Squeeze lemon juice if it tastes flat.']
  },
  {
    id: 'v3',
    name: 'Masoor Dal',
    section: 'Everyday Vegetarian Dishes',
    mealType: 'Vegetarian',
    time: '25 minutes',
    timeType: '< 30 mins',
    spice: 'Mild',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'A quick red lentil dish with a smooth texture and a mustard-cumin tadka.',
    ingredients: [
      { category: 'Dal Base', items: ['1 cup red lentils, rinsed', '3 cups water', '½ tsp turmeric powder', '¾ tsp salt'] },
      { category: 'Tadka', items: ['2 tbsp oil or ghee', '1 small onion, finely chopped', '1 tsp ginger garlic paste', '½ tsp ground cumin', '½ tsp mustard seeds', '½ tsp Kashmiri chili powder'] },
      { category: 'Finish', items: ['½ tsp garam masala', 'Fresh cilantro', 'Lemon juice, optional'] }
    ],
    instructions: [
      'Simmer rinsed lentils with water, turmeric, and salt for 12-15 mins until soft.',
      'Whisk or stir dal until smooth and creamy.',
      'Heat oil/ghee in a small pan; pop mustard seeds.',
      'Add onion and cook 4-5 mins; stir in ginger garlic paste for 30s.',
      'Bloom cumin and chili powder briefly, then pour over dal.',
      'Simmer with garam masala for 2-3 minutes.'
    ],
    substitutions: ['No red lentils? Use yellow lentils or split mung dal.'],
    commonMistakes: ['Overcooking - red lentils turn to mush quickly.', 'Dal too thick - loosen with hot water.'],
    finishAndAdjust: ['Add lemon juice to brighten the flavor.', 'Rest for 5 mins to allow flavors to meld.']
  },
  {
    id: 'v4',
    name: 'Aloo Gobi',
    section: 'Everyday Vegetarian Dishes',
    mealType: 'Vegetarian',
    time: '35 minutes',
    timeType: '30-60 mins',
    spice: 'Medium',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Classic potato and cauliflower curry cooked until tender and lightly crisp.',
    ingredients: [
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, finely chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Vegetables', items: ['2 medium potatoes, diced (3/4 inch)', '1 small cauliflower, in bite-sized florets'] },
      { category: 'Spices', items: ['1 tsp ground cumin', '1 tsp ground coriander', '½ tsp turmeric powder', '½ tsp Kashmiri chili powder'] },
      { category: 'Finish', items: ['½ tsp garam masala', 'Salt to taste', 'Fresh cilantro', 'Lemon juice'] }
    ],
    instructions: [
      'Cook onions in oil 6-7 mins until golden; add ginger garlic paste for 30s.',
      'Bloom cumin, coriander, turmeric, and chili powder for 20s.',
      'Add potatoes, cauliflower, and salt; stir well.',
      'Cover and cook on medium-low for 18-22 mins, stirring occasionally.',
      'Uncover and cook 3-4 mins to allow moisture to evaporate and edges to crisp.',
      'Add garam masala, turn off heat, and rest 5 mins.'
    ],
    substitutions: ['No cauliflower? Use broccoli florets.', 'Extra protein? Add green peas.'],
    commonMistakes: ['Crowding the pan - use a wide pan for even cooking.', 'Undercooked potatoes - test with a fork.'],
    finishAndAdjust: ['Add lemon juice if it tastes flat.', 'For softer veggies, cover and cook longer with a splash of water.']
  },
  {
    id: 'v5',
    name: 'Aloo Matar',
    section: 'Everyday Vegetarian Dishes',
    mealType: 'Vegetarian',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Medium',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'A comforting potato and green pea curry in a lightly spiced tomato-onion sauce.',
    ingredients: [
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, finely chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp ground cumin', '1 tsp ground coriander', '½ tsp turmeric powder', '½ tsp Kashmiri chili powder'] },
      { category: 'Veg & Sauce', items: ['2 medium potatoes, diced', '1 cup frozen green peas', '1 cup canned crushed tomatoes', '½ cup water'] },
      { category: 'Finish', items: ['½ tsp garam masala', 'Salt to taste', 'Fresh cilantro'] }
    ],
    instructions: [
      'Cook onions until golden; add ginger garlic paste and bloom spices.',
      'Cook tomatoes and salt 6-8 mins until sauce thickens and oil separates.',
      'Add potatoes, peas, and water.',
      'Cover and cook on medium-low for 15-18 mins until potatoes are tender.',
      'Add garam masala, simmer 2-3 mins, and rest before serving.'
    ],
    substitutions: ['Frozen peas can be added directly without thawing.'],
    commonMistakes: ['Undercooked potatoes.', 'Watery curry - simmer uncovered to reduce.'],
    finishAndAdjust: ['Check salt once potatoes are fully cooked.', 'Add pinch of sugar if tomatoes are too sharp.']
  },
  {
    id: 'v6',
    name: 'Palak Dal',
    section: 'Everyday Vegetarian Dishes',
    mealType: 'Vegetarian',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Mild',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Nourishing lentils cooked with fresh spinach and finished with gentle tempering.',
    ingredients: [
      { category: 'Dal Base', items: ['1 cup yellow or red lentils, rinsed', '3 cups water', '½ tsp turmeric powder', '¾ tsp salt'] },
      { category: 'Spinach', items: ['4 cups fresh spinach, chopped', '½ cup water'] },
      { category: 'Tadka', items: ['2 tbsp oil or ghee', '1 small onion, finely chopped', '1 tsp ginger garlic paste', '1 tsp ground cumin', '½ tsp Kashmiri chili powder'] },
      { category: 'Finish', items: ['½ tsp garam masala', 'Fresh cilantro', 'Lemon juice'] }
    ],
    instructions: [
      'Simmer lentils 15-18 mins until fully cooked.',
      'Add spinach and water; cook 3-4 mins until wilted.',
      'Make tadka: fry onion, add ginger garlic, bloom cumin and chili powder.',
      'Pour tadka over dal; add garam masala and simmer 2-3 mins.',
      'Let rest before serving.'
    ],
    substitutions: ['No fresh spinach? Use thawed and squeezed frozen spinach.'],
    commonMistakes: ['Adding spinach too early.', 'Using too much water with frozen spinach.'],
    finishAndAdjust: ['Add lemon juice to balance the earthy spinach.', 'Thin with hot water if it thickens too much.']
  },
  {
    id: 'v7',
    name: 'Simple Mixed Vegetable Curry',
    section: 'Everyday Vegetarian Dishes',
    mealType: 'Vegetarian',
    time: '35 minutes',
    timeType: '30-60 mins',
    spice: 'Medium',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'A flexible everyday curry made with common vegetables in a spiced tomato-onion sauce.',
    ingredients: [
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, finely chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp ground cumin', '1 tsp ground coriander', '½ tsp turmeric powder', '½ tsp Kashmiri chili powder'] },
      { category: 'Veg & Sauce', items: ['1 cup cauliflower', '1 cup carrots', '1 cup green beans', '1 cup frozen peas', '1 cup crushed tomatoes', '¾ cup water'] },
      { category: 'Finish', items: ['½ tsp garam masala', 'Salt to taste', 'Fresh cilantro'] }
    ],
    instructions: [
      'Cook onions 6-7 mins; add ginger garlic and bloom spices.',
      'Cook tomatoes 6-8 mins until oil separates.',
      'Add all vegetables and water; cover and cook 15-18 mins.',
      'Simmer uncovered 3-4 mins to thicken if needed.',
      'Finish with garam masala and rest 5 mins.'
    ],
    substitutions: ['Switch cauliflower for broccoli or zucchini.'],
    commonMistakes: ['Cutting vegetables unevenly.', 'Watery curry - simmer uncovered at the end.'],
    finishAndAdjust: ['Add hot water to loosen or simmer to thicken.', 'Check seasoning at the very end.']
  },
  {
    id: 'v8',
    name: 'Rajma Masala',
    section: 'Everyday Vegetarian Dishes',
    mealType: 'Vegetarian',
    time: '40 minutes',
    timeType: '30-60 mins',
    spice: 'Medium',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Rich and comforting kidney bean curry simmered in a spiced tomato sauce.',
    ingredients: [
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, finely chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp ground cumin', '1 tsp ground coriander', '½ tsp turmeric powder', '1 tsp Kashmiri chili powder'] },
      { category: 'Beans & Sauce', items: ['2 cans kidney beans, drained and rinsed', '1 cup canned crushed tomatoes', '¾ cup water'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Salt to taste', 'Fresh cilantro'] }
    ],
    instructions: [
      'Cook onions until golden; add ginger garlic and bloom spices.',
      'Cook tomatoes 8-10 mins until oil separates.',
      'Stir in beans and water; simmer uncovered for 15 mins to develop flavor.',
      'Add garam masala, adjust salt, and simmer 2-3 mins more.',
      'Rest 5 mins before serving.'
    ],
    substitutions: ['No kidney beans? Use pinto or cannellini beans.', 'Add 2 tbsp cream at end for extra richness.'],
    commonMistakes: ['Skipping the simmer - beans need time to absorb flavors.', 'Watery consistency.'],
    finishAndAdjust: ['Check salt carefully - beans absorb a lot.', 'Add pinch of sugar if too acidic.']
  },
  {
    id: 'v9',
    name: 'Vegetable Korma',
    section: 'Everyday Vegetarian Dishes',
    mealType: 'Vegetarian',
    time: '40 minutes',
    timeType: '30-60 mins',
    spice: 'Mild',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'A mild, creamy mixed vegetable curry with coconut milk or heavy cream.',
    ingredients: [
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, finely chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp ground cumin', '1 tsp ground coriander', '½ tsp turmeric powder', '¼ tsp mild chili powder'] },
      { category: 'Vegetables', items: ['1 cup diced potatoes', '1 cup carrots', '1 cup cauliflower', '½ cup green peas'] },
      { category: 'Sauce', items: ['1 cup crushed tomatoes', '¾ cup water', '½ cup coconut milk or cream'] },
      { category: 'Finish', items: ['½ tsp garam masala', 'Salt to taste', 'Fresh cilantro'] }
    ],
    instructions: [
      'Cook onions 6-7 mins; add ginger garlic and bloom spices.',
      'Add tomatoes and salt; cook 6-8 mins.',
      'Add veg and water; cover and cook 18-20 mins until tender.',
      'Reduce heat to low and stir in coconut milk/cream.',
      'Simmer gently (do not boil) for 3-4 mins.',
      'Add garam masala, turn off heat, and rest 5 mins.'
    ],
    substitutions: ['No coconut milk? Use heavy cream.', 'Add cashews for extra korma feel.'],
    commonMistakes: ['Boiling after adding cream/coconut milk (will split).', 'Over-spicing - korma should be mild.'],
    finishAndAdjust: ['Add a splash more cream if you want it richer.', 'Taste for salt after adding the cream.']
  },
  {
    id: 'v10',
    name: 'Jeera Aloo',
    section: 'Everyday Vegetarian Dishes',
    mealType: 'Vegetarian',
    time: '25 minutes',
    timeType: '< 30 mins',
    spice: 'Mild',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Simple potato dish tossed with cumin and mild spices, perfect as a side or quick meal.',
    ingredients: [
      { category: 'Base', items: ['3 tbsp oil', '1 tsp cumin seeds', '4 medium potatoes, diced small'] },
      { category: 'Spices', items: ['½ tsp turmeric powder', '1 tsp ground coriander', '½ tsp Kashmiri chili powder', 'Salt to taste'] },
      { category: 'Finish', items: ['1 tsp lemon juice', 'Fresh cilantro'] }
    ],
    instructions: [
      'Heat oil; sizzle cumin seeds until fragrant.',
      'Add diced potatoes and salt; stir to coat.',
      'Add turmeric, coriander, and chili powder.',
      'Cover and cook 12-15 mins, stirring every few mins.',
      'Uncover and cook 2-3 mins to crisp slightly.',
      'Add lemon juice and cilantro; serve.'
    ],
    commonMistakes: ['Crowding the pan - potatoes will steam instead of brown.', 'Stirring too often.'],
    finishAndAdjust: ['Add splash of water if sticking.', 'Needs brightness? Add more lemon.']
  },

  // SECTION 2: CHICKEN DISHES
  {
    id: 'c1',
    name: 'Butter Chicken',
    section: 'Chicken Dishes Americans Love',
    mealType: 'Chicken',
    time: '40 minutes',
    timeType: '30-60 mins',
    spice: 'Mild',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Rich tomato chicken curry finished with butter and cream for a restaurant-style flavor.',
    ingredients: [
      { category: 'Chicken', items: ['1½ lb boneless chicken thighs, bite-sized', '¾ tsp salt'] },
      { category: 'Base', items: ['2 tbsp butter or oil', '1 medium onion, finely chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp ground cumin', '1 tsp ground coriander', '½ tsp turmeric powder', '1 tsp Kashmiri chili powder'] },
      { category: 'Sauce', items: ['1½ cups canned crushed tomatoes', '½ cup water', '½ cup heavy cream'] },
      { category: 'Finish', items: ['1 tbsp butter', '1 tsp garam masala', 'Salt to taste', 'Fresh cilantro'] }
    ],
    instructions: [
      'Season chicken with salt.',
      'Cook onions in butter 6-7 mins; add ginger garlic and bloom spices.',
      'Add tomatoes and salt; cook 8-10 mins until oil separates.',
      'Stir in chicken and water. Cover and cook 12-15 mins.',
      'Reduce heat to low, stir in cream and butter. Simmer gently 3-4 mins (no boiling).',
      'Add garam masala, turn off heat, rest 5 mins.'
    ],
    substitutions: ['No cream? Use coconut milk.', 'Prefer dairy free? Use oil and coconut milk.'],
    commonMistakes: ['Boiling after adding cream (will split).', 'Overcooking chicken breast (use thighs!).'],
    finishAndAdjust: ['Add pinch of sugar if tomatoes are sharp.', 'Drizzle extra cream on top before serving.']
  },
  {
    id: 'c2',
    name: 'Chicken Tikka Masala',
    section: 'Chicken Dishes Americans Love',
    mealType: 'Chicken',
    time: '45 minutes',
    timeType: '30-60 mins',
    spice: 'Medium',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Bold, creamy tomato curry made with yogurt-marinated chicken.',
    ingredients: [
      { category: 'Marinade', items: ['1½ lb boneless chicken', '½ cup plain yogurt', '1 tbsp ginger garlic paste', '½ tsp turmeric', '1 tsp chili powder', '½ tsp salt'] },
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, finely chopped'] },
      { category: 'Spices', items: ['1½ tsp ground cumin', '1½ tsp ground coriander', '½ tsp turmeric', '1 tsp paprika'] },
      { category: 'Sauce', items: ['1½ cups crushed tomatoes', '½ cup water', '½ cup heavy cream'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Fresh cilantro'] }
    ],
    instructions: [
      'Marinate chicken in yogurt mixture for 15 mins.',
      'Cook onions 6-7 mins; bloom spices for 20-30s.',
      'Add tomatoes and salt; cook 8-10 mins until oil separates.',
      'Add chicken and marinade; stir well.',
      'Add water, cover, and cook 12-15 mins.',
      'Stir in cream and simmer gently 3-4 mins.',
      'Add garam masala and rest before serving.'
    ],
    substitutions: ['No yogurt? Use sour cream.', 'Want smoky flavor? Add pinch of smoked paprika.'],
    commonMistakes: ['Skipping marination.', 'High heat after adding yogurt/cream.'],
    finishAndAdjust: ['Add sugar to balance acidity.', 'Adjust thickness with a splash of water.']
  },
  {
    id: 'c3',
    name: 'Simple Chicken Curry',
    section: 'Chicken Dishes Americans Love',
    mealType: 'Chicken',
    time: '35 minutes',
    timeType: '30-60 mins',
    spice: 'Medium',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'A straightforward home-style chicken curry with a light tomato-onion gravy.',
    ingredients: [
      { category: 'Chicken', items: ['1½ lb chicken pieces (bone-in or boneless)', '¾ tsp salt'] },
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, finely chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp ground cumin', '1 tsp ground coriander', '½ tsp turmeric', '1 tsp Kashmiri chili powder'] },
      { category: 'Sauce', items: ['1 cup crushed tomatoes', '¾ cup water'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Fresh cilantro'] }
    ],
    instructions: [
      'Season chicken with salt.',
      'Cook onions 6-7 mins; add ginger garlic and bloom spices.',
      'Add tomatoes and salt; cook 6-8 mins until thickened.',
      'Add chicken and stir to coat.',
      'Add water, cover, and cook 15-18 mins until done.',
      'Add garam masala and rest 5 mins.'
    ],
    substitutions: ['Use fresh tomatoes (finely chopped) instead of canned.'],
    commonMistakes: ['Cooking on too high heat.', 'Adding too much water early.'],
    finishAndAdjust: ['Squeeze lemon if it tastes flat.', 'Add hot water if it needs more gravy.']
  },
  {
    id: 'c4',
    name: 'Chicken Saag',
    section: 'Chicken Dishes Americans Love',
    mealType: 'Chicken',
    time: '40 minutes',
    timeType: '30-60 mins',
    spice: 'Medium',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Hearty chicken curry cooked with blended spinach and warm spices.',
    ingredients: [
      { category: 'Chicken', items: ['1½ lb boneless chicken thighs', '¾ tsp salt'] },
      { category: 'Spinach', items: ['5 cups fresh spinach, chopped', '½ cup water'] },
      { category: 'Base', items: ['2 tbsp oil or ghee', '1 medium onion, chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp ground cumin', '1 tsp ground coriander', '½ tsp turmeric', '½ tsp chili powder'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Lemon juice'] }
    ],
    instructions: [
      'Wilts spinach in water (3-4 mins), blend until smooth.',
      'Cook onions until golden; add ginger garlic and bloom spices.',
      'Brown chicken 5-6 mins.',
      'Pour in blended spinach; cover and cook 12-15 mins.',
      'Add garam masala, adjust salt, and rest.'
    ],
    substitutions: ['Use thawed and squeezed frozen spinach.', 'Add 2 tbsp cream at end for richness.'],
    commonMistakes: ['Not squeezing frozen spinach (results in watery curry).', 'Over-blending (slight texture is better).'],
    finishAndAdjust: ['Add lemon juice to brighten the flavor.', 'Thin with hot water if too thick.']
  },
  {
    id: 'c5',
    name: 'Chicken Korma',
    section: 'Chicken Dishes Americans Love',
    mealType: 'Chicken',
    time: '40 minutes',
    timeType: '30-60 mins',
    spice: 'Mild',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Mild, creamy chicken curry made with yogurt, cashews, and gentle spices.',
    ingredients: [
      { category: 'Nut Paste', items: ['¼ cup raw cashews', '¼ cup warm water (blend until smooth)'] },
      { category: 'Chicken', items: ['1½ lb chicken pieces', '¾ tsp salt'] },
      { category: 'Base', items: ['2 tbsp oil or ghee', '1 medium onion, finely chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp ground cumin', '1 tsp ground coriander', '¼ tsp turmeric', '½ tsp mild chili powder'] },
      { category: 'Sauce', items: ['½ cup plain yogurt', '½ cup water'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Salt to taste'] }
    ],
    instructions: [
      'Cook onions 6-7 mins; bloom spices in oil.',
      'Reduce heat to low; stir in yogurt carefully.',
      'Add chicken and cashew paste; stir to coat.',
      'Add water, cover, and cook 12-15 mins.',
      'Add garam masala and rest 5 mins.'
    ],
    substitutions: ['No cashews? Use blanched almonds or almond butter.', 'No yogurt? Use coconut milk.'],
    commonMistakes: ['Adding yogurt on high heat (will split).', 'Over-seasoning - korma is meant to be delicate.'],
    finishAndAdjust: ['Add a splash of cream if desired.', 'Add pinch of sugar if yogurt is sharp.']
  },
  {
    id: 'c6',
    name: 'Coconut Chicken Curry',
    section: 'Chicken Dishes Americans Love',
    mealType: 'Chicken',
    time: '35 minutes',
    timeType: '30-60 mins',
    spice: 'Medium',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Naturally dairy-free chicken curry simmered in full-fat coconut milk.',
    ingredients: [
      { category: 'Chicken', items: ['1½ lb boneless chicken', '¾ tsp salt'] },
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp ground cumin', '1 tsp ground coriander', '½ tsp turmeric', '½ tsp mild chili powder'] },
      { category: 'Sauce', items: ['1 can (13.5 oz) coconut milk', '½ cup water'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Lime juice'] }
    ],
    instructions: [
      'Cook onions until golden; bloom spices.',
      'Brown chicken 5-6 mins.',
      'Pour in coconut milk and water; simmer gently.',
      'Cover and cook 12-15 mins.',
      'Add garam masala and rest before serving.'
    ],
    substitutions: ['Use bell peppers or green beans for extra veg.'],
    commonMistakes: ['Boiling coconut milk vigorously.', 'Using sweetened coconut milk.'],
    finishAndAdjust: ['Add lime juice to balance the rich coconut milk.', 'Adjust thickness with hot water.']
  },
  {
    id: 'c7',
    name: 'Weeknight Chicken Masala',
    section: 'Chicken Dishes Americans Love',
    mealType: 'Chicken',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Medium',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Fast, bold chicken masala made without marination for a quick dinner.',
    ingredients: [
      { category: 'Chicken', items: ['1½ lb boneless chicken thighs', '¾ tsp salt'] },
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1½ tsp ground cumin', '1½ tsp ground coriander', '½ tsp turmeric', '1½ tsp Kashmiri chili powder'] },
      { category: 'Sauce', items: ['1¼ cups canned crushed tomatoes', '¾ cup water'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Fresh cilantro'] }
    ],
    instructions: [
      'Cook onions 6-7 mins; bloom spices.',
      'Cook tomatoes 6-8 mins until thick and glossy.',
      'Add chicken and coat well.',
      'Add water, simmer, cover, and cook 10-12 mins.',
      'Add garam masala and rest 5 mins.'
    ],
    substitutions: ['No crushed tomatoes? Use fresh tomatoes.'],
    commonMistakes: ['Rushing the onion cooking step.', 'Cooking on high heat.'],
    finishAndAdjust: ['Add hot water to loosen if needed.', 'Taste for salt at the very end.']
  },
  {
    id: 'c8',
    name: 'Chicken Vindaloo Style',
    section: 'Chicken Dishes Americans Love',
    mealType: 'Chicken',
    time: '40 minutes',
    timeType: '30-60 mins',
    spice: 'Medium',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Tangy and boldly spiced chicken curry inspired by classic vindaloo.',
    ingredients: [
      { category: 'Chicken', items: ['1½ lb boneless chicken', '¾ tsp salt'] },
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1½ tsp ground cumin', '1½ tsp ground coriander', '½ tsp turmeric', '1 tsp paprika'] },
      { category: 'Sauce', items: ['1 cup crushed tomatoes', '¾ cup water', '2 tbsp white vinegar'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Fresh cilantro'] }
    ],
    instructions: [
      'Cook onions 6-7 mins; bloom spices.',
      'Cook tomatoes 6-8 mins until glossy.',
      'Add chicken and coat.',
      'Add water and vinegar; cover and cook 15-18 mins.',
      'Add garam masala and rest 5 mins.'
    ],
    substitutions: ['No vinegar? Use lemon or lime juice.'],
    commonMistakes: ['Adding too much vinegar at once.', 'Cooking on high heat (dulls the tang).'],
    finishAndAdjust: ['Add pinch of sugar to balance the vinegar.', 'Adjust salt after the vinegar is added.']
  },
  {
    id: 'c9',
    name: 'Chicken Jalfrezi',
    section: 'Chicken Dishes Americans Love',
    mealType: 'Chicken',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Medium',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Vibrant chicken curry with bell peppers and onions in a light tomato sauce.',
    ingredients: [
      { category: 'Chicken', items: ['1½ lb boneless chicken', '¾ tsp salt'] },
      { category: 'Vegetables', items: ['1 green bell pepper (sliced)', '1 red bell pepper (sliced)', '1 medium onion (sliced)'] },
      { category: 'Base', items: ['2 tbsp oil', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp ground cumin', '1 tsp ground coriander', '½ tsp turmeric', '1 tsp chili powder'] },
      { category: 'Sauce', items: ['¾ cup crushed tomatoes', '½ cup water'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Fresh cilantro'] }
    ],
    instructions: [
      'Stir fry sliced onion and peppers 4-5 mins (stay crisp); remove.',
      'Reduce heat; cook ginger garlic paste 30s.',
      'Bloom spices 20-30s; add tomatoes and cook 4-5 mins.',
      'Add chicken and cook 6-8 mins.',
      'Add cooked veg and water back in; simmer 3-4 mins.',
      'Add garam masala and rest.'
    ],
    substitutions: ['Switch bell peppers for zucchini or green beans.'],
    commonMistakes: ['Overcooking veg - they should be crisp.', 'Too much sauce - Jalfrezi is drier.'],
    finishAndAdjust: ['Squeeze lemon juice if flat.', 'Add splash of water if sticking.']
  },
  {
    id: 'c10',
    name: 'One Pot Chicken and Potatoes',
    section: 'Chicken Dishes Americans Love',
    mealType: 'Chicken',
    time: '40 minutes',
    timeType: '30-60 mins',
    spice: 'Mild',
    style: 'One Pot',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Comforting one-pot chicken curry with tender potato chunks.',
    ingredients: [
      { category: 'Chicken', items: ['1½ lb chicken pieces', '¾ tsp salt'] },
      { category: 'Potatoes', items: ['2 medium potatoes, in chunks'] },
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp ground cumin', '1 tsp ground coriander', '½ tsp turmeric', '1 tsp mild chili powder'] },
      { category: 'Sauce', items: ['1 cup crushed tomatoes', '1½ cups water'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Fresh cilantro'] }
    ],
    instructions: [
      'Cook onion until golden; add ginger garlic and bloom spices.',
      'Cook tomatoes 6-8 mins.',
      'Add chicken and potatoes; stir to coat.',
      'Add water, simmer, cover, and cook 20-25 mins until potatoes are tender.',
      'Add garam masala and rest 5 mins.'
    ],
    substitutions: ['Prefer boneless chicken? Reduce cooking time slightly.'],
    commonMistakes: ['Cutting potatoes too large.', 'Cooking on high heat.'],
    finishAndAdjust: ['Adjust thickness with hot water.', 'Check salt once potatoes are tender.']
  },
  {
    id: 'c11',
    name: 'Spiced Ground Chicken Curry',
    section: 'Chicken Dishes Americans Love',
    mealType: 'Chicken',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Medium',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Quick and flavorful ground chicken curry with onions and tomatoes.',
    ingredients: [
      { category: 'Chicken', items: ['1½ lb ground chicken', '¾ tsp salt'] },
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1½ tsp ground cumin', '1½ tsp ground coriander', '½ tsp turmeric', '1 tsp Kashmiri chili powder'] },
      { category: 'Sauce', items: ['1 cup crushed tomatoes', '½ cup water'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Lemon juice'] }
    ],
    instructions: [
      'Cook onion until golden; bloom spices.',
      'Add ground chicken and salt; cook 6-8 mins (break it up well).',
      'Add tomatoes and water; simmer uncovered 8-10 mins until thickened.',
      'Add garam masala and rest 5 mins.'
    ],
    substitutions: ['Use ground turkey instead of chicken.', 'Add peas for more color.'],
    commonMistakes: ['Not breaking up the meat fully.', 'Skipping the simmer time.'],
    finishAndAdjust: ['Add lemon juice if flat.', 'Add splash of water if too dry.']
  },

  // SECTION 3: QUICK AND ONE POT
  {
    id: 'q1',
    name: 'One Pot Chickpea and Spinach Curry',
    section: 'Quick and One Pot Meals',
    mealType: 'Vegetarian',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Medium',
    style: 'One Pot',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Fast and nourishing one-pot curry made with chickpeas and fresh spinach.',
    ingredients: [
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp cumin', '1 tsp coriander', '½ tsp turmeric', '1 tsp chili powder'] },
      { category: 'Chickpeas', items: ['2 cans chickpeas, rinsed', '1 cup crushed tomatoes', '¾ cup water'] },
      { category: 'Spinach', items: ['4 cups fresh spinach, chopped'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Lemon juice'] }
    ],
    instructions: [
      'Cook onion 6-7 mins; bloom spices.',
      'Cook tomatoes 6-8 mins.',
      'Add chickpeas and water; simmer uncovered 8-10 mins.',
      'Add spinach and cook 2-3 mins until wilted.',
      'Add garam masala and rest.'
    ],
    substitutions: ['Use thawed frozen spinach (squeeze dry).'],
    commonMistakes: ['Adding spinach too early.', 'Using too much water.'],
    finishAndAdjust: ['Check seasoning once spinach is in.', 'Squeeze lemon for brightness.']
  },
  {
    id: 'q2',
    name: 'One Pot Lentil Stew',
    section: 'Quick and One Pot Meals',
    mealType: 'Vegetarian',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Mild',
    style: 'One Pot',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Hearty and comforting lentil stew made with brown or green lentils.',
    ingredients: [
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp cumin', '1 tsp coriander', '½ tsp turmeric', '½ tsp mild chili powder'] },
      { category: 'Lentils', items: ['1 cup brown/green lentils, rinsed', '4 cups water'] },
      { category: 'Veg', items: ['1 medium carrot, diced', '1 small potato, diced'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Lemon juice'] }
    ],
    instructions: [
      'Cook onion until golden; bloom spices.',
      'Add lentils, carrot, potato, and water with pinch of salt.',
      'Bring to boil; reduce and simmer covered 20-25 mins until tender.',
      'Add garam masala and rest 5 mins.'
    ],
    substitutions: ['No brown lentils? Use green lentils or pigeon peas.'],
    commonMistakes: ['Using red lentils (they break down too fast for stew).', 'Boiling rapidly (simmer is better).'],
    finishAndAdjust: ['Thin with hot water or simmer uncovered to thicken.', 'Add lemon juice.']
  },
  {
    id: 'q3',
    name: '30 Minute Chicken Curry',
    section: 'Quick and One Pot Meals',
    mealType: 'Chicken',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Medium',
    style: 'One Pot',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Fast and flavorful chicken curry made in one pot for busy weeknights.',
    ingredients: [
      { category: 'Chicken', items: ['1½ lb boneless chicken', '¾ tsp salt'] },
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp cumin', '1 tsp coriander', '½ tsp turmeric', '1 tsp chili powder'] },
      { category: 'Sauce', items: ['1 cup crushed tomatoes', '¾ cup water'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Fresh cilantro'] }
    ],
    instructions: [
      'Season chicken with salt.',
      'Cook onion 6-7 mins; bloom spices.',
      'Cook tomatoes 6-8 mins until glossy.',
      'Add chicken and coat; add water.',
      'Cover and cook 10-12 mins.',
      'Add garam masala and rest.'
    ],
    substitutions: ['Add 2 tbsp cream at the end for richness.'],
    commonMistakes: ['Cooking on high heat to save time.', 'Skipping the rest time.'],
    finishAndAdjust: ['Add lemon juice if flat.', 'Adjust thickness with hot water.']
  },
  {
    id: 'q4',
    name: 'One Pan Potato Curry',
    section: 'Quick and One Pot Meals',
    mealType: 'Vegetarian',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Mild',
    style: 'One Pot',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Simple and comforting potato curry cooked in one pan with basic spices.',
    ingredients: [
      { category: 'Potatoes', items: ['3 medium potatoes, cut into small cubes'] },
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp cumin', '1 tsp coriander', '½ tsp turmeric', '1 tsp mild chili powder'] },
      { category: 'Liquid', items: ['1¼ cups water'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Lemon juice'] }
    ],
    instructions: [
      'Cook onion until golden; bloom spices.',
      'Add potatoes and salt; stir well to coat.',
      'Add water, cover, and simmer 15-18 mins until tender.',
      'Uncover and simmer 2-3 mins to thicken.',
      'Add garam masala and rest.'
    ],
    substitutions: ['Add peas or carrots for more variety.'],
    commonMistakes: ['Cutting potatoes too large.', 'Too much water.'],
    finishAndAdjust: ['Check seasoning once potatoes are tender.', 'Add lemon juice.']
  },
  {
    id: 'q5',
    name: 'Chickpea Coconut Curry',
    section: 'Quick and One Pot Meals',
    mealType: 'Vegetarian',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Medium',
    style: 'One Pot',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Quick, comforting one-pot curry made with chickpeas and creamy coconut milk.',
    ingredients: [
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp cumin', '1 tsp coriander', '½ tsp turmeric', '½ tsp mild chili powder'] },
      { category: 'Chickpeas', items: ['2 cans chickpeas, rinsed', '1 can coconut milk', '½ cup water'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Lime juice'] }
    ],
    instructions: [
      'Cook onion until golden; bloom spices.',
      'Add chickpeas and salt; stir to coat.',
      'Pour in coconut milk and water; bring to light simmer.',
      'Cook uncovered 12-15 mins until thickened.',
      'Add garam masala and rest.'
    ],
    substitutions: ['Add bell peppers for crunch.'],
    commonMistakes: ['Boiling coconut milk vigorously.', 'Using sweetened coconut milk.'],
    finishAndAdjust: ['Squeeze lime juice for brightness.', 'Thin with warm water if too thick.']
  },
  {
    id: 'q6',
    name: 'Tomato Onion Egg Curry',
    section: 'Quick and One Pot Meals',
    mealType: 'Vegetarian', // Egg is often included in Indian veg sections
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Medium',
    style: 'One Pot',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Simple egg curry with onions and tomatoes; perfect with rice or naan.',
    ingredients: [
      { category: 'Eggs', items: ['6 large eggs (boiled and peeled)'] },
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp cumin', '1 tsp coriander', '½ tsp turmeric', '1 tsp chili powder'] },
      { category: 'Sauce', items: ['1¼ cups crushed tomatoes', '¾ cup water'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Lemon juice'] }
    ],
    instructions: [
      'Boil, peel, and lightly score eggs.',
      'Cook onion until golden; bloom spices.',
      'Add tomatoes and salt; cook 6-8 mins until thickened.',
      'Add water, then add eggs to sauce.',
      'Cover and simmer 8-10 mins; spoon sauce over eggs.',
      'Add garam masala and rest.'
    ],
    substitutions: ['Add cream at the end for a richer curry.'],
    commonMistakes: ['Overcooking eggs in sauce.', 'Skipping scoring the eggs.'],
    finishAndAdjust: ['Check salt once eggs are heated.', 'Add lemon juice.']
  },
  {
    id: 'q7',
    name: 'Simple Paneer Curry',
    section: 'Quick and One Pot Meals',
    mealType: 'Vegetarian',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Mild',
    style: 'One Pot',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Quick paneer curry in a smooth tomato sauce.',
    ingredients: [
      { category: 'Paneer', items: ['12 oz paneer, cubed', '¼ tsp salt'] },
      { category: 'Base', items: ['2 tbsp oil or butter', '1 medium onion, chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Spices', items: ['1 tsp cumin', '1 tsp coriander', '½ tsp turmeric', '½ tsp mild chili powder'] },
      { category: 'Sauce', items: ['1¼ cups crushed tomatoes', '¾ cup water'] },
      { category: 'Finish', items: ['1 tsp garam masala', 'Cream (optional)'] }
    ],
    instructions: [
      'Cook onion until golden; bloom spices.',
      'Add tomatoes and salt; cook 6-8 mins.',
      'Add water and bring to simmer.',
      'Gently add paneer; stir carefully.',
      'Cover and cook 5-7 mins until heated through.',
      'Add garam masala and rest.'
    ],
    substitutions: ['No paneer? Use extra-firm tofu.'],
    commonMistakes: ['Overcooking paneer (turns rubbery).', 'Stirring too aggressively.'],
    finishAndAdjust: ['Add splash of cream if sauce is sharp.', 'Check seasoning at end.']
  },
  {
    id: 'q8',
    name: 'One Pot Chicken Rice',
    section: 'Quick and One Pot Meals',
    mealType: 'Chicken',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Medium',
    style: 'One Pot',
    difficulty: 'Beginner',
    serves: '4',
    description: 'A comforting one-pot meal with tender chicken and fragrant rice.',
    ingredients: [
      { category: 'Base', items: ['2 tbsp oil', '1 medium onion, finely chopped', '1 tbsp ginger garlic paste'] },
      { category: 'Protein', items: ['1 lb boneless chicken, bite-sized'] },
      { category: 'Spices', items: ['1 tsp cumin', '1 tsp coriander', '½ tsp turmeric', '½ tsp chili powder'] },
      { category: 'Rice', items: ['1½ cups basmati rice, rinsed', '3 cups water'] }
    ],
    instructions: [
      'Cook onion in oil until soft.',
      'Add ginger garlic paste, then chicken. Brown for 4-5 mins.',
      'Stir in spices for 30 seconds.',
      'Add rice and water. Bring to a gentle boil.',
      'Cover, reduce heat to low, and cook for 12-15 mins.',
      'Turn off heat and rest for 5 mins before fluffing.'
    ],
    servingSuggestions: ['Serve with cucumber raita and sliced onions.']
  },
  {
    id: 'q9',
    name: 'One Pot Lentils and Rice',
    section: 'Quick and One Pot Meals',
    mealType: 'Vegetarian',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Mild',
    style: 'One Pot',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Simple, comforting lentil and rice dish (Khichdi style) that is filling and gentle.',
    ingredients: [
      { category: 'Base', items: ['2 tbsp oil or ghee', '1 tsp cumin seeds', '1 small onion, chopped'] },
      { category: 'Lentils & Rice', items: ['¾ cup yellow or red lentils, rinsed', '¾ cup basmati rice, rinsed', '4 cups water'] },
      { category: 'Spices', items: ['½ tsp turmeric powder', 'Salt to taste'] },
      { category: 'Finish', items: ['1 tsp ghee (optional)', 'Fresh cilantro'] }
    ],
    instructions: [
      'Heat oil/ghee; sizzle cumin seeds.',
      'Cook onion 4-5 mins until soft.',
      'Add lentils, rice, turmeric, salt, and water. Stir well.',
      'Bring to boil; reduce heat to low.',
      'Cover and cook 15-18 mins, stirring once halfway.',
      'Turn off heat; rest 5 mins before stirring.'
    ],
    substitutions: ['Add diced carrots or peas for more nutrition.'],
    commonMistakes: ['Not rinsing lentils (causes foam).', 'Letting it cook dry (add water if needed).'],
    finishAndAdjust: ['Too thick? Stir in hot water.', 'Add ghee on top for richness.']
  },

  // SECTION 4: RICE, BREADS, AND SIDES
  {
    id: 's1',
    name: 'Perfect Basmati Rice',
    section: 'Rice, Breads, and Sides',
    mealType: 'Rice & Sides',
    time: '20 minutes',
    timeType: '< 30 mins',
    spice: 'Mild',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Light, fluffy basmati rice with perfect grains every time.',
    ingredients: [
      { category: 'Rice', items: ['1 cup basmati rice', '1¾ cups water', '½ tsp salt'] }
    ],
    instructions: [
      'Rinse rice under cold water until clear. Drain well.',
      'Add rice, water, and salt to a pot. Stir once.',
      'Bring to a boil.',
      'Cover tightly, reduce heat to low, and cook 12 minutes.',
      'Turn off heat; rest covered 5 mins.',
      'Fluff with a fork and serve.'
    ],
    commonMistakes: ['Skipping rinsing.', 'Stirring while cooking.', 'Lifting the lid too often.'],
    finishAndAdjust: ['Spread on a plate if too wet to release steam.', 'Add knob of butter before fluffing.']
  },
  {
    id: 's2',
    name: 'Jeera Rice',
    section: 'Rice, Breads, and Sides',
    mealType: 'Rice & Sides',
    time: '20 minutes',
    timeType: '< 30 mins',
    spice: 'Mild',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Fragrant basmati rice cooked with toasted cumin seeds.',
    ingredients: [
      { category: 'Flavoring', items: ['1 tbsp oil or ghee', '1½ tsp cumin seeds'] },
      { category: 'Rice', items: ['1 cup basmati rice, rinsed', '1¾ cups water', '½ tsp salt'] }
    ],
    instructions: [
      'Rinse rice well; drain.',
      'Heat oil/ghee; cook cumin seeds 20-30s until fragrant.',
      'Add rice; stir gently to coat.',
      'Add water and salt; bring to boil.',
      'Cover tightly, reduce heat to low, and cook 12 mins.',
      'Rest covered 5 mins, then fluff.'
    ],
    commonMistakes: ['Burning cumin seeds.', 'Skipping rest time.'],
    finishAndAdjust: ['Sprinkle a little water if too dry.', 'Add extra spoon of ghee.']
  },
  {
    id: 's3',
    name: 'Simple Vegetable Pulao',
    section: 'Rice, Breads, and Sides',
    mealType: 'Rice & Sides',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Mild',
    style: 'One Pot',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Fragrant one-pot rice dish with vegetables and whole spices.',
    ingredients: [
      { category: 'Whole Spices', items: ['1 tsp cumin seeds', '1 bay leaf'] },
      { category: 'Base', items: ['2 tbsp oil or ghee', '1 medium onion, sliced'] },
      { category: 'Veg', items: ['½ cup carrots', '½ cup green beans', '½ cup peas'] },
      { category: 'Rice', items: ['1 cup basmati rice, rinsed', '1¾ cups water', '½ tsp salt'] }
    ],
    instructions: [
      'Rinse rice; drain.',
      'Heat oil; cook whole spices 20-30s.',
      'Add onion; cook 4-5 mins until golden.',
      'Add veg and stir 1-2 mins.',
      'Add rice; stir to coat.',
      'Add water and salt; bring to boil.',
      'Cover tightly, reduce to low, cook 12 mins.',
      'Rest 5 mins, then fluff.'
    ],
    commonMistakes: ['Overcrowding vegetables.', 'Stirring rice while cooking.'],
    finishAndAdjust: ['Add knob of butter at the end.', 'Ensure resting time is followed.']
  },
  {
    id: 's4',
    name: 'Skillet Naan',
    section: 'Rice, Breads, and Sides',
    mealType: 'Rice & Sides',
    time: '30 minutes',
    timeType: '< 30 mins',
    spice: 'Mild',
    style: 'Stovetop',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Soft and chewy flatbread cooked in a skillet for an easy homemade naan.',
    ingredients: [
      { category: 'Dough', items: ['2 cups all purpose flour', '¾ tsp salt', '¾ tsp baking powder', '½ cup plain yogurt', '2 tbsp oil', '¼ to ⅓ cup water'] },
      { category: 'Finish', items: ['Melted butter', 'Minced garlic (optional)', 'Cilantro (optional)'] }
    ],
    instructions: [
      'Mix dry ingredients, then add yogurt and oil.',
      'Add water gradually and knead into a soft dough.',
      'Rest covered for 15 minutes.',
      'Divide into 8 balls and roll 1/8 inch thick.',
      'Cook on a hot greased skillet for 1-2 mins per side until bubbled and browned.',
      'Brush with butter immediately.'
    ],
    commonMistakes: ['Dough too dry - add water slowly.', 'Low heat - bubbles need medium-high heat.'],
    finishAndAdjust: ['Brush with garlic butter for extra flavor.', 'Cover with a towel to keep soft.']
  },
  {
    id: 's5',
    name: 'Cucumber Raita',
    section: 'Rice, Breads, and Sides',
    mealType: 'Rice & Sides',
    time: '10 minutes',
    timeType: '< 30 mins',
    spice: 'Mild',
    style: 'Any',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Cooling yogurt-based side to balance warm and spicy dishes.',
    ingredients: [
      { category: 'Base', items: ['1½ cups plain yogurt', '1 cup cucumber (chopped or grated)'] },
      { category: 'Seasoning', items: ['¼ tsp ground cumin', '¼ tsp salt', 'Black pepper to taste'] },
      { category: 'Finish', items: ['Chopped cilantro'] }
    ],
    instructions: [
      'Whisk yogurt until smooth.',
      'Stir in cucumber.',
      'Add cumin, salt, and pepper; mix well.',
      'Chill for 5-10 mins.',
      'Garnish with cilantro.'
    ],
    substitutions: ['No cucumber? Use grated carrots.'],
    commonMistakes: ['Not draining grated cucumber (makes raita watery).'],
    finishAndAdjust: ['Add pinch of sugar if yogurt is sharp.', 'Thin with water if too thick.']
  },
  {
    id: 's6',
    name: 'Onion Tomato Salad',
    section: 'Rice, Breads, and Sides',
    mealType: 'Rice & Sides',
    time: '10 minutes',
    timeType: '< 30 mins',
    spice: 'Mild',
    style: 'Any',
    difficulty: 'Beginner',
    serves: '4',
    description: 'Fresh and simple salad with red onions, tomatoes, and lemon.',
    ingredients: [
      { category: 'Salad', items: ['1 medium red onion, sliced', '2 medium tomatoes, chopped'] },
      { category: 'Seasoning', items: ['½ tsp salt', 'Black pepper to taste', 'Lemon juice'] },
      { category: 'Finish', items: ['Fresh cilantro'] }
    ],
    instructions: [
      'Add onion and tomatoes to a bowl.',
      'Sprinkle with salt and pepper.',
      'Add lemon juice to taste.',
      'Toss gently and serve immediately.'
    ],
    commonMistakes: ['Adding too much lemon juice.', 'Letting it sit too long (it releases water).'],
    finishAndAdjust: ['Add pinch of sugar if onion is too sharp.', 'Add cilantro just before serving.']
  }
];

export const HELP_TOPICS = [
  {
    title: "Curry is too spicy?",
    tips: [
      "Add a dollop of yogurt or heavy cream to neutralize the heat.",
      "Stir in a squeeze of lemon or lime juice—the acidity balances spice.",
      "Add a small pinch of sugar or honey.",
      "Double the bulk: add more cooked potatoes or unseasoned lentils."
    ]
  },
  {
    title: "Sauce is too thin/watery?",
    tips: [
      "Simmer uncovered for 5-10 minutes to reduce the liquid.",
      "Mash a few of the chickpeas or potatoes against the side of the pan.",
      "Stir in a tablespoon of nut butter or cashew paste.",
      "Mix 1 tsp cornstarch with 1 tbsp cold water and stir it in."
    ]
  },
  {
    title: "Rice Rescue",
    tips: [
      "If rice is too firm, sprinkle 2 tbsp water, cover tightly, and steam on low for 3 minutes.",
      "If rice is mushy, spread it on a flat tray and let the steam escape for 5 minutes.",
      "Always let rice rest covered for 5 minutes after the heat is off!"
    ]
  },
  {
    title: "When to add Garam Masala?",
    tips: [
      "Always add it at the very end of cooking.",
      "Adding it too early kills the fresh aromatic oils of the spices.",
      "Think of it like fresh herbs—it's for the finishing aroma."
    ]
  }
];
