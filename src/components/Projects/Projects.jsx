import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Pagefeed from "../Pagefeed/Pagefeed";
import "./style.css";

export default function Projects(props) {
  const pageName = props.currentPage;

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    navigate("/skills");
  };

  const handleBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };
  return (
    <>
      <Pagefeed currentPage={pageName} />
      <div id="projectsInfo">
        <h1 className="currentPage">{pageName} Information </h1>

        <div className="formDiv">
          <form onSubmit={handleSave}>
            <div></div>
            <div></div>
            <button className="btn btnBack" onClick={handleBack}>
              Back <i className="fa-solid fa-left-long" />
            </button>
            <button className="btn btnNext" type="submit">
              Next <i className="fa-solid fa-right-long" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
