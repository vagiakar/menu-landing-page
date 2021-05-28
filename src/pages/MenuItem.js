import React from "react";
import { Link } from "react-router-dom";
import menuItems from "../menuItemsArray.js";
import { useParams } from "react-router-dom";
import Error from "./Error";

export default function MenuItem() {
  const params = useParams();
  const menuItem = menuItems.find((item) => {
    return item.id == params.id;
  });
  if (menuItem) {
    return (
      <div className="menu-item">
        <div>
          <h1>{menuItem.name}</h1>
          <p className="price">{menuItem.price} €</p>
        </div>
        <img src={menuItem.image} alt="" />
        <p>{menuItem.description}</p>
        <Link to="/menu">
          <button className="btn menu-btn menu-item-btn">
            Go back to menu
          </button>
        </Link>
      </div>
    );
  }
  return <Error />;
}
