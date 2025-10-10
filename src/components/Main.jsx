import React from "react";
import Recipe from "./recipe";
import FakeIngredients from "./FakeIngredients";
import { getRecipeHF as getRecipe } from "../huggingface";


export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  const [recipeText, setRecipeText] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const itemList = ingredients.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  function onsub(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }

  async function showRecipe() {
    if (ingredients.length === 0) return alert("Add some ingredients first!");
    setLoading(true);
    setRecipeShown(true);
    const recipe = await getRecipe(ingredients);
    setRecipeText(recipe);
    setLoading(false);
  }

  return (
    <main>
      <form action={onsub} className="input-field">
        <input type="text" name="ingredient" placeholder="e.g. chicken" />
        <button type="submit">Add ingredient</button>
      </form>

      <div className="recipe">
        <div className="ingredients-con">
          <div>
            <h1 className="ingri">Ingredients</h1>
            <ul className="lists">
              {itemList.length >= 1 ? itemList : <FakeIngredients />}
            </ul>
          </div>
          <div className="get-recipe-con">
            <div>
              <h4>What’s in your kitchen?</h4>
              <p>Create a custom recipe based on your ingredients.</p>
            </div>
            <div>
              <button onClick={showRecipe}>Create Recipe</button>
            </div>
          </div>
        </div>

        <Recipe recipeShown={recipeShown} recipeText={recipeText} loading={loading} />
      </div>
    </main>
  );
}
