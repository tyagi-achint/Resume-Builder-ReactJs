import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagefeed from "../Pagefeed/Pagefeed";
import "./style.css";
import Clearall from "../Clearall/Clearall";
import ImageAbove, { ImageBelow } from "../Image/Images";

export default function EducationInfo(props) {
  const pageName = props.currentPage;
  const navigate = useNavigate();

  const [educations, setEducations] = useState([
    {
      institution: "",
      startYear: "",
      endYear: "",
      qualification: "",
      grade: "",
      achievement: "",
    },
  ]);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedEducations = [...educations];
    updatedEducations[index] = {
      ...updatedEducations[index],
      [name]: value,
    };
    setEducations(updatedEducations);
  };

  const handleAddEducation = (event) => {
    event.preventDefault();
    setEducations([
      ...educations,
      {
        institution: "",
        startYear: "",
        endYear: "",
        qualification: "",
        grade: "",
        achievement: "",
      },
    ]);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("educationInfoData");
    if (savedData) {
      setEducations(JSON.parse(savedData));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("educationInfoData", JSON.stringify(educations));
    navigate("/experience");
  };

  const handleBack = (event) => {
    event.preventDefault();
    localStorage.setItem("educationInfoData", JSON.stringify(educations));
    navigate(-1);
  };

  const clearForm = () => {
    localStorage.removeItem("educationInfoData");
    setEducations([
      {
        institution: "",
        startYear: "",
        endYear: "",
        qualification: "",
        grade: "",
        achievement: "",
      },
    ]);
  };
  const handleDeleteEducation = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  return (
    <>
      <Link to="/" className="backHome btn">
        Home
      </Link>
      <Clearall />
      <Pagefeed currentPage={pageName} />
      <div id="educationInfo">
        <div className="aboveForm">
          <h1 className="currentPage">{pageName} Information</h1>
          <ImageAbove />
        </div>

        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            {educations.map((education, index) => (
              <div key={index}>
                <label>
                  <i class="fa-solid fa-school"></i>
                </label>
                <input
                  type="text"
                  name="institution"
                  placeholder="Institution"
                  value={education.institution}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                />

                <label>
                  <i class="fa-solid fa-calendar-plus"></i>
                </label>
                <input
                  type="text"
                  name="startYear"
                  maxLength="4"
                  placeholder="Start Year"
                  value={education.startYear}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                />

                <label>
                  <i class="fa-solid fa-calendar-check"></i>
                </label>
                <input
                  type="text"
                  name="endYear"
                  placeholder="End Year"
                  maxLength="4"
                  value={education.endYear}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                />

                <label>
                  <i class="fa-solid fa-user-graduate"></i>
                </label>
                <input
                  type="text"
                  name="qualification"
                  placeholder="Qualification"
                  value={education.qualification}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                />

                <label>
                  <i class="fa-solid fa-file"></i>
                </label>
                <input
                  type="text"
                  name="grade"
                  placeholder="Grade/CGPA/Percentage"
                  value={education.grade}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                />

                <label>
                  <i class="fa-solid fa-trophy"></i>
                </label>
                <input
                  type="text"
                  name="achievement"
                  placeholder="Achievemnt (if any)"
                  value={education.achievement}
                  onChange={(e) => handleInputChange(e, index)}
                />
                {educations.length > 1 && (
                  <button
                    className="btn deleteForm"
                    onClick={() => handleDeleteEducation(index)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}

            <div style={{ justifySelf: "center" }}>
              <button class="btn addForm" onClick={handleAddEducation}>
                Add Education
              </button>
            </div>

            <button className="btn btnBack" onClick={handleBack}>
              Back <i className="fa-solid fa-left-long" />
            </button>

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
