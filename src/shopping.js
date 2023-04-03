import side from "./side.png";
import "./css/shopping.css";
import { data } from "./data";
import { ShoppingCard } from "./shopping-card";
import { useMemo, useState } from "react";

export const Shopping = () => {
  const [changeState, setChangeState] = useState(data);

  let totalPrice = useMemo(
    () => changeState.reduce((sum, item) => item.price * item.count + sum, 0),
    [changeState]
  );

  const deletes = (id) => {
    let info = changeState.filter((item) => item.id !== id);
    setChangeState(info);
  };

  const plus = (el) => {
    let newState = changeState.map((item) => {
      if (item.id === el.id) {
        const price = data.find((data) => data.id === el.id).price;
        return {
          ...item,
          count: item.count + 1,
        };
      }
      return item;
    });
    setChangeState(newState);
  };

  const minus = (el) => {
    let newState = changeState.map((item) => {
      if (item.id === el.id) {
        const price = data.find((data) => data.id === el.id).price;
        return {
          ...item,
          count: item.count - 1,
        };
      }
      return item;
    });
    setChangeState(newState);
  };

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
        {changeState.map((item) => {
          return (
            <ShoppingCard
              count={item.count}
              name={item.name}
              price={item.price * item.count}
              img={item.img}
              type={item.type}
              id={item.id}
              key={item.id}
              plus={() => plus(item)}
              minus={() => minus(item)}
              deletes={() => deletes(item.id)}
            />
          );
        })}
      </div>
      <div className="total-price">
        <h4>{totalPrice} грн</h4>
        <button className="btn">Checkout</button>
      </div>
    </div>
  );
};
