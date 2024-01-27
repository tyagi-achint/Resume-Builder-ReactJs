import React from "react";
import { Link } from "react-router-dom";
import Pagefeed from "../Pagefeed/Pagefeed";
import "./style.css";

export default function PersonalInfo(props) {
  return (
    <>
      <Pagefeed currentPage={props.currentPage} />
      <div id="personalInfo">
        <Link to="/" className="backHome btn">
          Home
        </Link>
        <h1 className="currentPage">{props.currentPage} Information </h1>

        <div className="formDiv">
          <form>
            <div>
              <label htmlFor="fullName">
                <i className="fa-solid fa-user" />
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
              />
              <label htmlFor="email">
                <i className="fa-solid fa-envelope" />
              </label>
              <input type="email" name="email" placeholder="Email" required />
              <label htmlFor="phoneNumber">
                <i className="fa-solid fa-mobile-screen" />
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone(+country code)"
              />
              <label htmlFor="currentPlace">
                <i className="fa-solid fa-location-dot" />
              </label>
              <input
                type="text"
                name="currentPlace"
                placeholder="City, State"
              />
            </div>
            <div>
              <label htmlFor="personalLink">
                <i className="fa-solid fa-link" />
              </label>
              <input
                type="url"
                name="personalLink"
                placeholder="Personal Website 🔗"
              />
              <label htmlFor="githubLink">
                <i className="fa-brands fa-github"></i>
              </label>
              <input type="url" name="githubLink" placeholder="Github 🔗" />
              <label htmlFor="linkedinLink">
                <i className="fa-brands fa-linkedin" />
              </label>
              <input type="url" name="linkedinLink" placeholder="LinkedIn 🔗" />
              <label htmlFor="twitterLink">
                <i className="fa-brands fa-square-twitter" />
              </label>
              <input type="url" name="twitterLink" placeholder="Twitter 🔗" />
            </div>
            <button className="btn" type="submit">
              Next <i className="fa-solid fa-right-long" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
