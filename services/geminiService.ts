
import { GoogleGenAI } from "@google/genai";
import { Recipe } from "../types";

export const getChefCommentary = async (recipe: Recipe): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Great choice for a balanced meal!";
  }

  try {
    // Correct initialization as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    // Use gemini-3-flash-preview for basic text tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a 1-sentence supportive "chef's note" for a beginner cooking ${recipe.name}. Focus on why it's a great choice or a quick tip. Keep it encouraging and short.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 100,
      }
    });
    
    // Use .text getter directly
    return response.text?.trim() || "This dish is a classic crowd-pleaser!";
  } catch (error) {
    console.error("Gemini Commentary Error:", error);
    return "This dish is a fantastic way to master basic Indian flavors.";
  }
};
