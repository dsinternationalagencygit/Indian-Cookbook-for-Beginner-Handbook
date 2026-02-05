
import React, { useState } from 'react';
import { HELP_TOPICS } from '../constants';
import { GoogleGenAI } from "@google/genai";

const CookingHelp: React.FC = () => {
  const [userQuestion, setUserQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const askChef = async () => {
    if (!userQuestion.trim()) return;
    setIsLoading(true);
    setAiAnswer(null);

    try {
      // Correct initialization using process.env.API_KEY
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Use gemini-3-flash-preview for basic text tasks
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a helpful Indian cooking expert. Answer this question concisely for a beginner. Question: ${userQuestion}`,
      });
      setAiAnswer(response.text || "I'm not sure, but checking the book on page 10 is a good start!");
    } catch (e) {
      setAiAnswer("Sorry, I'm taking a break. Try adjusting the seasoning to taste!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <section className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-10 -mt-10 opacity-50"></div>
        <h2 className="text-2xl font-bold text-stone-900 mb-6 relative">Ask the Digital Chef</h2>
        <p className="text-stone-500 mb-6">Need help fixing a mistake? Ask about techniques or ingredients.</p>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="e.g., How do I make my curry richer?"
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-orange-200 text-lg"
          />
          <button 
            onClick={askChef}
            disabled={isLoading}
            className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors disabled:opacity-50"
          >
            {isLoading ? '...' : 'Ask'}
          </button>
        </div>
        {aiAnswer && (
          <div className="mt-6 p-6 bg-orange-50 rounded-2xl border border-orange-100 text-stone-700 italic">
            "{aiAnswer}"
          </div>
        )}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {HELP_TOPICS.map((topic, i) => (
          <div key={i} className="bg-stone-50/50 p-8 rounded-3xl border border-stone-200">
            <h3 className="text-xl font-bold text-stone-900 mb-4">{topic.title}</h3>
            <ul className="space-y-3">
              {topic.tips.map((tip, j) => (
                <li key={j} className="flex items-start gap-3 text-stone-600">
                  <span className="text-orange-400 mt-1">•</span>
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CookingHelp;
