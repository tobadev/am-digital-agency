import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("NEXT_PUBLIC_GEMINI_API_KEY is missing. AI features will respond with mock data.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateStrategicInsight = async (industry: string): Promise<string> => {
  const client = getClient();

  if (!client) {
    return new Promise(resolve => setTimeout(() => resolve(`(Mock AI Response) For the ${industry} sector, we recommend focusing on hyper-personalization and data-driven user experiences to increase engagement by 40%.`), 1000));
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a single, punchy, high-value digital strategy insight for a potential client in the "${industry}" industry. Keep it under 30 words. Focus on digital transformation or UX.`,
    });
    return response.text || "Focus on user-centric design patterns to drive conversion.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our strategic insights are currently offline, but our team is ready to help.";
  }
};
