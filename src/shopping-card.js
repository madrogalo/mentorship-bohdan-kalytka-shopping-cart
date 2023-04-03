import "./css/shoppingCard.css";
import trash from "./Trashcan.png";
import up from "./up.png";
import down from "./down.png";

export const ShoppingCard = ({
  name,
  type,
  img,
  price,
  id,
  count,
  plus,
  minus,
  deletes,
}) => {
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
          <img src={up} alt="" onClick={() => plus(id, count)} />
          <img src={down} alt="" onClick={() => minus(id, count)} />
        </div>
      </div>
      <div className="prices">
        <h5>{price} грн.</h5>
      </div>
      <div className="trash">
        <img src={trash} alt="" onClick={() => deletes(id)} />
      </div>
    </div>
  );
};
