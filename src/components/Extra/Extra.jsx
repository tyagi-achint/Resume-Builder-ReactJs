import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagefeed from "../Pagefeed/Pagefeed";
import "./style.css";
import Clearall from "../Clearall/Clearall";

export default function Extra(props) {
  const pageName = props.currentPage;

  const [input, setInput] = useState({
    objective: "",
    personalSkills: ["", "", "", ""],
    hobbies: ["", "", "", ""],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("extraInfoData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setInput({
        objective: parsedData.objective || "",
        personalSkills: parsedData.personalSkills || ["", "", "", ""],
        hobbies: parsedData.hobbies || ["", "", "", ""],
      });
    }
  }, []);

  const handleInput = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setInput((prevInput) => {
      const updatedInput = { ...prevInput };
      if (Array.isArray(updatedInput[inputName])) {
        updatedInput[inputName] = (updatedInput[inputName] || []).map(
          (item, i) =>
            i === parseInt(event.target.dataset.index) ? inputValue : item
        );
      } else {
        updatedInput[inputName] = inputValue;
      }
      return updatedInput;
    });
  };

  const handleSave = (event) => {
    event.preventDefault();
    localStorage.setItem("extraInfoData", JSON.stringify(input));
    navigate("/resume");
  };

  const clearForm = () => {
    localStorage.removeItem("extraInfoData");
    setInput({
      objective: "",
      personalSkills: ["", "", "", ""],
      hobbies: ["", "", "", ""],
    });
  };

  const handleBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <Link to="/" className="backHome btn">
        Home
      </Link>
      <Clearall />
      <Pagefeed currentPage={pageName} />
      <div id="extraInfo">
        <h1 className="currentPage">{pageName} Information </h1>

        <div className="formDivExtra">
          <form onSubmit={handleSave}>
            <div className="input-block">
              <textarea
                name="objective"
                value={input.objective}
                onChange={handleInput}
                rows="4"
                placeholder=""
                style={{ resize: "none" }}
                required
              />
              <span className="placeholder">
                <i className="fa-solid fa-bullseye" />
                Objective
              </span>
            </div>

            {input.personalSkills.map((skill, index) => (
              <div className="input-block input-word" key={index}>
                <input
                  type="text"
                  name="personalSkills"
                  data-index={index}
                  value={skill}
                  placeholder=""
                  onChange={handleInput}
                  required
                />
                <span className="placeholder">Personal Skill</span>
              </div>
            ))}

            {input.hobbies.map((hobby, index) => (
              <div className="input-block input-word" key={index}>
                <input
                  type="text"
                  name="hobbies"
                  data-index={index}
                  value={hobby}
                  placeholder=""
                  onChange={handleInput}
                  required
                />
                <span className="placeholder">Interest</span>
              </div>
            ))}

            <div className="divButton">
              <button className="btn btnBack" onClick={handleBack}>
                Back <i className="fa-solid fa-left-long" />
              </button>

              <button className="btn btnNext" type="submit">
                Next <i className="fa-solid fa-right-long" />
              </button>
            </div>
          </form>
          <button className="btn clearBtn" onClick={clearForm}>
            Clear Page
          </button>
        </div>
      </div>
    </>
  );
}
