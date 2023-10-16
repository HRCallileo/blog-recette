import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Formulaire from './Formulaire';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Utilisation d'Axios pour récupérer les recettes depuis TheMealDB API
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
      .then((response) => {
        setRecipes(response.data.meals);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <div className="row bg-dark text-white px-4">
      <h1 className='text-center'>Recette</h1>
      {recipes.map((recipe) => (
        <div className="col-lg-4 col-md-6" key={recipe.idMeal}>
          <div className="card mb-4">
            <img src={recipe.strMealThumb} className="card-img-top" alt={recipe.strMeal} />
            <div className="card-body">
              <h5 className="card-title">{recipe.strMeal}</h5>
              <Link to={`/recipe/${recipe.idMeal}`} className='btn btn-warning'>
                Détails
              </Link>
              <p>Favoris : *</p>
            </div>
          </div>
        </div>
      ))}
    <Formulaire/>
    </div>
  );
}

export default RecipeList;
