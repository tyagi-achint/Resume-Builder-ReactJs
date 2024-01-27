import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Clearall() {
  const navigate = useNavigate();
  const handleClearAll = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <button className="btn clearBtn" onClick={handleClearAll}>
        Clear All
      </button>
    </>
  );
}
