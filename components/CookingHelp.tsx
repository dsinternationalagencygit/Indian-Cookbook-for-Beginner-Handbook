
import React, { useState } from 'react';
import { HELP_TOPICS } from '../constants';

const CookingHelp: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = HELP_TOPICS.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.tips.some(tip => tip.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <section className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-10 -mt-10 opacity-50"></div>
        <h2 className="text-2xl font-bold text-stone-900 mb-6 relative">Troubleshooting Guide</h2>
        <p className="text-stone-500 mb-6">Search our expert database for solutions to common cooking challenges.</p>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search help topics (e.g., 'spicy', 'rice', 'thickener')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-xl border border-stone-100 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-orange-200 text-lg"
          />
          <svg className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTopics.map((topic, i) => (
          <div key={i} className="bg-stone-50/50 p-8 rounded-3xl border border-stone-200 hover:border-orange-200 transition-colors">
            <h3 className="text-xl font-bold text-stone-900 mb-4">{topic.title}</h3>
            <ul className="space-y-3">
              {topic.tips.map((tip, j) => (
                <li key={j} className="flex items-start gap-3 text-stone-600">
                  <span className="text-orange-400 mt-1 shrink-0">•</span>
                  <span className="text-sm leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {filteredTopics.length === 0 && (
          <div className="md:col-span-2 text-center py-12 text-stone-400 italic">
            No specific tips found for "{searchQuery}". Try a broader term.
          </div>
        )}
      </section>
    </div>
  );
};

export default CookingHelp;
