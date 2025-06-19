import React from 'react';
import MyFoodBox from './MyFoodBox';


function MyFoodListBox({ foods }) {
  return (
    <section className="myfoodgrid">
      {foods.map((item, index) => {
        return (
          <MyFoodBox
            key={item.id}
            item={item}
          />
        );
      })}
    </section>
  );
}

export default MyFoodListBox;

