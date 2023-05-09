import React from "react";
import "../App.css";

export default function Experience() {
  const subject = "Interested in Resume"
  const body = `Hi Watson,
	%0D%0A%0D%0A  I was on your personal website and I'm would love for you to send me your resume. Hope to connect!
	%0D%0A%0D%0A  Thank you!`

  return (
    <div className="experience">
      <h1>Experience</h1>
      <p>
        I had collaborated with an AI startup in Ottawa on the development of machine vision and natural language processing for recognizing shopping receipts.
        also had experience serving as a Scrum Master for agile software development and worked on edge detection problems in Queens' Robotics Team.
        I am excited to meet and get to know talented software engineers and product managers please&nbsp;
        <a
          id = "experience"
          href={`mailto:16xp3@queensu.ca?subject=${subject}&body=${body}`}
          target="_blank"
        >
          email
        </a>
        &nbsp;me.
      </p>
    </div>
  );
}
