import React from "react";
import { IoIosStar } from "react-icons/io";

function MyFoodBox({ item }) {
  return (
    <div className="myfoodcard">
      <div className="myfoodimageplacing">
        <img
          src={item.myfoodimageplacing || "/placeholder-image.webp"}
          alt={item.myfoodtitle}
          className="myfoodimage"
        />

        {item.myfooddiscount && (
          <div className="myfooddiscountbadge">{item.myfooddiscount}</div>
        )}

        {item.rating && (
          <div className="myfoodrating">
            <IoIosStar size={16} style={{ color: "#fbbf24" }} />
            <span className="myfoodratingtext">{item.rating.toFixed(2)}</span>
          </div>
        )}
      </div>

      <div className="myfoodinfo">
        <h3 className="myfoodtitle">{item.myfoodtitle}</h3>
        <p className="myfooddescription">{item.myfooddescription}</p>

        <div className="myfoodbottom">
          <div className="myfoodpricearea">
            <span className="mydiscounted">${item.myfoodprice.toFixed(2)}</span>
          </div>
          <button className="myfoodaddcart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default MyFoodBox;
