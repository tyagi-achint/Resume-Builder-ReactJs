import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="homePage">
      <h1>
        Swift Resume Creation:
        <br />
        Effortless and Fast
      </h1>

      <Link to="/personalInfo" className="createResume btn">
        Create
      </Link>
    </div>
  );
}
