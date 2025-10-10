import React, { useState, useEffect } from "react";

export default function Recipe({ recipeShown, recipeText, loading }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!loading && recipeText) {
      
      setDisplayedText(""); 
      let i = 0;
      const interval = setInterval(() => {
        if (i < recipeText.length) {
          setDisplayedText(prev => prev + recipeText[i]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 10); 
      return () => clearInterval(interval);
    }
  }, [loading, recipeText]);

  return (
    <div className="recipe-con">
      {recipeShown ? (
        loading ? (
          <h4>Cooking something amazing...</h4>
        ) : recipeText ? (
          <section>
            <h2>Chef Recommends:</h2>
            <article
              className="suggested-recipe-container"
              aria-live="polite"
              dangerouslySetInnerHTML={{
                __html: displayedText.replace(/\n/g, "<br>"),
              }}
            />
          </section>
        ) : (
          <h4>Couldn’t fetch recipe. Please try again.</h4>
        )
      ) : (
        <h4>NO DATA — press Create Recipe to synthesize your custom recipe.</h4>
      )}
    </div>
  );
}
