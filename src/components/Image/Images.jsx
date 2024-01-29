import React from "react";
import aboveFormImage from "./aboveForm.png";
import belowFormImage from "./belowForm.png";
import homeImage from "./homeImage.png";

export default function ImageAbove() {
  return (
    <>
      <img className="imageFirst" src={aboveFormImage} alt="Above Form" />
    </>
  );
}

export function ImageBelow() {
  return (
    <>
      <img className="imageSecond" src={belowFormImage} alt="Below Form" />
    </>
  );
}

export function ImageHome() {
  return (
    <>
      <img className="homeImage" src={homeImage} alt="Home" />
    </>
  );
}
