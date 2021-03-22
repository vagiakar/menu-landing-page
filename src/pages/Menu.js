import React, { useState, useEffect } from "react";
import menuItems from "../menuItemsArray.js";
import MenuCard from "../components/MenuCard.js";

const categories = [
  ...new Set(
    menuItems.map((drink) => {
      return drink.category;
    })
  ),
];
categories.push("all");

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMenuItems, setSelectedMenuItems] = useState(() =>
    selectWholeMenu()
  );

  useEffect(() => {
    changeMenu();
  }, [selectedCategory]);

  function changeMenu() {
    let selectedItems;
    if (selectedCategory === "all") {
      selectedItems = selectWholeMenu();
    } else {
      selectedItems = selectSpecificCategory();
    }
    setSelectedMenuItems(selectedItems);
  }

  function selectWholeMenu() {
    const categoriesExceptAll = categories.filter((category) => {
      return category !== "all";
    });
    return categoriesExceptAll.map((category) => {
      return menuItems.filter((item) => {
        return item.category === category;
      });
    });
  }

  function selectSpecificCategory(category = selectedCategory) {
    return [
      menuItems.filter((item) => {
        return item.category === category;
      }),
    ];
  }

  return (
    <>
      <section className="menu-header">
        <h1>our menu</h1>
      </section>
      <div className="container">
        <section className="menu">
          <div className="menu-buttons-container">
            {categories.map((category) => {
              return (
                <button
                  key={category}
                  className={`btn menu-btn  ${
                    selectedCategory === category && "active"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="menu-display">
            {selectedMenuItems.map((category) => {
              return (
                <div className="category" key={category[0].category}>
                  <h2>{category[0].category}</h2>
                  <div className="menu-cards-container">
                    {category.map((item) => {
                      return (
                        <MenuCard key={item.id} menu={true} menuItem={item} />
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
