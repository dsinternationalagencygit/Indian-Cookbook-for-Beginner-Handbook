
import React from 'react';
import { Recipe } from '../types';

interface RecipeDetailsProps {
  recipe: Recipe;
  onBack?: () => void;
  aiCommentary?: string;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe, onBack, aiCommentary }) => {
  const handleDownloadPDF = () => {
    const element = document.getElementById('recipe-card');
    if (!element) return;

    // Configuration for html2pdf
    const opt = {
      margin: [10, 10],
      filename: `${recipe.name.replace(/\s+/g, '_')}_Recipe.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        letterRendering: true
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Use global html2pdf from script tag
    // @ts-ignore
    if (window.html2pdf) {
      // @ts-ignore
      window.html2pdf().set(opt).from(element).save();
    } else {
      // Fallback to print if library fails to load
      window.print();
    }
  };

  const spiceColors: Record<string, string> = {
    'Mild': 'text-green-600 bg-green-50',
    'Medium': 'text-orange-600 bg-orange-50',
    'Hot': 'text-red-600 bg-red-50',
    'Any': 'text-stone-600 bg-stone-50'
  };

  return (
    <div id="recipe-card" className="bg-white rounded-[2.5rem] border border-stone-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 print-container">
      {/* Header Section */}
      <div className="bg-stone-50 p-8 md:p-12 border-b border-stone-200 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 no-print">
          {onBack && (
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-stone-400 hover:text-orange-500 transition-colors font-bold uppercase text-xs tracking-widest no-print"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Library
            </button>
          )}

          <button 
            onClick={handleDownloadPDF}
            className="flex items-center gap-3 px-6 py-3 rounded-full font-bold transition-all shadow-sm active:scale-95 bg-stone-900 text-white hover:bg-black no-print"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </button>
        </div>
        
        <span className="inline-block px-3 py-1 bg-white border border-stone-200 text-stone-500 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
          {recipe.section}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-stone-900 leading-tight mb-6">
          {recipe.name}
        </h2>
        
        {aiCommentary && (
          <div className="mb-6 p-4 bg-orange-50 border-l-4 border-orange-400 rounded-r-xl no-print">
             <p className="text-orange-900 font-medium italic">Chef says: "{aiCommentary}"</p>
          </div>
        )}

        <p className="text-xl text-stone-500 max-w-2xl leading-relaxed italic">
          "{recipe.description}"
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="bg-white p-4 rounded-2xl border border-stone-100">
            <div className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter mb-1">Total Time</div>
            <div className="font-bold text-stone-800">{recipe.time}</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-stone-100">
            <div className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter mb-1">Spice Level</div>
            <div className={`font-bold px-2 py-0.5 rounded-lg inline-block ${spiceColors[recipe.spice] || spiceColors['Any']}`}>{recipe.spice}</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-stone-100">
            <div className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter mb-1">Serves</div>
            <div className="font-bold text-stone-800">{recipe.serves} People</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-stone-100">
            <div className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter mb-1">Style</div>
            <div className="font-bold text-stone-800">{recipe.style}</div>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Ingredients Column */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm">1</span>
              Ingredients
            </h3>
            <div className="space-y-6">
              {recipe.ingredients.map((group, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-xs font-bold text-orange-400 uppercase tracking-widest">{group.category}</h4>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-stone-600 flex items-start gap-3 text-sm">
                        <span className="w-1.5 h-1.5 bg-orange-200 rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {recipe.substitutions && recipe.substitutions.length > 0 && (
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
              <h4 className="text-sm font-bold text-stone-900 mb-3 uppercase tracking-wider">Substitutions</h4>
              <ul className="space-y-2 text-xs text-stone-500">
                {recipe.substitutions.map((sub, i) => <li key={i}>• {sub}</li>)}
              </ul>
            </div>
          )}

          {recipe.notes && recipe.notes.length > 0 && (
            <div className="bg-stone-100/50 p-6 rounded-2xl border border-stone-200">
              <h4 className="text-sm font-bold text-stone-900 mb-3 uppercase tracking-wider">Notes</h4>
              <ul className="space-y-2 text-xs text-stone-500">
                {recipe.notes.map((note, i) => <li key={i}>• {note}</li>)}
              </ul>
            </div>
          )}
        </div>

        {/* Instructions Column */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm">2</span>
              Method
            </h3>
            <div className="space-y-6">
              {recipe.instructions.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-stone-300 font-bold text-2xl tabular-nums leading-none">{(i + 1).toString().padStart(2, '0')}</span>
                  <p className="text-stone-700 leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recipe.finishAndAdjust && recipe.finishAndAdjust.length > 0 && (
              <div className="bg-orange-50/50 p-6 rounded-3xl border border-orange-100">
                <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
                  Finish & Adjust
                </h4>
                <ul className="space-y-2 text-sm text-orange-900/70">
                  {recipe.finishAndAdjust.map((tip, i) => <li key={i}>• {tip}</li>)}
                </ul>
              </div>
            )}
            
            {recipe.commonMistakes && recipe.commonMistakes.length > 0 && (
              <div className="bg-red-50/50 p-6 rounded-3xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  Pro Tip: Avoid Mistakes
                </h4>
                <ul className="space-y-2 text-sm text-red-900/70">
                  {recipe.commonMistakes.map((tip, i) => <li key={i}>• {tip}</li>)}
                </ul>
              </div>
            )}
          </div>

          {recipe.servingSuggestions && recipe.servingSuggestions.length > 0 && (
            <div className="bg-stone-50 p-6 rounded-3xl border border-stone-100">
              <h4 className="font-bold text-stone-800 mb-3">Serving Suggestions</h4>
              <div className="flex flex-wrap gap-2">
                {recipe.servingSuggestions.map((suggestion, i) => (
                  <span key={i} className="bg-white px-3 py-1 rounded-full text-xs text-stone-600 border border-stone-200">
                    {suggestion}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
