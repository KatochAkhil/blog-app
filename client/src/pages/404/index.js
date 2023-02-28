import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ErrorPage() {
  return (
    <section className="errorpage">
      <div className="inner_error_page">
        <h1>404 Error</h1>
        <Link to="/">Back To Home</Link>
      </div>
    </section>
  );
}

export default ErrorPage;
