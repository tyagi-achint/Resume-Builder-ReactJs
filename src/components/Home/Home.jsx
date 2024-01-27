import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
  return (
    <div id="homePage">
      <h1>
        Swift Resume Creation:
        <br />
        Effortless and Fast
      </h1>

      <Link to="/personal" className="createResume btn">
        Create
      </Link>
    </div>
  );
}
