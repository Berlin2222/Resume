import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Envelope,
  Linkedin,
  Calendar,
  Paperclip,
  Geo,
  GitHub,
} from "react-bootstrap-icons";

export const Resume = (props) => {
  const information = props.information;
  const Sections = props.Sections;
  const [columns, setColumns] = useState([[], []]);

  const info = {
    workExp: information[Sections.workExp],
    project: information[Sections.project],
    achievement: information[Sections.achievement],
    education: information[Sections.education],
    basicInfo: information[Sections.basicInfo],
    summary: information[Sections.summary],
    other: information[Sections.other],
  };
  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const WorkExpSection = (
    <div key={"WorkExp"} className={`${"section"} ${"WorkExp"}`}>
      <div className="sectionTitle">{info.workExp.sectionTitle}</div>
      <div className="content">
        {info.workExp?.details?.map((item) => (
          <div className="item" key={item.title}>
            {item.title && <p className="title">{item.title}</p>}
            {item.companyName && (
              <p className="subTitle"> {item.companyName}</p>
            )}

            <div className="date">
              <Calendar />
              {getFormattedDate(item.startDate)}-
              {getFormattedDate(item.endDate)}
            </div>

            {item.certificateLink && (
              <Link className="Link1">
                {" "}
                <Paperclip />
                {item.certificateLink}
              </Link>
            )}
            {item.location ? (
              <p className={"date"}>
                <Geo /> Remote
              </p>
            ) : (
              <span />
            )}
            {item.points?.length > 0 ? (
              <ul className={"points"}>
                {item.points?.map((elem, index) => (
                  <li className={"point"} key={elem + index}>
                    {elem}
                  </li>
                ))}
              </ul>
            ) : (
              <span />
            )}
          </div>
        ))}
      </div>
    </div>
  );
  const projectSection = (
    <div key={"project"} className={`${"section"} ${"project"}`}>
      <div className="sectionTitle"> {info.project.sectionTitle}</div>
      <div className="content">
        {info.project?.details?.map((item) => (
          <div className={item}>
            {item.title ? <p className={"title"}>{item.title}</p> : <span />}
            {item.link ? (
              <a className={"link"} href={item.link}>
                <Paperclip />
                {item.link}
              </a>
            ) : (
              <span />
            )}
            {item.github ? (
              <a className={"link"} href={item.github}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                {item.github}
              </a>
            ) : (
              <span />
            )}
            {item.overview ? (
              <p className={"overview"}>{item.overview} </p>
            ) : (
              <span />
            )}
            {item.points?.length > 0 ? (
              <ul className={"points"}>
                {item.points?.map((elem, index) => (
                  <li className={"point"} key={elem + index}>
                    {elem}
                  </li>
                ))}
              </ul>
            ) : (
              <span />
            )}
          </div>
        ))}
      </div>
    </div>
  );
  const EducationSection = (
    <div key={"education"} className={`${"section"} ${"Education"}`}>
      <div className="sectionTitle"> Education</div>
      <div className="content">
        <div className="item">
          <p className="title"> MCA</p>
          <p className="subTitle"> xyz university</p>
          <div className="date">
            <Calendar /> 12/07/22
          </div>

          <p className="overview">pursuing MCA last year.</p>
          <ul className="points">
            <li className="point"> computer application</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const AchivementSection = (
    <div key={"achivement"} className={`${"section"} ${"Achivement"}`}>
      <div className="sectionTitle"> Achivement</div>
      <div className="content">
        <div className="item">
          <p className="overview">Achivement:-</p>
          <ul className="points">
            <li className="point"> Achivement 1</li>
            <li className="point"> Achivement 2</li>
            <li className="point"> Achivement 3</li>
            <li className="point"> Achivement 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const summarySection = (
    <div key={"summary"} className={`${"section"} ${"summary"}`}>
      <div className="sectionTitle"> summary</div>
      <div className="content">
        <div className="item">
          <p className="title"> Normal summary</p>

          <div className="date">
            <Calendar /> 12/07/22
          </div>
          <p className="overview">point to write</p>
          <ul className="points">
            <li className="point"> Frontend</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const otherSection = (
    <div key={"other"} className={`${"section"} ${"other"}`}>
      <div className="sectionTitle"> other</div>
      <div className="content">
        <div className="item">
          <p className="overview">your interest and hobbies</p>
          <ul className="points">
            <li className="point"> playing game</li>

            <li className="point"> dummy data</li>
          </ul>
        </div>
      </div>
    </div>
  );
  useEffect(() => {
    setColumns([
      [projectSection, EducationSection, summarySection],
      [WorkExpSection, AchivementSection, otherSection],
    ]);
  }, []);
  return (
    <div className="container-3">
      <div className="header-3">
        <p
          className="heading-3"
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          Name
        </p>
        <p className="sub-heading3"> Front-end Developer</p>
        <div className="links">
          <Envelope style={{ width: "16px", height: "16px" }} />
          <Link> Email@gmail.com</Link>
          <Linkedin />
          <Link> https://linkedin.in/asdasd</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <Link> https://github.in/asdasd</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
          <Link> +91 1112223338</Link>
        </div>

        <div className={"main"}>
          <div className={"col1"}>{columns[0]}</div>
          <div className={"col2"}>{columns[1]}</div>
        </div>
      </div>
    </div>
  );
};
