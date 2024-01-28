import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagefeed from "../Pagefeed/Pagefeed";
import "./style.css";
import Clearall from "../Clearall/Clearall";

export default function ProjectInfo(props) {
  const pageName = props.currentPage;
  const navigate = useNavigate();

  const [projects, setProjects] = useState([
    {
      title: "",
      skills: "",
      description: "",
      link: "",
    },
  ]);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [name]: value,
    };
    setProjects(updatedProjects);
  };

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        title: "",
        skills: "",
        description: "",
        link: "",
      },
    ]);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("projectInfoData");
    if (savedData) {
      setProjects(JSON.parse(savedData));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("projectInfoData", JSON.stringify(projects));
    navigate("/skills");
  };

  const handleBack = (event) => {
    event.preventDefault();
    localStorage.setItem("projectInfoData", JSON.stringify(projects));

    navigate(-1);
  };

  const clearForm = () => {
    localStorage.removeItem("projectInfoData");
    setProjects([
      {
        title: "",
        skills: "",
        description: "",
        link: "",
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
      <div id="projectsInfo">
        <h1 className="currentPage">{pageName} Information </h1>

        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            {projects.map((project, index) => (
              <div key={index}>
                <label>
                  <i className="fa-solid fa-file-alt"></i>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={project.title}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                />

                <label>
                  <i className="fa-solid fa-tools"></i>
                </label>
                <input
                  type="text"
                  name="skills"
                  placeholder="Skills"
                  value={project.skills}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                />

                <label>
                  <i className="fa-solid fa-align-left"></i>
                </label>
                <input
                  name="description"
                  placeholder="Short description"
                  value={project.description}
                  onChange={(e) => handleInputChange(e, index)}
                  required
                ></input>

                <label>
                  <i className="fa-solid fa-link"></i>
                </label>
                <input
                  type="text"
                  name="link"
                  placeholder="Link (optional)"
                  value={project.link}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </div>
            ))}

            <div style={{ justifySelf: "center" }}>
              <button className="btn addForm" onClick={handleAddProject}>
                Add Project
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
