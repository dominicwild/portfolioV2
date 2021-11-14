import React from "react";
import BackgroundTexture from "./BackgroundTexture/BackgroundTexture";
import "./MainContent.scss";

const MainContent = () => {
  return (
    <>
      <div className="main-content">
        <BackgroundTexture />
        <h1>Main Content</h1>
      </div>
    </>
  );
};

export default MainContent;
