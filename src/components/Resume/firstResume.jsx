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
      certificatesData,
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
                    <h3>{edu.institution || "_"}</h3>
                    <span>{edu.grade || "_"}</span>
                  </div>
                  <div className="secondEdu">
                    <h3>{edu.qualification || "_"}</h3>
                    <span>
                      {edu.startYear} - {edu.endYear || "_"}
                    </span>
                  </div>
                  <span>{edu.achievement || "_"}</span>
                </div>
              ))
            ) : (
              <div key="single-education" className="education-item">
                <div className="firstEdu">
                  <h3>{educationData.institution || "_"}</h3>
                  <span>{educationData.grade || "_"}</span>
                </div>
                <div className="secondEdu">
                  <h3>{educationData.qualification || "_"}</h3>
                  <span>
                    {educationData.startYear} - {educationData.endYear || "_"}
                  </span>
                </div>
                <span>{educationData.achievement || "_"}</span>
              </div>
            )}
          </div>

          <div className="subFirstDiv">
            <h2>Skills</h2>
            <ul>
              {Object.keys(skillsData).map((key) => (
                <li key={key}>{skillsData[key] || "_"}</li>
              ))}
            </ul>
          </div>

          <div className="subFirstDiv">
            <h2>Personal Skills</h2>
            <ul>
              {extraData?.personalSkills?.map((skill, index) => (
                <li key={index}>{skill || "_"}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="second section-padding">
          <div className="contact-social">
            {personalData.personalLink && (
              <div className="social-item">
                <i className="fa-solid fa-link" />
                <a href={personalData.personalLink} target="_black">
                  {personalData.personalLink}
                </a>
              </div>
            )}
            {personalData.linkedinLink && (
              <div className="social-item">
                <i className="fa-brands fa-linkedin" />
                <a href={personalData.linkedinLink}>
                  {personalData.linkedinLink}
                </a>
              </div>
            )}
            {personalData.githubLink && (
              <div className="social-item">
                <i className="fa-brands fa-square-github" />
                <a href={personalData.githubLink} target="_black">
                  {personalData.githubLink}
                </a>
              </div>
            )}
            {personalData.twitterLink && (
              <div className="social-item">
                <i className="fa-brands fa-square-twitter" />
                <a href={personalData.twitterLink} target="_black">
                  {personalData.twitterLink}
                </a>
              </div>
            )}
          </div>
          <div className="resume-objective">
            <p>{extraData.objective || "_"}</p>
          </div>
          {Array.isArray(experienceData) &&
            experienceData.length > 0 &&
            experienceData.some((item) =>
              Object.values(item).some((value) => value.trim() !== "")
            ) && (
              <div className="experience">
                <h2>Experience</h2>
                {experienceData.map((experience, index) => (
                  <div key={index} style={{ width: "100%" }}>
                    <div className="company">
                      <div className="title">
                        {experience.organization || "_"}
                      </div>
                      <div className="time">{experience.duration || "_"}</div>
                    </div>
                    <div className="job-wrapper">
                      <div className="title">{experience.skills || "_"}</div>
                      <div>{experience.description || "_"}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          <div className="projects">
            <h2>Projects</h2>
            {Array.isArray(projectData) ? (
              projectData.map((project, index) => (
                <div key={index} style={{ width: "100%" }}>
                  <div className="company">
                    <div className="title">{project.title || "_"}</div>
                    <div>{project.skills || "_"}</div>
                  </div>
                  <div className="job-wrapper">
                    <div className="title">
                      <a href={project.link || "#"}>{project.link || "_"}</a>
                    </div>
                    <div>{project.description || "_"}</div>
                  </div>
                </div>
              ))
            ) : (
              <div key="single-project" style={{ width: "100%" }}>
                <div className="company">
                  <div className="title">{projectData.title || "_"}</div>
                  <div>{projectData.skills || "_"}</div>
                </div>
                <div className="job-wrapper">
                  <div className="title">
                    <a href={projectData.link || "#"}>
                      {projectData.link || "_"}
                    </a>
                  </div>
                  <div>{projectData.description || "_"}</div>
                </div>
              </div>
            )}
          </div>

          {Array.isArray(certificatesData) &&
            certificatesData.length > 0 &&
            certificatesData.some((item) =>
              Object.values(item).some((value) => value.trim() !== "")
            ) && (
              <div className="certificates">
                <h2>Certificates</h2>
                {certificatesData.map((certificate, index) => (
                  <div key={index} className="certificate-item">
                    <div className="title">
                      {certificate.certificateName || "_"}
                    </div>
                    <div className="title">
                      {certificate.certificateBy || "_"}
                    </div>
                    <div className="title">
                      <div>{certificate.completedDate || "_"}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          <div className="interests">
            <h2>Interests</h2>
            <div>
              {extraData?.hobbies
                ?.filter((hobby) => hobby.trim() !== "")
                .map((hobby, index) => (
                  <h4 key={index}>{hobby}</h4>
                ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
);

export default firstResume;
