import React from "react";
import { Link } from "react-router-dom";

export default function PersonalInfo(props) {
  return (
    <div id="personalInfo">
      <Link to="/" className="backHome btn">
        Home
      </Link>
      <div className="formDiv">
        <h4 className="currentPage">{props.currentPage}</h4>

        <form action="">
          <label for="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="phoneNumber">Phone Number (with country code):</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required />

          <label for="personalLink">Personal Website Link:</label>
          <input type="url" id="personalLink" name="personalLink" />

          <label for="githubLink">GitHub Link:</label>
          <input type="url" id="githubLink" name="githubLink" />

          <label for="linkedinLink">LinkedIn Link:</label>
          <input type="url" id="linkedinLink" name="linkedinLink" />

          <label for="twitterLink">Twitter Link:</label>
          <input type="url" id="twitterLink" name="twitterLink" />

          <label for="instagramLink">Instagram Link:</label>
          <input type="url" id="instagramLink" name="instagramLink" />

          <label for="currentPlace">Current Place:</label>
          <input type="text" id="currentPlace" name="currentPlace" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
