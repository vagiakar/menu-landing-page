import React from "react";
import { Link } from "react-router-dom";
import MenuCard from "../components/MenuCard.js";
import menuItems from "../menuItemsArray.js";

export default function Home() {
  function findItem(selectedItem) {
    const item = menuItems.find((item) => {
      return item.name === selectedItem;
    });
    if (item) {
      return item;
    }
    return menuItems[0];
  }

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>The best coffee in town</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quas
            consequatur ut dicta, numquam porro commodi eveniet fuga ab totam
            tempora odit eligendi earum optio quo voluptas quae et tempore.
          </p>
          <button className="btn hero-btn">
            <Link to="/menu">Our Menu</Link>
          </button>
        </div>
      </section>
      <section className="info-numbers">
        <div className="container">
          <h2>What coffee shop means</h2>
          <div className="info-numbers-container">
            <div className="info-numbers-card">
              <p className="number">20</p>
              <p className="text">Shops</p>
            </div>
            <div className="info-numbers-card">
              <p className="number">50</p>
              <p className="text">Coffes</p>
            </div>
            <div className="info-numbers-card">
              <p className="number">100.000</p>
              <p className="text">Customers</p>
            </div>
          </div>
        </div>
      </section>
      <section className="suggest">
        <div className="container">
          <h2>We suggest</h2>
          <div className="suggest-cards-container">
            <MenuCard menuItem={findItem("cappuccino")} />
            <MenuCard menuItem={findItem("espresso")} />
          </div>
        </div>
      </section>
      <section className="newsletter">
        <div className="newsletter-container">
          <h2>Join our newsletter!</h2>
          <form action="" className="newsletter-form">
            <input
              className="newsletter-input"
              type="email"
              name="email"
              placeholder="Email"
            />
            <button className="btn newsletter-btn" type="submit">
              Join
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
