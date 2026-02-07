
import React from 'react';
import { HELP_TOPICS } from '../constants';

const CookingHelp: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <section className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm overflow-hidden relative text-center">
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Cooking Wisdom</h2>
          <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Essential troubleshooting tips and culinary techniques to help you master Indian cooking at home. 
            No more watery curries or burnt bottom pans.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {HELP_TOPICS.map((topic, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-orange-400 rounded-full"></span>
              {topic.title}
            </h3>
            <ul className="space-y-4">
              {topic.tips.map((tip, j) => (
                <li key={j} className="flex items-start gap-4 text-stone-600">
                  <div className="shrink-0 mt-1">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="bg-stone-900 text-white p-12 rounded-[3rem] text-center mt-8">
        <h4 className="text-2xl font-bold mb-4">Still Feeling Stuck?</h4>
        <p className="text-stone-400 max-w-lg mx-auto mb-8">
          The best way to learn is to taste as you go. Indian cooking is about intuition and adjustment.
        </p>
        <div className="flex justify-center gap-4">
          <div className="px-6 py-3 border border-stone-700 rounded-full text-xs font-bold uppercase tracking-widest">Taste for Salt</div>
          <div className="px-6 py-3 border border-stone-700 rounded-full text-xs font-bold uppercase tracking-widest">Adjust Heat</div>
          <div className="px-6 py-3 border border-stone-700 rounded-full text-xs font-bold uppercase tracking-widest">Let it Rest</div>
        </div>
      </div>
    </div>
  );
};

export default CookingHelp;
