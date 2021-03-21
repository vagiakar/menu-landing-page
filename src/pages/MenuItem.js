import React from "react";
import img from "../images/coffee-item.jpg";

export default function MenuItem({ match, location }) {
  const { index, drinks } = location.state;
  return (
    <div className="menu-item">
      <h1>{drinks[index].name}</h1>
      <p className="price">{drinks[index].price} €</p>

      <img src={img} alt="" />
      <p>{drinks[index].description}</p>
    </div>
  );
}
