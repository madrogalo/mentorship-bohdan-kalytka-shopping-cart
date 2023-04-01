import side from "./side.png";
import "./css/shopping.css";
import { data } from "./data";
import { ShoppingCard } from "./shopping-card";
import { useEffect, useState } from "react";

export const Shopping = () => {
  const [changeState, setChangeState] = useState(data);
  const [prices, setPrices] = useState(0);

  useEffect(() => {
    let defaultPrice = changeState.reduce((sum, item) => {
      return item.price + sum;
    }, 0);
    setPrices(defaultPrice);
    // eslint-disable-next-line
  }, []);

  const deletes = (id) => {
    let info = changeState.filter((item) => item.id !== id);
    let sum = info.reduce((sum, item) => {
      return item.price + sum;
    }, 0);
    setPrices(sum);
    setChangeState(info);
  };

  const plus = (id, count) => {
    changeState.forEach((item) => {
      if (item.id === id) {
        item.count++;
        item.price += item.price / count;
      }
    });
    let sumPlus = changeState.reduce((sum, item) => {
      return item.price + sum;
    }, 0);

    setPrices(sumPlus);
    setChangeState(changeState);
  };

  const minus = (id, count) => {
    changeState.forEach((item) => {
      if (item.id === id) {
        if (item.count === 0) return;
        item.count--;
        item.price -= item.price / count;
      }
    });
    let sumMinus = changeState.reduce((sum, item) => {
      return item.price + sum;
    }, 0);

    setPrices(sumMinus);
    setChangeState(changeState);
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
              price={item.price}
              img={item.img}
              type={item.type}
              id={item.id}
              key={item.id}
              plus={() => plus(item.id, item.count)}
              minus={() => minus(item.id, item.count)}
              deletes={() => deletes(item.id)}
            />
          );
        })}
      </div>
      <div className="total-price">
        <h4>{prices} грн</h4>
        <button className="btn">Checkout</button>
      </div>
    </div>
  );
};
