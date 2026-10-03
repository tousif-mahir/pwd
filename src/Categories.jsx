import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
      });
  }, []);

  return (
    <div>
      <h1>Meal Categories</h1>

      {categories.map((category) => (
        <CategoryCard
          key={category.idCategory}
          category={category}
        />
      ))}
    </div>
  );
}

export default Categories;