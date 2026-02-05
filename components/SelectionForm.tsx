
import React from 'react';
import { MEAL_TYPES, TIME_OPTIONS, SPICE_LEVELS, COOKING_STYLES } from '../constants';
import { UserPreferences, MealType, TimeAvailable, SpiceLevel, CookingStyle } from '../types';

interface SelectionFormProps {
  preferences: UserPreferences;
  onChange: (newPrefs: UserPreferences) => void;
  onPick: () => void;
  isLoading: boolean;
}

const SelectionForm: React.FC<SelectionFormProps> = ({ preferences, onChange, onPick, isLoading }) => {
  const handleChange = (field: keyof UserPreferences, value: string) => {
    onChange({
      ...preferences,
      [field]: value,
    });
  };

  const selectClasses = "block w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all cursor-pointer appearance-none text-lg";
  const labelClasses = "block text-sm font-semibold text-stone-500 uppercase tracking-wider mb-2 ml-1";

  return (
    <div className="space-y-6 bg-stone-100/50 p-6 md:p-8 rounded-3xl border border-stone-200 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses}>Meal Type</label>
          <div className="relative">
            <select
              value={preferences.mealType}
              onChange={(e) => handleChange('mealType', e.target.value)}
              className={selectClasses}
            >
              {MEAL_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        <div>
          <label className={labelClasses}>Time Available</label>
          <div className="relative">
            <select
              value={preferences.time}
              onChange={(e) => handleChange('time', e.target.value)}
              className={selectClasses}
            >
              {TIME_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        <div>
          <label className={labelClasses}>Spice Level</label>
          <div className="relative">
            <select
              value={preferences.spice}
              onChange={(e) => handleChange('spice', e.target.value)}
              className={selectClasses}
            >
              {SPICE_LEVELS.map(level => <option key={level} value={level}>{level}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        <div>
          <label className={labelClasses}>Cooking Style</label>
          <div className="relative">
            <select
              value={preferences.style}
              onChange={(e) => handleChange('style', e.target.value)}
              className={selectClasses}
            >
              {COOKING_STYLES.map(style => <option key={style} value={style}>{style}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onPick}
        disabled={isLoading}
        className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-5 px-8 rounded-2xl shadow-lg shadow-orange-200 transition-all transform active:scale-[0.98] flex items-center justify-center space-x-3 text-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>{isLoading ? 'Consulting the Chef...' : 'Pick My Dinner'}</span>
        {!isLoading && (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SelectionForm;
