import { useEffect, useState } from "react";
import { mexFood } from "../../Utils/food";
import "./MexicanFood.scss";
import axios from "axios";

// https://rapidapi.com/rapihub-rapihub-default/api/the-mexican-food-db/

const MexicanFood = () => {

  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_URL_FOOD, {

          headers: {
            "X-RapidAPI-Host": process.env.REACT_APP_FOOD_HOST,
            "X-RapidAPI-Key": process.env.REACT_APP_TU_RAPIDAPI_KEY,
          },
        });

        setFood(response.data);
        console.log(food);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mexican-food">
      <h1 className="title">Mexican Food</h1>
      <div className="meals">
        {food.map((meal) => (
          <div className="meal">
            <h2>{meal.title}</h2>
            <p>{meal.difficulty}</p>
            <img src={meal.image} alt={meal.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MexicanFood;
