import React from "react";
import titleImg from "../img/pexels-realtoughcandycom-11035393.jpg";
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
        <p className="blog-p">
          I recently had the fortunate experience of continuing my career in
          software development and web developing by pursuing an opportunity as
          a DevOps technician at Avidity Science. When I first started working,
          my transition from being a tester that worked primarily with the
          development process of new features being added to WatchdogEX to a
          DevOps tech was supposed to be slow as the software manager worked to
          backfill my position. However, that plan changed when the only other
          DevOps tech (other than our manager) put his notice in to pursue an
          opportunity at another company. I had to learn the job as quickly as I
          could, and I loved every moment of the challenge.
        </p>
        <p className="blog-p">
          My trainer was awesome and allowed me to document all the information
          he was communicating in written documents, Teams Wiki pages, and
          videos. Not knowing what exactly the job entailed, I want to share the
          lessons I learned throughout my first year working as a DevOps tech at
          Avidity Science.
        </p>
        <ol className="blog-ol">
          <li className="blog-il">
            Most of my day involves working with customers and customer IT
            teams. As someone who is used to being a behind-the-scene player in
            development, it was a shock to be such a large representative who
            impacted the completion of projects. With this responsibility, it
            was important for me to use my soft skills of communication,
            customer service, being a team player, and empathy throughout my
            work day.
          </li>
          <li className="blog-il">
            I learned the importance of work-life balance. Before working on
            DevOps, I was rarely granted overtime. I had the energy to continue
            learning development goals after work. Once on the DevOps Team, the
            amount of work that needed to get done seemed overwhelming and
            never-ending, and I felt like I never knew enough. I quickly learned
            that I needed to not only manage the stress I experienced on the job
            better and give myself as much empathy as I could.
          </li>
          <li className="blog-il">
            A lot more started making sense not only about our products but also
            about everything I’ve been learning throughout my career made sense.
            Until now, I didn’t need to know as much basic IT skills, but I had
            to be knowledgeable to talk to networking, security, and IT teams.
            So, I actually signed up for the IT certificate to learn more about
            IT.
          </li>
        </ol>
        <p className="blog-p">
          Although, I feel like I prefer developing more still, I feel really
          grateful for the opportunity to join my company’s DevOps team. It
          helped me step out of my comfort zone, develop my confidence,
          strengthened my soft skills, and I learned so much. Take new
          opportunities sometimes. You never know how they’ll help you grow.
        </p>
      </div>
    </>
  );
}

export default LearningAdventures;
