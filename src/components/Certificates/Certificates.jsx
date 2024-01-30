import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagefeed from "../Pagefeed/Pagefeed";
import "./style.css";
import Clearall from "../Clearall/Clearall";
import ImageAbove, { ImageBelow } from "../Image/Images";

export default function CertificateInfo(props) {
  const pageName = props.currentPage;
  const navigate = useNavigate();

  const [certificates, setCertificates] = useState([
    {
      certificateName: "",
      certificateBy: "",
      completedDate: "",
    },
  ]);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedCertificates = [...certificates];
    updatedCertificates[index] = {
      ...updatedCertificates[index],
      [name]: value,
    };
    setCertificates(updatedCertificates);
  };

  const handleAddCertificate = (event) => {
    event.preventDefault();
    setCertificates([
      ...certificates,
      {
        certificateName: "",
        certificateBy: "",
        completedDate: "",
      },
    ]);
  };
  const handleDeleteCertificates = (index) => {
    const updatedCertificates = [...certificates];
    updatedCertificates.splice(index, 1);
    setCertificates(updatedCertificates);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("certificateInfoData");
    if (savedData) {
      setCertificates(JSON.parse(savedData));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("certificateInfoData", JSON.stringify(certificates));
    navigate("/skills");
  };

  const handleBack = (event) => {
    event.preventDefault();
    localStorage.setItem("certificateInfoData", JSON.stringify(certificates));
    navigate(-1);
  };

  const clearForm = () => {
    localStorage.removeItem("certificateInfoData");
    setCertificates([
      {
        certificateName: "",
        certificateBy: "",
        completedDate: "",
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
      <div id="certificatesInfo">
        <div className="aboveForm">
          <h1 className="currentPage">{pageName} Information</h1>
          <ImageAbove />
        </div>

        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            {certificates.map((certificate, index) => (
              <div key={index}>
                <label>
                  <i class="fa-solid fa-file-circle-check"></i>
                </label>
                <input
                  type="text"
                  name="certificateName"
                  placeholder="Certificate Name"
                  value={certificate.certificateName}
                  onChange={(e) => handleInputChange(e, index)}
                />

                <label>
                  <i class="fa-solid fa-file-export"></i>
                </label>
                <input
                  type="text"
                  name="certificateBy"
                  placeholder="Certificate From"
                  value={certificate.certificateBy}
                  onChange={(e) => handleInputChange(e, index)}
                />

                <label>
                  <i class="fa-solid fa-calendar"></i>
                </label>
                <input
                  type="text"
                  name="completedDate"
                  placeholder="Completed Date"
                  value={certificate.completedDate}
                  onChange={(e) => handleInputChange(e, index)}
                />
                {certificates.length > 1 && (
                  <button
                    className="btn deleteForm"
                    onClick={() => handleDeleteCertificates(index)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}

            <div style={{ justifySelf: "center" }}>
              <button className="btn addForm" onClick={handleAddCertificate}>
                Add Certificate
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
