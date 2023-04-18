import React, { useEffect, useState } from "react";
import Input from "./Input";
import "../App.css";
// import { Github } from "react-bootstrap-icons";

export default function Editor(props) {
  const { Sections, information } = props;
  const [activeSection, setActiveSection] = useState(Object.keys(Sections)[0]);

  const [activeInformation, setActiveInformation] = useState(
    information[Sections[Object.keys(Sections)[0]]]
  );

  const [activeDetailsIndex, setactiveDetailsIndex] = useState(0);

  const [sectionTitle, setSectionTitle] = useState(
    Sections[Object.keys(Sections)[0]]
  );

  const [value, setValue] = useState({
    name: activeInformation?.Details?.name || "",
    title: activeInformation?.Details?.title || "",
    linkedin: activeInformation?.Details?.linkedin || "",
    Github: activeInformation?.Details?.Github || "",
    Email: activeInformation?.Details?.Email || "",
    Phone: activeInformation?.Details?.Phone || "",
  });

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...value };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValue(tempValues);
  };

  const handleSubmmision = () => {
    // eslint-disable-next-line default-case
    switch (Sections[activeSection]) {
      case Sections.BasicInfo: {
        const tempDetails = {
          name: value.name,
          title: value.title,
          linkedin: value.linkedin,
          Github: value.Github,
          Email: value.Email,
          Phone: value.Phone,
        };

        props.setActiveInformation((prev) => ({
          ...prev,
          [Sections.BasicInfo]: {
            ...prev[Sections.BasicInfo],
            detail: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }

      case Sections.workExp: {
        const tempDetails = {
          certificateLink: value.certificateLink,
          title: value.title,
          StartDate: value.StartDate,
          EndDate: value.EndDate,
          CompanyName: value.CompanyName,
          Location: value.Location,
          points: value.points,
        };

        props.setActiveInformation((prev) => ({
          ...prev,
          [Sections.workExp]: {
            ...prev[Sections.workExp],
            detail: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }

      case Sections.project: {
        const tempDetails = {
          Link: value.Link,
          title: value.title,
          Overview: value.Overview,
          Github: value.Github,
          points: value.points,
        };

        props.setActiveInformation((prev) => ({
          ...prev,
          [Sections.project]: {
            ...prev[Sections.project],
            detail: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case Sections.education: {
        const tempDetails = {
          title: value.title,
          Collage: value.Collage,
          StartDate: value.StartDate,
          EndDate: value.EndDate,
        };

        props.setActiveInformation((prev) => ({
          ...prev,
          [Sections.education]: {
            ...prev[Sections.education],
            detail: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }

      case Sections.achievement: {
        const tempDetails = {};

        props.setActiveInformation((prev) => ({
          ...prev,
          [Sections.achievement]: {
            ...prev[Sections.achievement],
            detail: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case Sections.summery: {
        const tempDetails = {};

        props.setActiveInformation((prev) => ({
          ...prev,
          [Sections.summery]: {
            ...prev[Sections.summery],
            detail: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case Sections.other: {
        const tempDetails = {};

        props.setActiveInformation((prev) => ({
          ...prev,
          [Sections.other]: {
            ...prev[Sections.other],
            detail: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
    }
  };
  const WorkExBody = (
    <div className="Details">
      <div className="row">
        <Input
          label="Title"
          placeholder="Enter Title Eg. Frontend Developer"
          defaultValue={value.title}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, title: e.target.value }))
          }
        />

        <Input
          label="Company Name"
          placeholder="Enter Company Name Eg. Tushar.pvt.ltd"
          defaultValue={value.CompanyName}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, CompanyName: e.target.value }))
          }
        />
      </div>

      <div className="row">
        <Input
          label="Certificate Link"
          placeholder="Enter Certificate Link"
          defaultValue={value.certificateLink}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, certificateLink: e.target.value }))
          }
        />
        <Input
          label="Location"
          placeholder="Enter Location Eg. Remote"
          defaultValue={value.Location}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, Location: e.target.value }))
          }
        />
      </div>
      <div className="row">
        <Input
          label="Start Date"
          type="Date"
          placeholder=" Enter Start Date Of Your Education"
          defaultValue={value.StartDate}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, StartDate: e.target.value }))
          }
        />
        <Input
          label="End Date"
          type="Date"
          placeholder="Enter Start End Of Your Education"
          defaultValue={value.EndDate}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, EndDate: e.target.value }))
          }
        />
      </div>

      <div className="column">
        <label>Enter Your Work Experience</label>
        <Input
          placeholder="Line1"
          defaultValue={value && value.points ? value.points[0] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 0)}
        />
        <Input
          placeholder="Line2"
          defaultValue={value && value.points ? value.points[1] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 1)}
        />
        {/* <Input placeholder="Line3" /> */}
      </div>
    </div>
  );
  const ProjectBody = (
    <div className="Details">
      <div className="row">
        <Input
          label="Title"
          defaultValue={value.title}
          placeholder="Enter Title Eg. web-app"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <Input
        label="Overview"
        defaultValue={value.overview}
        placeholder="Enter basic Overview of Project"
        onChange={(e) =>
          setValue((prev) => ({ ...prev, overview: e.target.value }))
        }
      />
      <div className="row">
        <Input
          label="Deployed Link"
          defaultValue={value.DeployedLink}
          placeholder="Enter Deployed Link of project"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, DeployedLink: e.target.value }))
          }
        />
        <Input
          label="Git-Hub link"
          defaultValue={value.GithubLink}
          placeholder="Enter Git-Hub Link of Project"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, GithubLink: e.target.value }))
          }
        />
      </div>
      <div className="column">
        <label>Enter Project Description</label>
        <Input
          placeholder="Line1"
          defaultValue={value && value.points ? value.points[0] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 0)}
        />
        <Input
          placeholder="Line2"
          defaultValue={value && value.points ? value.points[1] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 1)}
        />
        <Input
          placeholder="Line1"
          defaultValue={value && value.points ? value.points[2] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 2)}
        />
        <Input
          placeholder="Line2"
          defaultValue={value && value.points ? value.points[3] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 3)}
        />
      </div>
    </div>
  );

  const EducationBody = (
    <div className="Details">
      <div className="row">
        <Input
          label="Title"
          placeholder=" Enter Title Eg. MCA"
          defaultValue={value.title}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <Input
        label="Collage/school Name"
        defaultValue={value.Collage}
        placeholder=" Enter Collage/school  Name "
        onChange={(e) =>
          setValue((prev) => ({ ...prev, CompanyName: e.target.value }))
        }
      />

      <div className="row">
        <Input
          label="Start Date"
          type="Date"
          defaultValue={value.StartDate}
          placeholder=" Enter Start Date Of Your Education"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, StartDate: e.target.value }))
          }
        />
        <Input
          label="End Date"
          defaultValue={value.EndDate}
          type="Date"
          placeholder="Enter Start End Of Your Education"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, EndDate: e.target.value }))
          }
        />
      </div>

      <div className="column">
        <Input
          placeholder="Line1"
          defaultValue={value && value.points ? value.points[0] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 0)}
        />
        <Input
          placeholder="Line2"
          defaultValue={value && value.points ? value.points[1] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 1)}
        />
        <Input
          placeholder="Line3"
          defaultValue={value && value.points ? value.points[2] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 2)}
        />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className="Details">
      <div className="row">
        <Input
          label="Name"
          placeholder=" Enter your Name  Eg. Tushar vani"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, name: e.target.value }))
          }
          defaultValue={value.name}
        />
      </div>
      <Input
        label="Title"
        defaultValue={value.title}
        placeholder=" Enter Title Eg. Frontend Developer"
        onChange={(e) =>
          setValue((prev) => ({ ...prev, title: e.target.value }))
        }
      />

      <div className="row">
        <Input
          label="Linked_in link"
          defaultValue={value.linkedinLink}
          placeholder=" Enter Your Linked-in Profile Link"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, linkedin: e.target.value }))
          }
        />
        <Input
          label="Git-hub link"
          defaultValue={value.GithubLink}
          placeholder="Enter your Git-hub link"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, GithubLink: e.target.value }))
          }
        />
      </div>

      <div className="row">
        <Input
          label="Email"
          defaultValue={value.Email}
          placeholder="Enter your Email"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, Email: e.target.value }))
          }
        />
        <Input
          label="Enter Phone"
          defaultValue={value.Phone}
          placeholder="Enter your Phone Number"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, Phone: e.target.value }))
          }
        />
      </div>
    </div>
  );

  const achievementBody = (
    <div className="details">
      <div className="row">
        <label>List your Achievements</label>
        <Input
          placeholder="Line1"
          defaultValue={value && value.points ? value.points[0] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 0)}
        />
        <Input
          placeholder="Line2"
          defaultValue={value && value.points ? value.points[1] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 1)}
        />{" "}
        <Input
          placeholder="Line3"
          defaultValue={value && value.points ? value.points[2] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 2)}
        />
        <Input
          placeholder="Line4"
          defaultValue={value && value.points ? value.points[3] : ""}
          onChange={(e) => handlePointUpdate(e.target.value, 3)}
        />
      </div>
    </div>
  );
  const SummaryBody = (
    <div className="details">
      <Input
        label="Summary"
        defaultValue={value.summery}
        placeholder="Enter your Summary/Objective"
        onChange={(e) =>
          setValue((prev) => ({ ...prev, summery: e.target.value }))
        }
      />
    </div>
  );

  const OtherBody = (
    <div className="details">
      <Input
        label="Other"
        defaultValue={value.other}
        placeholder="Enter Something"
        onChange={(e) =>
          setValue((prev) => ({ ...prev, other: e.target.value }))
        }
      />
    </div>
  );
  const generateBody = () => {
    switch (Sections[activeSection]) {
      case Sections.BasicInfo:
        return basicInfoBody;
      case Sections.workExp:
        return WorkExBody;
      case Sections.project:
        return ProjectBody;
      case Sections.education:
        return EducationBody;
      case Sections.achievement:
        return achievementBody;
      case Sections.summery:
        return SummaryBody;
      case Sections.other:
        return OtherBody;

      default:
        return null;
    }
  };

  useEffect(() => {
    const activeInfo = [Sections[activeSection]];
    setActiveInformation(activeInfo);
    setSectionTitle(Sections[activeSection]);
    setactiveDetailsIndex(0);
    setValue({
      name: activeInformation?.details?.name || "",
      overview: activeInformation?.details
        ? activeInformation?.details[0]?.overview || ""
        : "",
      linkedin: activeInformation?.details
        ? activeInformation?.details[0]?.linkedin || ""
        : "",
      point: activeInformation?.details
        ? activeInformation?.details[0]?.point || ""
        : "",
      certificateLink: activeInformation?.details
        ? activeInformation?.details[0]?.certificateLink || ""
        : "",
      StartDate: activeInformation?.details
        ? activeInformation?.details[0]?.StartDate || ""
        : "",
      EndDate: activeInformation?.details
        ? activeInformation?.details[0]?.EndDate || ""
        : "",
      title: activeInformation?.details?.title || "",
      Link: activeInformation?.details
        ? activeInformation?.details.Link || ""
        : "",
      Github: activeInformation?.details?.Github || "",
      Email: activeInformation?.details?.Email || "",
      Phone: activeInformation?.details?.Phone || "",
    });
  }, [activeSection, Sections, activeInformation?.details]);

  return (
    <div className="container2">
      <div className="header2">
        {Object.keys(Sections).map((key) => (
          <div
            className={`Section${activeSection === key ? " active" : ""}`}
            key={key}
            onClick={() => setActiveSection(key)}
          >
            {Sections[key]}
          </div>
        ))}
      </div>
      <div className="input-body">
        <Input
          label="Title"
          placeholder=" Enter section Details"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
        />

        <div className="Projects">
          {activeInformation?.details
            ? activeInformation.details.map((item, index) => (
                <div
                  className={`${"Project"} ${
                    activeDetailsIndex === index ? "active" : ""
                  }`}
                  key={item.title + index}
                >
                  <p>
                    {Sections[activeSection]} {index + 1}
                  </p>
                </div>
              ))
            : ""}
        </div>

        {generateBody()}
        <button onClick={handleSubmmision}>Save</button>
      </div>
    </div>
  );
}
