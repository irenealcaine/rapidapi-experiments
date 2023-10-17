import { mexFood } from "../../Utils/food";
import "./MexicanFood.scss";

const MexicanFood = () => {
  return (
    <div className="mexican-food">
      <h1 className="title">Mexican Food</h1>
      <div className="meals">
        {mexFood.map((meal) => (
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
