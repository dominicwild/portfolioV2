import React from "react";
import BackgroundTexture from "./BackgroundTexture/BackgroundTexture";
import mainContentData from "./MainContentData";
import "./MainContent.scss";
import Projects from "./Projects/Projects";
import ReactMarkdown from "react-markdown";

const MainContentBody = ({ data }: { data: typeof mainContentData }) => {
  return (
    <>
      {
        data.map(({ title, description }) =>
          <>
            <h1>{title}</h1>
            <ReactMarkdown>
              {description}
            </ReactMarkdown>
          </>
        )
      }
    </>
  )
}

const MainContent = () => {
  return (
    <>
      <div className="main-content">
        <BackgroundTexture />
        <MainContentBody data={mainContentData} />
        <Projects />
      </div>
    </>
  );
};

export default MainContent;
