import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import drinks from "../drinks.js";
import img from "../images/coffee-item.jpg";
const coffees = drinks.filter((drink) => {
  return drink.category === "Coffees";
});
const nonCoffees = drinks.filter((drink) => {
  return drink.category === "Non-coffees";
});
const desserts = drinks.filter((drink) => {
  return drink.category === "Desserts";
});

export default function Menu() {
  const [category, setCategory] = useState("All");
  const [selectedDrinks, setSelectedDrinks] = useState([
    coffees,
    nonCoffees,
    desserts,
  ]);

  useEffect(() => {
    changeMenu();
  }, [category]);

  function changeMenu() {
    let drinks = [];
    if (category === "Coffees") {
      drinks = [coffees];
    } else if (category === "Non-coffees") {
      drinks = [nonCoffees];
    } else if (category === "Desserts") {
      drinks = [desserts];
    } else {
      drinks = [coffees, nonCoffees, desserts];
    }
    setSelectedDrinks(drinks);
  }

  return (
    <>
      <section className="menu-header">
        <h1>our menu</h1>
      </section>
      <div className="container">
        <section className="menu">
          <div className="menu-buttons-container">
            <button
              className={`btn menu-btn  ${category === "All" && "active"}`}
              onClick={() => setCategory("All")}
            >
              All
            </button>
            <button
              className={`btn menu-btn  ${category === "Coffees" && "active"}`}
              onClick={() => setCategory("Coffees")}
            >
              Coffees
            </button>
            <button
              className={`btn menu-btn ${
                category === "Non-coffees" && "active"
              }`}
              onClick={() => setCategory("Non-coffees")}
            >
              Non-coffees
            </button>
            <button
              className={`btn menu-btn ${category === "Desserts" && "active"}`}
              onClick={() => setCategory("Desserts")}
            >
              Desserts
            </button>
          </div>
          <div className="menu-display">
            {selectedDrinks.map((category) => {
              return (
                <div className="category">
                  <h2>{category[0].category}</h2>
                  <div className="menu-cards-container">
                    {category.map((drink) => {
                      return (
                        <div className="suggest-card">
                          <Link to="/item">
                            <img
                              className="suggest-card-img"
                              src={img}
                              alt="coffee"
                            />
                            <p className="suggest-card-txt  menu-card-txt">
                              {drink.name}
                              <span className="price">{` ${drink.price} €`}</span>
                            </p>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
