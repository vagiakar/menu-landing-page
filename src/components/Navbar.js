import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const refNavbarList = useRef();
  const refNavbarListContainer = useRef();
  const refDivider = useRef();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const linksHeight = refNavbarList.current.getBoundingClientRect().height;
    if (isNavbarOpen) {
      refNavbarListContainer.current.style.height = `${linksHeight}px`;
      refDivider.current.style.display = `block`;
      refDivider.current.style.visibility = `visible`;
    } else {
      refNavbarListContainer.current.style.height = `0px`;
      refDivider.current.style.visibility = `hidden`;
    }
  }, [isNavbarOpen]);

  function handleResize() {
    if (window.innerWidth > 800) {
      setIsNavbarOpen(false);
      refDivider.current.style.display = `none`;
    }
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Shop
      </Link>
      <div className="divider" ref={refDivider}></div>
      <div className="navbar-list-container" ref={refNavbarListContainer}>
        <ul className="navbar-list" ref={refNavbarList}>
          <li className="navbar-item">
            <Link className="navbar-link" to="/">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/menu">
              Menu
            </Link>
          </li>
        </ul>
      </div>
      {isNavbarOpen ? (
        <AiOutlineClose
          className="menu-icon"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        />
      ) : (
        <AiOutlineMenu
          className="menu-icon"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        />
      )}
    </nav>
  );
}
