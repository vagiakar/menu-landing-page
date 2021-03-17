import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error hero">
      <h1>404 Page not found</h1>
      <Link to="/" className="btn hero-btn error-btn">
        Back to home
      </Link>
    </div>
  );
}
