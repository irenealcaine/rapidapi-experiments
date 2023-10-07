import { useEffect, useState } from "react";
import "./RandomDrinkMeal.scss";

// https://www.themealdb.com/api.php
// https://www.thecocktaildb.com/api.php

const RandomDrinkMeal = () => {

  const [randomDrink, setRandomDrink] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const [drinkResponse, mealResponse] = await Promise.all([
          fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((response) => response.json()),
          fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((response) => response.json()),
        ]);
        setRandomDrink(drinkResponse.drinks);
        setRandomMeal(mealResponse.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const renderIngredientList = (aliment) => {
    const ingredientsList = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = aliment[`strIngredient${i}`];
      const measure = aliment[`strMeasure${i}`];
      if (ingredient && measure) {
        ingredientsList.push(
          <li key={i} className={`ingredient`}>
            {measure} {ingredient}
          </li>
        );
      }
    }
    return ingredientsList;
  };

  return (
    <div className="random-drink-meal">
      <h1>Random Drink Meal</h1>

      {randomDrink.map((drink) => (
        <div className="drink-item" key={drink.idDrink}>

          <img className="drink-img" src={drink.strDrinkThumb} />


          <div className="drink-content">
            <h2 className="drink-title">{drink.strDrink}</h2>
            <p className="drink-category">{drink.strCategory}</p>
            <p className="drink-alcohol">{drink.strAlcoholic}</p>
            <p className="drink-glass">{drink.strGlass}</p>
            <h3 className="drink-ingredients-title">
              Ingedients
            </h3>
            <ul className="drink-ingredients">
              {renderIngredientList(drink)}
            </ul>
            <h3 className="drink-ingredients-title">
              Instructions
            </h3>
            <p className="drink-instructions">{drink.strInstructions}</p>
          </div>
        </div>
      ))}

      {randomMeal.map((meal) => (
        <div className="meal-item" key={meal.idMeal}>
          <img className="meal-img" src={meal.strMealThumb} />
          <div className="meal-content">

            <h2 className="meal-title">{meal.strMeal}</h2>
            <p className="meal-category">{meal.strCategory}</p>
            <p className="meal-area">{meal.strArea}</p>
            <h3 className="drink-ingredients-title">
              Ingedients
            </h3>
            <ul className="meal-ingredients">
              {renderIngredientList(meal)}
            </ul>
            <h3 className="drink-ingredients-title">
              Instructions
            </h3>
            <p className="meal-instructions">{meal.strInstructions}</p>
          </div>
        </div>
      ))}

    </div>
  )
};

export default RandomDrinkMeal;
