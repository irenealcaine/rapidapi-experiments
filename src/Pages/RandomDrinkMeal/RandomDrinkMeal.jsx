import { useEffect, useState } from "react";
import "./RandomDrinkMeal.scss";

// https://www.themealdb.com/api.php
// https://www.thecocktaildb.com/api.php

const RandomDrinkMeal = () => {

  const [randomDrink, setRandomDrink] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setRandomDrink(data.drinks);
      });

    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setRandomMeal(data.meals);
      });
  }, []);

  // const exampleDrink = [
  //   {
  //     idDrink: "17247",
  //     strDrink: "The Last Word",
  //     strDrinkAlternate: null,
  //     strTags: null,
  //     strVideo: null,
  //     strCategory: "Cocktail",
  //     strIBA: null,
  //     strAlcoholic: "Alcoholic",
  //     strGlass: "Cocktail glass",
  //     strInstructions: "Shake with ice and strain into a cocktail glass.",
  //     strInstructionsES: null,
  //     strInstructionsDE: "Mit Eis schütteln und in ein Cocktailglas abseihen.",
  //     strInstructionsFR: null,
  //     strInstructionsIT:
  //       "Shakerare con ghiaccio e filtrare in una coppetta da cocktail.",
  //     "strInstructionsZH-HANS": null,
  //     "strInstructionsZH-HANT": null,
  //     strDrinkThumb:
  //       "https://www.thecocktaildb.com/images/media/drink/91oule1513702624.jpg",
  //     strIngredient1: "Green Chartreuse",
  //     strIngredient2: "Maraschino Liqueur",
  //     strIngredient3: "Lime Juice",
  //     strIngredient4: "Gin",
  //     strIngredient5: null,
  //     strIngredient6: null,
  //     strIngredient7: null,
  //     strIngredient8: null,
  //     strIngredient9: null,
  //     strIngredient10: null,
  //     strIngredient11: null,
  //     strIngredient12: null,
  //     strIngredient13: null,
  //     strIngredient14: null,
  //     strIngredient15: null,
  //     strMeasure1: "1 oz",
  //     strMeasure2: "1 oz",
  //     strMeasure3: "1 oz",
  //     strMeasure4: "1 oz",
  //     strMeasure5: null,
  //     strMeasure6: null,
  //     strMeasure7: null,
  //     strMeasure8: null,
  //     strMeasure9: null,
  //     strMeasure10: null,
  //     strMeasure11: null,
  //     strMeasure12: null,
  //     strMeasure13: null,
  //     strMeasure14: null,
  //     strMeasure15: null,
  //     strImageSource: null,
  //     strImageAttribution: null,
  //     strCreativeCommonsConfirmed: "No",
  //     dateModified: "2017-12-19 16:57:04",
  //   },
  // ];
  return (
    <div className="page3">
      <h1>Page 3</h1>

      {randomDrink.map((drink) => (
        <div>
          <h2>{drink.strDrink}</h2>
          <img src={drink.strDrinkThumb} />
          <p>{drink.strCategory}</p>
          <p>{drink.strAlcoholic}</p>
          <p>{drink.strGlass}</p>

          <ul>
            <li>
              {drink.strMeasure1} {drink.strIngredient1}
            </li>
            <li>
              {drink.strMeasure2} {drink.strIngredient2}
            </li>
            <li>
              {drink.strMeasure3} {drink.strIngredient3}
            </li>
            <li>
              {drink.strMeasure4} {drink.strIngredient4}
            </li>
          </ul>

          <p>{drink.strInstructions}</p>

        </div>

      ))}

      {randomMeal.map((meal) => (
        <div>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} />
          <p>{meal.strCategory}</p>
          <p>{meal.strArea}</p>

          <ul>
            {(() => {
              const ingredientsList = [];

              // Iterar a través de las propiedades hasta encontrar un ingrediente nulo
              for (let i = 1; meal[`strIngredient${i}`] !== null; i++) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];

                if (ingredient !== "" && measure !== "") {
                  ingredientsList.push(
                    <li key={i}>
                      {measure} {ingredient}
                    </li>
                  );
                }
              }

              return ingredientsList;
            })()}
          </ul>

          <p>{meal.strInstructions}</p>

        </div>

      ))}

    </div>
  )
};

export default RandomDrinkMeal;
