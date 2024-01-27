import { useNavigate } from "react-router-dom";
import "./style.css";
import {
  Document,
  PDFViewer,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";

export default function Resume() {
  const [personalData, setPersonalData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState({});
  const [projectData, setProjectData] = useState({});
  const [skillsData, setSkillsData] = useState({});

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

  const handleDownload = () => {};

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "white",
    },
    section: {
      margin: 5,
      padding: 5,
      flexGrow: 1,
    },
  });

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text
            style={{ backgroundColor: "red" }}
          >{`Full Name: ${personalData.fullName}`}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <div style={{ height: "75dvh", width: "80dvw", margin: "10px auto" }}>
        <PDFViewer style={{ width: "100%", height: "100%" }}>
          <MyDocument />
        </PDFViewer>
      </div>
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
    </>
  );
}
