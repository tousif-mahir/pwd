import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MealCard from "./MealCard";

function Meals() {
  const { category } = useParams();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" +
        category
    )
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
      });
  }, [category]);

  return (
    <div>
      <Link to="/">Back</Link>

      <h1>{category} Meals</h1>

      {meals.map((meal) => (
        <MealCard
          key={meal.idMeal}
          meal={meal}
        />
      ))}
    </div>
  );
}

export default Meals;