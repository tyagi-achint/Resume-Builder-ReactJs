import React, { forwardRef } from "react";
import "./firstResume.css";

const firstResume = forwardRef(
  (
    { personalData, educationData, skillsData, experienceData, projectData },
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
          <div className="education">
            <h2>Education</h2>
            {Object.keys(educationData).map((key) => {
              const edu = educationData[key];
              return (
                <div key={key} className="education-item">
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
              );
            })}
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <ul>
              {Object.keys(skillsData).map((key) => (
                <li key={key}>{skillsData[key]}</li>
              ))}
            </ul>
          </div>

          <div className="hobbies">
            <h2>Hobbies</h2>
            <ul>
              <li>one</li>
              <li>two</li>
              <li>third</li>
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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              quasi doloremque aliquam eos laudantium dolores facere maxime
              omnis pariatur accusamus.
            </p>
          </div>
          <div className="experience">
            <h2>Experience</h2>
            {Array.isArray(experienceData) ? (
              experienceData.map((experience, index) => (
                <div style={{ width: "100%" }}>
                  <div key={index} className="company">
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
              <div style={{ width: "100%" }}>
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
                <div style={{ width: "100%" }}>
                  <div key={index} className="company">
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
              <div style={{ width: "100%" }}>
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
