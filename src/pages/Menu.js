import React from "react";
import { Link } from "react-router-dom";
import img from "../images/coffee-item.jpg";

export default function Menu() {
  return (
    <>
      <section className="menu-header">
        <h1>our menu</h1>
      </section>
      <div className="container">
        <section className="menu">
          <div className="menu-buttons-container">
            <button className="btn menu-btn active">All</button>
            <button className="btn menu-btn">Cappuccino</button>
            <button className="btn menu-btn">Espresso</button>
            <button className="btn menu-btn">Greek</button>
            <button className="btn menu-btn">Tea</button>
            <button className="btn menu-btn">Chocolate</button>
          </div>
          <div className="menu-display">
            <div className="category">
              <h2>Espresso</h2>
              <div className="menu-cards-container">
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="category">
              <h2>Espresso</h2>
              <div className="menu-cards-container">
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
                <div className="suggest-card">
                  <Link to="/item">
                    <img className="suggest-card-img" src={img} alt="coffee" />
                    <p className="suggest-card-txt  menu-card-txt">
                      Cappuccino Latte <span className="price">2.5$</span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
