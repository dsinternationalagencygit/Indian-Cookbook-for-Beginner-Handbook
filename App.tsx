
import React, { useState, useCallback } from 'react';
import { UserPreferences, Recipe } from './types';
import SelectionForm from './components/SelectionForm';
import RecipeResult from './components/RecipeResult';
import BrowseRecipes from './components/BrowseRecipes';
import CookingHelp from './components/CookingHelp';
import { getRecommendedRecipe } from './services/recipeService';
import { getChefCommentary } from './services/geminiService';

type View = 'Home' | 'Picker' | 'Browse' | 'Help';

const App: React.FC = () => {
  const [view, setView] = useState<View>('Home');
  const [preferences, setPreferences] = useState<UserPreferences>({
    mealType: 'Any',
    time: 'Any',
    spice: 'Any',
    style: 'Any',
  });
  
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [aiCommentary, setAiCommentary] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handlePickDinner = useCallback(async () => {
    setIsLoading(true);
    setIsVisible(false);
    
    // Slight delay for tactile feel only, no API wait needed
    setTimeout(async () => {
      const recipe = getRecommendedRecipe(preferences);
      setSelectedRecipe(recipe);
      const commentary = await getChefCommentary(recipe);
      setAiCommentary(commentary);
      setIsLoading(false);
      setIsVisible(true);
      window.scrollTo({ top: document.getElementById('result-section')?.offsetTop || 500, behavior: 'smooth' });
    }, 400);
  }, [preferences]);

  const renderContent = () => {
    switch(view) {
      case 'Picker':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Pick My Dinner</h2>
              <p className="text-stone-500">Answer 4 questions and we'll tell you exactly what to make tonight.</p>
            </div>
            <SelectionForm preferences={preferences} onChange={setPreferences} onPick={handlePickDinner} isLoading={isLoading} />
            <div id="result-section"><RecipeResult recipe={selectedRecipe} isVisible={isVisible} aiCommentary={aiCommentary} /></div>
          </div>
        );
      case 'Browse':
        return <BrowseRecipes />;
      case 'Help':
        return <CookingHelp />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <button onClick={() => setView('Picker')} className="group text-left p-8 bg-white border border-stone-200 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-orange-200 transition-all">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">What Should I Cook?</h3>
              <p className="text-stone-500 text-sm leading-relaxed">Feeling stuck? Use our 30-second logic tool to find the perfect match for your mood.</p>
            </button>
            <button onClick={() => setView('Browse')} className="group text-left p-8 bg-white border border-stone-200 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-orange-200 transition-all">
              <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Browse Recipes</h3>
              <p className="text-stone-500 text-sm leading-relaxed">Explore the full library of 35+ dishes with smart filters for time and spice levels.</p>
            </button>
            <button onClick={() => setView('Help')} className="group text-left p-8 bg-white border border-stone-200 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-orange-200 transition-all">
              <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Cooking Help</h3>
              <p className="text-stone-500 text-sm leading-relaxed">Troubleshooting tips: fix spicy curries, rescue burnt rice, and learn spice timing.</p>
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] max-w-5xl mx-auto px-4 py-8 md:py-16">
      <header className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
        <div onClick={() => setView('Home')} className="cursor-pointer group text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Indian Cookbook <span className="text-orange-500">for Beginners</span>
          </h1>
          <p className="text-stone-400 font-medium tracking-wide uppercase text-xs mt-1">
            by Anitha Sharma
          </p>
        </div>
        {view !== 'Home' && (
          <button 
            onClick={() => setView('Home')}
            className="flex items-center gap-2 text-stone-400 hover:text-stone-600 font-semibold transition-colors no-print"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Dashboard
          </button>
        )}
      </header>

      <main>{renderContent()}</main>

      <footer className="mt-24 text-center pb-12 border-t border-stone-100 pt-12 no-print">
        <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-4">Indian Cuisine 101 - Smart Companion</p>
        <p className="text-stone-400 text-sm max-w-md mx-auto">This tool is designed to help you decide. Refer to your physical book for ingredients and full instructions.</p>
      </footer>
    </div>
  );
};

export default App;
