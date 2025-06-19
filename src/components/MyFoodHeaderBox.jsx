import React from 'react';
import {
  FaUtensils,
  FaCocktail,
  FaPizzaSlice,
  FaLeaf,
  FaPepperHot,
  FaIceCream
} from 'react-icons/fa';

function MyFoodHeaderBox() {
  const categories = [
    { id: 'all', label: 'All', icon: FaUtensils },
    { id: 'drinks', label: 'Drinks', icon: FaCocktail },
    { id: 'pizza', label: 'Pizza', icon: FaPizzaSlice },
    { id: 'salad', label: 'Salad', icon: FaLeaf },
    { id: 'spicy', label: 'Spicy', icon: FaPepperHot },
    { id: 'sweets', label: 'Sweets', icon: FaIceCream }
  ];

  return (
    <div className="myfoodheader">
      <div className="myfoodfilters">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              className="myfoodfilter"
              title={category.label}
            >
              <Icon size={16} />
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>
      <button className="myfoodviewall">View All</button>
    </div>
  );
}

export default MyFoodHeaderBox;
