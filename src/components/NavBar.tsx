import React from "react";
import styles from "../assets/NavBar.css";

function listURLs() {
  return (
    <>
      <ul className={styles}>
        {/* {urls.map((page) => (
          <li>
            <a href={page.link}>{page.text}</a>
          </li>
        ))} */}
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/adventures">Coding Adventures</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bradleighkottke/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/technologicalleigh">Github</a>
        </li>
      </ul>
    </>
  );
}

export default listURLs;
