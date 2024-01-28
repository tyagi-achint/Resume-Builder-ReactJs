import React, { forwardRef } from "react";
import "./firstResume.css";

const firstResume = forwardRef(
  (
    {
      personalData,
      educationData,
      skillsData,
      experienceData,
      projectData,
      extraData,
    },
    ref
  ) => {
    return (
      <div ref={ref} style={{ height: "1122px" }}>
        <section className="first section-padding">
          <div className="name">
            <div className="circle-resume"></div>
            <h1 className="name-wrapper">{personalData.fullName}</h1>
          </div>
          <div className="contact-info">
            <ul className="list-titles">
              <li>
                <i className="fa-solid fa-location-dot" />
              </li>
              <li>
                <i className="fa-solid fa-mobile" />
              </li>
              <li>
                <i className="fa-solid fa-envelope" />
              </li>
            </ul>
            <ul className="list-content">
              <li>{personalData.currentPlace}</li>
              <li>{personalData.phoneNumber}</li>
              <li>{personalData.email}</li>
            </ul>
          </div>
          <div className="subFirstDiv">
            <h2>Education</h2>
            {Array.isArray(educationData) ? (
              educationData.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="firstEdu">
                    <h3>{edu.institution}</h3>
                    <span>{edu.grade}</span>
                  </div>
                  <div className="secondEdu">
                    <h3>{edu.qualification}</h3>
                    <span>
                      {edu.startYear} - {edu.endYear}
                    </span>
                  </div>
                  <span>{edu.achievement}</span>
                </div>
              ))
            ) : (
              <div key="single-education" className="education-item">
                <div className="firstEdu">
                  <h3>{educationData.institution}</h3>
                  <span>{educationData.grade}</span>
                </div>
                <div className="secondEdu">
                  <h3>{educationData.qualification}</h3>
                  <span>
                    {educationData.startYear} - {educationData.endYear}
                  </span>
                </div>
                <span>{educationData.achievement}</span>
              </div>
            )}
          </div>

          <div className="subFirstDiv">
            <h2>Skills</h2>
            <ul>
              {Object.keys(skillsData).map((key) => (
                <li key={key}>{skillsData[key]}</li>
              ))}
            </ul>
          </div>

          <div className="subFirstDiv">
            <h2>Interests</h2>
            <ul>
              {extraData?.hobbies?.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
          <div className="subFirstDiv">
            <h2>Personal Skills</h2>
            <ul>
              {extraData?.personalSkills?.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="second section-padding">
          <div className="contact-social">
            <div className="social-item">
              <i className="fa-solid fa-link" />
              <a href={personalData.personalLink} target="_black">
                @janderson
              </a>
            </div>
            <div className="social-item">
              <i className="fa-brands fa-linkedin" />
              <a href={personalData.linkedinLink}>janderson</a>
            </div>
            <div className="social-item">
              <i className="fa-brands fa-square-github" />
              <a href={personalData.githubLink} target="_black">
                janderson
              </a>
            </div>
            <div className="social-item">
              <i className="fa-brands fa-square-twitter" />
              <a href={personalData.twitterLink} target="_black">
                janderson
              </a>
            </div>
          </div>
          <div className="resume-objective">
            <p>{extraData.objective}</p>
          </div>
          <div className="experience">
            <h2>Experience</h2>
            {Array.isArray(experienceData) ? (
              experienceData.map((experience, index) => (
                <div key={index} style={{ width: "100%" }}>
                  <div className="company">
                    <div className="title">{experience.organization}</div>
                    <div className="time">{experience.duration}</div>
                  </div>
                  <div className="job-wrapper">
                    <div className="title">{experience.skills}</div>
                    <div>{experience.description}</div>
                  </div>
                </div>
              ))
            ) : (
              <div key="single-experience" style={{ width: "100%" }}>
                <div className="company">
                  <div className="title">{experienceData.organization}</div>
                  <div className="time">{experienceData.duration}</div>
                </div>
                <div className="job-wrapper">
                  <div className="title">{experienceData.title}</div>
                  <div>{experienceData.description}</div>
                </div>
              </div>
            )}
          </div>

          <div className="projects">
            <h2>Projects</h2>
            {Array.isArray(projectData) ? (
              projectData.map((project, index) => (
                <div key={index} style={{ width: "100%" }}>
                  <div className="company">
                    <div className="title">{project.title}</div>
                    <div>{project.skills}</div>
                  </div>
                  <div className="job-wrapper">
                    <div className="title">
                      <a href={project.link}>{project.link || "Link"}</a>
                    </div>
                    <div>{project.description}</div>
                  </div>
                </div>
              ))
            ) : (
              <div key="single-project" style={{ width: "100%" }}>
                <div className="company">
                  <div className="title">{projectData.title}</div>
                  <div>{projectData.skills}</div>
                </div>
                <div className="job-wrapper">
                  <div className="title">
                    <a href={projectData.link}>{projectData.link || "Link"}</a>
                  </div>
                  <div>{projectData.description}</div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
);

export default firstResume;
