import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function MealDetails() {
  const { id } = useParams();

  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
    )
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals[0]);
      });
  }, [id]);

  if (!meal) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Link to="/">Home</Link>

      <h1>{meal.strMeal}</h1>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width="300"
      />

      <h3>Category</h3>
      <p>{meal.strCategory}</p>

      <h3>Area</h3>
      <p>{meal.strArea}</p>

      <h3>Instructions</h3>
      <p>{meal.strInstructions}</p>

      <h3>Ingredients</h3>

      <p>{meal.strIngredient1}</p>
      <p>{meal.strIngredient2}</p>
      <p>{meal.strIngredient3}</p>
      <p>{meal.strIngredient4}</p>
      <p>{meal.strIngredient5}</p>
      <p>{meal.strIngredient6}</p>
      <p>{meal.strIngredient7}</p>
      <p>{meal.strIngredient8}</p>
      <p>{meal.strIngredient9}</p>
      <p>{meal.strIngredient10}</p>
    </div>
  );
}

export default MealDetails;