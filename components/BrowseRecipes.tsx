
import React, { useState, useMemo } from 'react';
import { RECIPES } from '../constants';
import { Recipe } from '../types';
import RecipeDetails from './RecipeDetails';

const BrowseRecipes: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Vegetarian' | 'Chicken' | 'Under 30'>('All');
  const [search, setSearch] = useState('');
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);

  const filteredRecipes = useMemo(() => {
    return RECIPES.filter(r => {
      const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase());
      if (filter === 'Vegetarian') return matchesSearch && r.mealType === 'Vegetarian';
      if (filter === 'Chicken') return matchesSearch && r.mealType === 'Chicken';
      if (filter === 'Under 30') return matchesSearch && r.timeType === '< 30 mins';
      return matchesSearch;
    });
  }, [filter, search]);

  if (activeRecipe) {
    return (
      <div className="animate-in fade-in slide-in-from-right-4 duration-300">
        <RecipeDetails 
          recipe={activeRecipe} 
          onBack={() => {
            setActiveRecipe(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
        />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white p-6 rounded-3xl border border-stone-200 shadow-sm sticky top-4 z-20">
        <div className="flex-1">
          <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2 ml-1">Search Recipe</label>
          <input 
            type="text" 
            placeholder="Search by name..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {(['All', 'Vegetarian', 'Chicken', 'Under 30'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filter === f ? 'bg-orange-500 text-white shadow-md' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRecipes.map(recipe => (
          <button 
            key={recipe.id} 
            onClick={() => setActiveRecipe(recipe)}
            className="text-left bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all group flex items-start justify-between"
          >
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold text-stone-900 group-hover:text-orange-600 transition-colors mb-1">{recipe.name}</h3>
              <p className="text-stone-500 text-sm line-clamp-1 mb-3">{recipe.description}</p>
              <div className="flex flex-wrap gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 bg-stone-50 px-2 py-0.5 rounded">{recipe.time}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 bg-stone-50 px-2 py-0.5 rounded">{recipe.spice} Heat</span>
              </div>
            </div>
            <div className="bg-orange-50 p-2 rounded-lg text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </div>
          </button>
        ))}
      </div>
      
      {filteredRecipes.length === 0 && (
        <div className="text-center py-20 text-stone-400">
          No recipes found matching your search.
        </div>
      )}
    </div>
  );
};

export default BrowseRecipes;
