import React from "react";
// import titleImg from "../img/react.png";
import "../assets/LearnindAdventures.css";
import data from "../data/blogs.json";

// let title = data.blogs[0].title;

function LearningAdventures() {
  return (
    <>
      <div className="blog-wrapper">
        <div className="header-wrapper">
          <img src={titleImg} />
          <h1 className="blog-title">{data.blogs[0].title}</h1>
        </div>
      </div>
    </>
  );
}

export default LearningAdventures;
