import React from "react";
import { FaCocktail } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { GiSalad, GiChiliPepper } from "react-icons/gi";
import { FaIceCream, FaUtensils } from "react-icons/fa";

function MyFoodCategoryFilter() {
  return (
    <nav className="foodCategoryNav">
      <div className="categoryList">
        <button className="categoryItem active">
          <FaUtensils /> All
        </button>
        <button className="categoryItem"><FaCocktail /> Drinks</button>
        <button className="categoryItem"><FaPizzaSlice /> Pizza</button>
        <button className="categoryItem"><GiSalad /> Salad</button>
        <button className="categoryItem"><GiChiliPepper /> Spicy</button>
        <button className="categoryItem"><FaIceCream /> Sweets</button>
      </div>
      <button className="viewAllBtn">View All</button>
    </nav>
  );
}

export default MyFoodCategoryFilter;
