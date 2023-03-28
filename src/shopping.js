import side from "./side.png";
import "./css/shopping.css";
import { data } from "./data";
import { ShoppingCard } from "./shopping-card";
import { useState } from "react";

export const Shopping = (props) => {
  const [allPrice, setAllPrice] = useState();
  const [changeState, setChangeState] = useState(data);

  // function handler() {
  //   let summ = 0;
  //   return function (price) {
  //     summ = summ + price / 2;
  //     return setAllPrice(summ);
  //   };
  // }

  // const suma = handler();

  const deletes = (id) => {
    let info = changeState.filter((item) => item.id !== id);
    setChangeState(info);
  };

  const plus = (id, count) => {
    let dataForPlus = changeState;
    dataForPlus.some((item) => {
      if (item.id === id) {
        item.count++;
        item.price += item.price / count;
      }
    });
    setChangeState(dataForPlus);
  };

  const minus = (id, count) => {
    let dataForMinus = changeState;
    dataForMinus.some((item) => {
      if (item.id === id) {
        item.count--;
        item.price -= item.price / count;
      }
    });
    setChangeState(dataForMinus);
  };

  console.log(changeState);

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
              // getPrice={suma}
              plus={() => plus(item.id, item.count)}
              minus={() => minus(item.id, item.count)}
              deletes={() => deletes(item.id)}
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
