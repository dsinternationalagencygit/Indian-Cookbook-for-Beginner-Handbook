
import React from 'react';
import { Recipe } from '../types';
import RecipeDetails from './RecipeDetails';

interface RecipeResultProps {
  recipe: Recipe | null;
  isVisible: boolean;
  aiCommentary?: string;
}

const RecipeResult: React.FC<RecipeResultProps> = ({ recipe, isVisible, aiCommentary }) => {
  if (!recipe) return null;

  return (
    <div className={`mt-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="text-center mb-12">
        <h3 className="text-stone-400 text-sm font-bold uppercase tracking-[0.3em] mb-2">Our Recommendation</h3>
        <p className="text-stone-500">Based on your preferences, we think you'll love this.</p>
      </div>
      
      <RecipeDetails recipe={recipe} aiCommentary={aiCommentary} />
      
      <div className="text-center mt-12 pb-20">
        <p className="text-stone-400 text-sm">
          Not in the mood? Just click <strong>Pick My Dinner</strong> again.
        </p>
      </div>
    </div>
  );
};

export default RecipeResult;
