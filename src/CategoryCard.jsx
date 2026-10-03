import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <div>
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        width="300"
      />


      <h2>{category.strCategory}</h2>

      <Link to={"/meals/" + category.strCategory}>
        View Meals
      </Link>
    </div>
  );
}

export default CategoryCard;