import React from "react";
import { Link } from "react-router-dom";
import img from "../images/coffee-item.jpg";

export default function MenuCard({ index, menu = false, drinks }) {
  const itemLink = {
    pathname: `/item/${drinks[index].id}`,
    state: { index: index, drinks: drinks },
  };
  return (
    <div className="suggest-card">
      <Link to={itemLink}>
        <img className="suggest-card-img" src={img} alt="coffee" />
        <div className={`suggest-card-txt ${menu && "menu-card-txt"}`}>
          <p>{drinks[index].name}</p>
          <p className="price">{drinks[index].price} €</p>
        </div>
      </Link>
    </div>
  );
}