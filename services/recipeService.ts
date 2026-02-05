
import { Recipe, UserPreferences } from '../types';
import { RECIPES } from '../constants';

export const getRecommendedRecipe = (prefs: UserPreferences): Recipe => {
  let filtered = [...RECIPES];

  const applyFilters = (list: Recipe[], currentPrefs: UserPreferences) => {
    return list.filter(recipe => {
      const typeMatch = currentPrefs.mealType === 'Any' || recipe.mealType === currentPrefs.mealType;
      const timeMatch = currentPrefs.time === 'Any' || recipe.timeType === currentPrefs.time;
      const spiceMatch = currentPrefs.spice === 'Any' || recipe.spice === currentPrefs.spice || recipe.spice === 'Any';
      const styleMatch = currentPrefs.style === 'Any' || recipe.style === currentPrefs.style;
      return typeMatch && timeMatch && spiceMatch && styleMatch;
    });
  };

  let results = applyFilters(filtered, prefs);

  if (results.length === 0) {
    results = applyFilters(filtered, { ...prefs, style: 'Any' });
  }
  
  if (results.length === 0) {
    results = applyFilters(filtered, { ...prefs, style: 'Any', time: 'Any' });
  }

  if (results.length === 0) {
    results = applyFilters(filtered, { ...prefs, style: 'Any', time: 'Any', spice: 'Any' });
  }

  if (results.length === 0) {
    results = [...RECIPES];
  }

  const randomIndex = Math.floor(Math.random() * results.length);
  return results[randomIndex];
};
