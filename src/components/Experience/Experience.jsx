import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagefeed from "../Pagefeed/Pagefeed";
import "./style.css";
import Clearall from "../Clearall/Clearall";

export default function ExperienceInfo(props) {
  const pageName = props.currentPage;
  const navigate = useNavigate();

  const [experiences, setExperiences] = useState([
    {
      organization: "",
      duration: "",
      description: "",
      skills: "",
    },
  ]);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [name]: value,
    };
    setExperiences(updatedExperiences);
  };

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        organization: "",
        duration: "",
        description: "",
        skills: "",
      },
    ]);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("experienceInfoData");
    if (savedData) {
      setExperiences(JSON.parse(savedData));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("experienceInfoData", JSON.stringify(experiences));
    navigate("/projects");
  };

  const handleBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  const clearForm = () => {
    localStorage.removeItem("experienceInfoData");
    setExperiences([
      {
        organization: "",
        duration: "",
        description: "",
        skills: "",
      },
    ]);
  };

  return (
    <>
      <Link to="/" className="backHome btn">
        Home
      </Link>
      <Clearall />
      <Pagefeed currentPage={pageName} />
      <div id="experienceInfo">
        <h1 className="currentPage">{pageName} Information </h1>

        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            {experiences.map((experience, index) => (
              <div key={index}>
                <label>
                  <i className="fa-solid fa-building"></i>
                </label>
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization"
                  value={experience.organization}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                />

                <label>
                  <i className="fa-solid fa-calendar"></i>
                </label>
                <input
                  type="text"
                  name="duration"
                  placeholder="Duration"
                  value={experience.duration}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                />

                <label>
                  <i className="fa-solid fa-align-left"></i>
                </label>
                <input
                  name="description"
                  placeholder="Short description"
                  value={experience.description}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                ></input>

                <label>
                  <i className="fa-solid fa-tools"></i>
                </label>
                <input
                  type="text"
                  name="skills"
                  placeholder="Skills"
                  value={experience.skills}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                />
              </div>
            ))}

            <div style={{ justifySelf: "center" }}>
              <button className="btn addForm" onClick={handleAddExperience}>
                Add Experience
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
