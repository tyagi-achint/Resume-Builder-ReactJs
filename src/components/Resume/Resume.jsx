// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./style.css";

// export default function Resume() {
//   const navigate = useNavigate();

//   const [personalInfo, setPersonalInfo] = useState({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     currentPlace: "",
//     personalLink: "",
//     githubLink: "",
//     linkedinLink: "",
//     twitterLink: "",
//   });

//   const [educations, setEducations] = useState([
//     {
//       institution: "",
//       startYear: "",
//       endYear: "",
//       qualification: "",
//       grade: "",
//       achievement: "",
//     },
//   ]);

//   const [experiences, setExperiences] = useState([
//     {
//       organization: "",
//       duration: "",
//       description: "",
//       skills: "",
//     },
//   ]);

//   const [projects, setProjects] = useState([
//     {
//       title: "",
//       skills: "",
//       description: "",
//       link: "",
//     },
//   ]);

//   const [skills, setSkills] = useState([""]);

//   useEffect(() => {
//     const personalData = localStorage.getItem("personalInfoData");
//     if (personalData) {
//       setPersonalInfo(JSON.parse(personalData));
//     }

//     const educationData = localStorage.getItem("educationInfoData");
//     if (educationData) {
//       setEducations(JSON.parse(educationData));
//     }

//     const experienceData = localStorage.getItem("experienceInfoData");
//     if (experienceData) {
//       setExperiences(JSON.parse(experienceData));
//     }

//     const projectData = localStorage.getItem("projectInfoData");
//     if (projectData) {
//       setProjects(JSON.parse(projectData));
//     }

//     const skillsData = localStorage.getItem("skillsInfoData");
//     if (skillsData) {
//       setSkills(JSON.parse(skillsData));
//     }
//   }, []);

//   const handleDownload = () => {
//     const resumeContent = `
// Full Name: ${personalInfo.fullName}
// Email: ${personalInfo.email}
// Phone: ${personalInfo.phoneNumber}
// Location: ${personalInfo.currentPlace}
// Personal Link: ${personalInfo.personalLink}
// GitHub: ${personalInfo.githubLink}
// LinkedIn: ${personalInfo.linkedinLink}
// Twitter: ${personalInfo.twitterLink}

// Education:
// ${educations
//   .map(
//     (education, index) =>
//       `${index + 1}. ${education.qualification} at ${education.institution}, ${
//         education.startYear
//       } - ${education.endYear}, ${education.grade}${
//         education.achievement ? `, ${education.achievement}` : ""
//       }`
//   )
//   .join("\n")}

// Experience:
// ${experiences
//   .map(
//     (experience, index) =>
//       `${index + 1}. ${experience.duration} at ${experience.organization}, ${
//         experience.description
//       }, Skills: ${experience.skills}`
//   )
//   .join("\n")}

// Projects:
// ${projects
//   .map(
//     (project, index) =>
//       `${index + 1}. ${project.title}, ${project.description}, Skills: ${
//         project.skills
//       }, Link: ${project.link || "N/A"}`
//   )
//   .join("\n")}

// Skills:
// ${skills.join(", ")}`;

//     const blob = new Blob([resumeContent], { type: "text/plain" });

//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <>
//       <div id="resume">
//         <div>
//           <button className="btn" onClick={handleBack}>
//             Back <i className="fa-solid fa-left-long" />
//           </button>
//         </div>
//         <div>
//           <button className="btn" onClick={handleDownload}>
//             Download Resume <i className="fa-solid fa-download" />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// import React from "react";
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// import { PDFViewer } from "@react-pdf/renderer";

// // Create styles

// export default function Resume() {
//   const styles = StyleSheet.create({
//     page: {
//       flexDirection: "row",
//       backgroundColor: "#E4E4E4",
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1,
//     },
//   });

//   // Create Document Component
//   const MyDocument = () => (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>Section #1</Text>
//         </View>
//         <View style={styles.section}>
//           <Text>Section #2</Text>
//         </View>
//       </Page>
//     </Document>
//   );

//   return (
//     <div style={{ height: "100vh" }}>
//       <PDFViewer style={{ width: "100%", height: "100%" }}>
//         <MyDocument />
//       </PDFViewer>
//     </div>
//   );
// }
