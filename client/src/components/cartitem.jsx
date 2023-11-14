import React, { useContext } from "react";
import { Contextapp } from "../api/context";
import { FaRegTrashAlt } from "react-icons/fa";

export function Cartitem({ item, handleCLick }) {
  const context = useContext(Contextapp);
  const dev = context.data.developers.find((dev) => dev.id == item?.developer);
  return (
    <div className="cart-item">
      <div className="item-info">
        <img className="item-img" src={item.port_image} alt="" />
        <div className="item-name">
          <p className="game-name">{item.title}</p>
          <p className="dev-name">{dev.name}</p>
        </div>
      </div>
      <p className="item-price">${item.price}</p>
      <p className="item-delete">
        <button onClick={() => handleCLick(item)}>
          <FaRegTrashAlt />
        </button>
      </p>
    </div>
  );
}
