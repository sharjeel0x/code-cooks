import { HfInference } from "@huggingface/inference";

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function getRecipeHF(ingredientsArr) {
  const ingredients = ingredientsArr.join(", ");
  const systemPrompt = `
DONT USE * anywhere
You are a helpful and professional recipe assistant.  
Create a recipe using only or mostly these ingredients.  
Keep it simple, clear, and direct.  
Do not repeat the ingredient list.  
Only include a bold recipe name at the top.  
Add a brief 3-line description under the title explaining the dish.  
Then list 12–15 short cooking steps, using “>” as bullet points instead of numbers.  
Make each step concise, actionable, and easy to follow.


`;

  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `I have ${ingredients}. Please give me a recipe.`,
        },
      ],
      max_tokens: 1000,
    });

    return response.choices[0].message.content;
  } catch (err) {
    console.error("❌ Hugging Face error:", err);
    return "Error fetching recipe: " + err.message;
  }
}
