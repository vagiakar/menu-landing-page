import React from "react";

export default function MenuItem({ match, location }) {
  const { index, drinks } = location.state;
  return (
    <div className="menu-item">
      <div>
        <h1>{drinks[index].name}</h1>
        <p className="price">{drinks[index].price} €</p>
      </div>
      <img src={drinks[index].image} alt="" />
      <p>{drinks[index].description}</p>
    </div>
  );
}
