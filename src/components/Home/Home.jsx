import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { ImageHome } from "../Image/Images";

export default function Home() {
  return (
    <>
      <ImageHome />
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
    </>
  );
}
