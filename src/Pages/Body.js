import { React, useEffect, useState } from "react";
import "../App.css";
import Editor from "./Editor";

export default function Body() {
  const colors = ["#239ca2", "#48bb75", "#0bs5ea", "#a0aec0", "#ed8936"];

  const Sections = {
    BasicInfo: "Basic-Info",
    workExp: "work Experience",
    project: "Project",
    education: "Education",
    achievement: "Achievement",
    summery: "Summery",
    other: "Others",
  };

  const [resumeInformation, setResumeInformation] = useState({
    [Sections.basicInfo]: {
      id: Sections.basicInfo,
      sectionTitle: Sections.basicInfo,
      detail: {},
    },
    [Sections.workExp]: {
      id: Sections.workExp,
      sectionTitle: Sections.workExp,
      details: [],
    },
    [Sections.project]: {
      id: Sections.project,
      sectionTitle: Sections.project,
      details: [],
    },
    [Sections.education]: {
      id: Sections.education,
      sectionTitle: Sections.education,
      details: [],
    },
    [Sections.achievement]: {
      id: Sections.achievement,
      sectionTitle: Sections.achievement,
      points: [],
    },
    [Sections.summary]: {
      id: Sections.summary,
      sectionTitle: Sections.summary,
      detail: "",
    },
    [Sections.other]: {
      id: Sections.other,
      sectionTitle: Sections.other,
      detail: "",
    },
  });

  useEffect(() => {
    console.log(resumeInformation);
  }, [resumeInformation]);
  return (
    <div className="container1">
      <p className="header1">Start Making Resume</p>
      <div className="toolbar">
        <span className="colors" />
        {colors.map((item) => (
          <span
            key={item}
            style={{ backgroundColor: item }}
            className="color"
          />
        ))}
        <button style={{ marginLeft: "60%" }}>
          Download
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down"
            viewBox="0 0 16 16"
            style={{ marginLeft: "10px" }}
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            />
          </svg>
        </button>
      </div>
      <div>
        <Editor Sections={Sections} information={resumeInformation} />
        setActiveInformation={setResumeInformation}
      </div>
    </div>
  );
}
