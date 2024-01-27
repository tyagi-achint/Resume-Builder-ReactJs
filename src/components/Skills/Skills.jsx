import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagefeed from "../Pagefeed/Pagefeed";
import "./style.css";
import Clearall from "../Clearall/Clearall";

export default function SkillsInfo(props) {
  const pageName = props.currentPage;
  const navigate = useNavigate();

  const [skills, setSkills] = useState([""]);

  const handleInputChange = (event, index) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = event.target.value;
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("skillsInfoData");
    if (savedData) {
      setSkills(JSON.parse(savedData));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("skillsInfoData", JSON.stringify(skills));
    navigate("/resume");
  };

  const handleBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  const clearForm = () => {
    localStorage.removeItem("skillsInfoData");
    setSkills([""]);
  };

  return (
    <>
      <Clearall />
      <Pagefeed currentPage={pageName} />
      <div id="skillsInfo">
        <h1 className="currentPage">{pageName} Information </h1>

        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            {skills.map((skill, index) => (
              <div key={index}>
                <label>
                  <i className="fa-solid fa-tools"></i>
                </label>
                <input
                  type="text"
                  name={`skill${index + 1}`}
                  placeholder="Skill"
                  value={skill}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                />
              </div>
            ))}

            <div style={{ justifySelf: "center" }}>
              <button className="btn addForm" onClick={handleAddSkill}>
                Add Skill
              </button>
            </div>

            <button className="btn btnBack" onClick={handleBack}>
              Back <i className="fa-solid fa-left-long" />
            </button>

            <button className="btn btnNext" type="submit">
              Next <i className="fa-solid fa-right-long" />
            </button>
          </form>
          <button className="btn clearBtn" onClick={clearForm}>
            Clear Page
          </button>
        </div>
      </div>
    </>
  );
}
