import side from "./side.png";
import "./css/shopping.css";
import { data } from "./data";
import { ShoppingCard } from "./shopping-card";
import { useState } from "react";

export const Shopping = (props) => {
  const [allPrice, setAllPrice] = useState();
  const [changePage, setChangePage] = useState(data);

  function handler() {
    let summ = 0;
    return function (price) {
      summ = summ + price / 2;
      return setAllPrice(summ);
    };
  }

  const suma = handler();

  function deleteOrder() {
    let find = data;
    return function (id) {
      let info = find.filter((item) => item.id !== id);
      console.log(info);
    };
  }

  // console.log(changePage);

  const deletes = deleteOrder();

  return (
    <div className="content">
      <div className="header">
        <img src={side} alt="" />
        <h2>Shopping Continue</h2>
      </div>
      <div className="intro-cart">
        <h2>Shopping cart</h2>
        <p>You have 3 item in your cart</p>
      </div>
      <div className="items">
        {changePage.map((item) => {
          return (
            <ShoppingCard
              name={item.name}
              price={item.price}
              img={item.img}
              type={item.type}
              id={item.id}
              key={item.id}
              getPrice={suma}
              deletes={deletes}
            />
          );
        })}
      </div>
      <div className="total-price">
        <h4>{allPrice} грн</h4>
        <button className="btn">Checkout</button>
      </div>
    </div>
  );
};
