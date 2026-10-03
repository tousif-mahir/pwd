import { Link } from "react-router-dom";

function MealCard({ meal }) {
  return (
    <div>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width="200"
      />

      <h2>{meal.strMeal}</h2>

      <Link to={"/meal/" + meal.idMeal}>
        View Details
      </Link>
    </div>
  );
}

export default MealCard;