import { useState } from "react";
import "./css/shoppingCard.css";
import trash from "./Trashcan.png";
import up from "./up.png";
import down from "./down.png";

export const ShoppingCard = (props) => {
  const { name, type, img, price, id } = props;
  let { getPrice } = props;
  let { deletes } = props;
  const [count, setCount] = useState(1);

  const plusHandler = () => {
    setCount(count + 1);
  };

  const minusHandler = () => {
    setCount(count - 1);
  };

  let changePrice = price * count;

  getPrice(changePrice);

  deletes(id);

  return (
    <div className="card">
      <div className="info-card">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <div className="name-type">
          <h5>{name}</h5>
          <p>{type}</p>
        </div>
      </div>
      <div className="counts">
        <div className="numb">
          <h3>{count}</h3>
        </div>
        <div className="clicks">
          <img src={up} alt="" onClick={plusHandler} />
          <img src={down} alt="" onClick={minusHandler} />
        </div>
      </div>
      <div className="prices">
        <h5>{changePrice} грн.</h5>
      </div>
      <div className="trash">
        <img src={trash} alt="" onClick={() => deletes(id)} />
      </div>
    </div>
  );
};
