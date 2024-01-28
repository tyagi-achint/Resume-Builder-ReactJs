import { useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import ResumeContent from "./firstResume";
import html2pdf from "html2pdf.js";

export default function Resume() {
  const [personalData, setPersonalData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState({});
  const [projectData, setProjectData] = useState({});
  const [skillsData, setSkillsData] = useState({});
  const navigate = useNavigate();
  const resumeContentRef = useRef(null);

  useEffect(() => {
    const fetchData = () => {
      const storedPersonalData = localStorage.getItem("personalInfoData");
      setPersonalData(JSON.parse(storedPersonalData) || {});

      const storedEducationData = localStorage.getItem("educationInfoData");
      setEducationData(JSON.parse(storedEducationData) || {});

      const storedExperienceData = localStorage.getItem("experienceInfoData");
      setExperienceData(JSON.parse(storedExperienceData) || {});

      const storedProjectData = localStorage.getItem("projectInfoData");
      setProjectData(JSON.parse(storedProjectData) || {});

      const storedSkillsData = localStorage.getItem("skillsInfoData");
      setSkillsData(JSON.parse(storedSkillsData) || {});
    };

    fetchData();
  }, []);

  const handleDownload = () => {
    const element = resumeContentRef.current;

    if (element) {
      const options = {
        margin: 0,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, logging: true, scrollY: 0 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf(element, options);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div id="resume">
        <div>
          <button className="btn" onClick={handleBack}>
            Back <i className="fa-solid fa-left-long" />
          </button>
        </div>
        <div>
          <button className="btn" onClick={handleDownload}>
            Download Resume <i className="fa-solid fa-download" />
          </button>
        </div>
      </div>
      <div
        style={{
          overflowY: "auto",
          width: "803px",
          height: "300px",
          margin: "auto",
        }}
      >
        <ResumeContent
          ref={resumeContentRef}
          personalData={personalData}
          educationData={educationData}
          skillsData={skillsData}
          experienceData={experienceData}
          projectData={projectData}
        />
      </div>
    </>
  );
}
