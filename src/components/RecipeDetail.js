import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../components/RecipeDetail.css'

function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((response) => {
        setRecipe(response.data.meals[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-dark text-center px-5 pb-2'>
      <h1 className="text-white">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="img-fluid" />
      <h2 className="text-white">Instructions:</h2>
      <p className="text-white">{recipe.strInstructions}</p>
      <h2 className="text-white">Ingredients:</h2>
      <table className='center'>
        <td>
          {Object.keys(recipe)
            .filter((key) => key.startsWith('strIngredient') && recipe[key])
            .map((key, index) => (
              <tr key={index} className="text-warning bg-dark">{recipe[key]}</tr>
            ))}
          </td>
          <td>
          {Object.keys(recipe)
            .filter((key) => key.startsWith('strMeasure') && recipe[key])
            .map((key, index) => (
              <tr key={index} className="text-warning bg-dark">{recipe[key]}</tr>
            ))}
          </td>
        </table>
    </div>
  );
}

export default RecipeDetail;