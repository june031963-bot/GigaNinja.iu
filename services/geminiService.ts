
import { GoogleGenAI } from "@google/genai";
import { GAMES_DATA } from "../constants";

// Corrected initialization to use the API key directly from process.env as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGameRecommendation = async (userPrompt: string) => {
  try {
    const availableGames = GAMES_DATA.map(g => `${g.title} (${g.category}): ${g.description}`).join('\n');
    
    // Updated to use systemInstruction for better prompt engineering as per guidelines.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The user says: "${userPrompt}"`,
      config: {
        systemInstruction: `You are the "Nexus Game Guru", an AI assistant for a gaming website. 
        Suggest 1 or 2 specific games from the available list that match the user's mood or request. 
        Keep it short (max 3 sentences) and use a friendly gamer tone.
        
        Available games on our site:
        ${availableGames}`,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Directly access the .text property of the GenerateContentResponse.
    return response.text || "I'm having trouble thinking of a game right now. Try playing 2048!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm offline for maintenance, but I always recommend a quick game of Hextris!";
  }
};
