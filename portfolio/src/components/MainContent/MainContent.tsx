import React from "react";
import BackgroundTexture from "./BackgroundTexture/BackgroundTexture";
import mainContentData from "./MainContentData";
import "./MainContent.scss";

const MainContentBody = ({ data }: { data: typeof mainContentData }) => {
  return (
    <>
      {
        data.map(({ title, description }) =>
          <>
            <h1>{title}</h1>
            {
              description.map((description) =>
                <p>
                  {description}
                </p>
              )
            }
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
      </div>
    </>
  );
};

export default MainContent;
