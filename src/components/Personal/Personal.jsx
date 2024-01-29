import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagefeed from "../Pagefeed/Pagefeed";
import "./style.css";
import Clearall from "../Clearall/Clearall";
import ImageAbove, { ImageBelow } from "../Image/Images";

export default function PersonalInfo(props) {
  const pageName = props.currentPage;

  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    currentPlace: "",
    personalLink: "",
    githubLink: "",
    linkedinLink: "",
    twitterLink: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("personalInfoData");
    if (savedData) {
      setInput(JSON.parse(savedData));
    }
  }, []);

  const handleInput = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setInput({ ...input, [inputName]: inputValue });
  };

  const handleSave = (event) => {
    event.preventDefault();
    localStorage.setItem("personalInfoData", JSON.stringify(input));
    navigate("/education");
  };

  const clearForm = () => {
    localStorage.removeItem("personalInfoData");
    setInput({
      fullName: "",
      email: "",
      phoneNumber: "",
      currentPlace: "",
      personalLink: "",
      githubLink: "",
      linkedinLink: "",
      twitterLink: "",
    });
  };
  return (
    <>
      <Clearall />
      <Pagefeed currentPage={pageName} />
      <div id="personalInfo">
        <Link to="/" className="backHome btn">
          Home
        </Link>
        <div className="aboveForm">
          <h1 className="currentPage">{pageName} Information</h1>
          <ImageAbove />
        </div>

        <div className="formDiv">
          <form onSubmit={handleSave}>
            <div>
              <label htmlFor="fullName">
                <i className="fa-solid fa-user" />
              </label>
              <input
                type="text"
                name="fullName"
                value={input.fullName}
                onChange={handleInput}
                placeholder="Full Name"
                required
              />
              <label htmlFor="email">
                <i className="fa-solid fa-envelope" />
              </label>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleInput}
                placeholder="Email"
                required
              />
              <label htmlFor="phoneNumber">
                <i className="fa-solid fa-mobile-screen" />
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={handleInput}
                placeholder="Phone(+country code)"
              />
              <label htmlFor="currentPlace">
                <i className="fa-solid fa-location-dot" />
              </label>
              <input
                type="text"
                name="currentPlace"
                value={input.currentPlace}
                onChange={handleInput}
                placeholder="City, State"
              />
            </div>
            <div>
              <label htmlFor="personalLink">
                <i className="fa-solid fa-link" />
              </label>
              <input
                type="text"
                name="personalLink"
                value={input.personalLink}
                onChange={handleInput}
                placeholder="Personal Website 🔗"
              />
              <label htmlFor="githubLink">
                <i className="fa-brands fa-github"></i>
              </label>
              <input
                type="text"
                name="githubLink"
                value={input.githubLink}
                onChange={handleInput}
                placeholder="Github 🔗"
              />
              <label htmlFor="linkedinLink">
                <i className="fa-brands fa-linkedin" />
              </label>
              <input
                type="text"
                name="linkedinLink"
                value={input.linkedinLink}
                onChange={handleInput}
                placeholder="LinkedIn 🔗"
              />
              <label htmlFor="twitterLink">
                <i className="fa-brands fa-square-twitter" />
              </label>
              <input
                type="text"
                name="twitterLink"
                value={input.twitterLink}
                onChange={handleInput}
                placeholder="Twitter 🔗"
              />
            </div>
            <div></div>
            <button className="btn btnNext" type="submit">
              Next <i className="fa-solid fa-right-long" />
            </button>
          </form>
          <div className="belowForm">
            <button className="btn clearBtn" onClick={clearForm}>
              Clear Page
            </button>
            <ImageBelow />
          </div>
        </div>
      </div>
    </>
  );
}
