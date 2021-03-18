import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="error">
      <h1>404 Page not found</h1>
      <Link to="/" className="btn error-btn">
        Back to home
      </Link>
    </section>
  );
}
