import React from 'react';
import { IoIosStar } from 'react-icons/io';

function MyFoodBox({ item }) {
  const showDiscount = item.myfooddiscount;
  const discounted = parseFloat(item.myfooddiscount);

  const calculateOriginalPrice = () => {
    if (showDiscount) {
      const discountPercent = parseFloat(showDiscount.replace('%', ''));
      const originalPrice = item.myfoodprice / (1 - discountPercent / 100);
      return originalPrice.toFixed(2);
    }
    return null;
  };

  const originalPrice = calculateOriginalPrice();

  return (
    <div className="myfoodcard">
      <div className="myfoodimageplacing">
        <img 
          src={item.myfoodimageplacing || "/placeholder-image.webp"} 
          alt={item.myfoodtitle}
          className="myfoodimage"
        />

        <div className="myfooddiscountbadge">
          {item.myfooddiscount}
        </div>

        

        {item.rating && (
          <div className="myfoodrating">
            <IoIosStar 
              size={16} 
              style={{ color: '#fbbf24', fill: '#fbbf24' }}
            />
            <span className="myfoodratingtext">
              {item.rating.toFixed(2)}
            </span>
          </div>
        )}
      </div>
      
      <div className="myfoodinfo">
        <h3 className="myfoodtitle">{item.myfoodtitle}</h3>
        <p className="myfooddescription">{item.myfooddescription}</p>

        <div className="myfoodbottom">
          <div className="myfoodpricearea">
            <span className="mydiscounted">${item.myfoodprice.toFixed(2)}</span>
            {originalPrice && (
              <span className="myoriginalprice">${originalPrice}</span>
            )}
          </div>
          <button className="myfoodaddcart">Add to Cart</button>
        </div>

        {item.myfoodstock > 0 && (
          <div className="myfoodstock">
            Stock: {item.myfoodstock} items
          </div>
        )}
      </div>
    </div>
  );
}

export default MyFoodBox;
