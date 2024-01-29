import React from "react";
import "./style.css";

export default function Pagefeed(props) {
  const pageName = props.currentPage;
  const pageId = [
    "Personal",
    "Education",
    "Experience",
    "Projects",
    "Certificates",
    "Skills",
    "Extra",
  ];

  const calculatePercentage = (value) => {
    const index = pageId.indexOf(value) + 1;
    const step = 100 / pageId.length;
    return step * index;
  };

  const lineEffect = (value) => {
    const calculateValues = (value) => {
      if (value === "Personal") {
        return 20;
      } else if (value === "Education") {
        return 10;
      } else if (value === "Experience") {
        return 5;
      } else {
        return 0;
      }
    };
    const calculateValuesTwo = (value) => {
      if (value === "Personal") {
        return -5;
      } else if (value === "Projects") {
        return 5;
      } else if (value === "Certificates") {
        return 5;
      } else if (value === "Skills") {
        return 10;
      } else {
        return 0;
      }
    };

    const gradientStart =
      calculatePercentage(pageName) - calculateValues(value);
    const gradientEnd =
      calculatePercentage(pageName) + calculateValuesTwo(value);

    return `linear-gradient(to right, #5e5656 0%, #5e5656 ${gradientStart}%, transparent ${gradientEnd}%, transparent 100%)`;
  };

  return (
    <div className="formNavbar">
      <div
        className="line"
        id="line"
        style={{
          background: lineEffect(pageName),
        }}
      ></div>
      {pageId.map((value, index) => (
        <div
          key={index}
          className={`formNavbar-item ${
            pageName === value
              ? "active"
              : index < pageId.indexOf(pageName)
              ? "activeBefore"
              : ""
          }`}
        >
          <i
            className={`fa-solid fa-circle ${
              pageName === value
                ? "active"
                : index < pageId.indexOf(pageName)
                ? "activeBefore"
                : ""
            }`}
          ></i>
          {value}
        </div>
      ))}
    </div>
  );
}
