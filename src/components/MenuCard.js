import React from "react";
import { Link } from "react-router-dom";

export default function MenuCard({ menu = false, menuItem }) {
  return (
    <div className="suggest-card">
      <Link to={`/item/${menuItem.id}`}>
        <img className="suggest-card-img" src={menuItem.image} alt="coffee" />
        <div className={`suggest-card-txt ${menu && "menu-card-txt"}`}>
          <p>{menuItem.name}</p>
          <p className="price">{menuItem.price} €</p>
        </div>
      </Link>
    </div>
  );
}
