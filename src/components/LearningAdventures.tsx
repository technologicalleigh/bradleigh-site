import React from "react";
import "../assets/Blogs.css";
import data from "../data/blogs.json";

function LearningAdventures() {
  return (
    <>
      <ul className="blog-list-wrapper">
        {data.blogs.map((blog) => (
          <li key={blog.id} className="blog-list-item">
            <a href={blog.url}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default LearningAdventures;
