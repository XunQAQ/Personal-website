import React from "react"
import "./styles/About.css";

export function About() {
    return (
        <div className="about" id="about">
        <h1>About Me</h1>

      {/*social media section*/}
      <section className="experience-socials">
          <div className="social-media-wrap">
            <div className="social-icons">

              <a href="https://github.com/XunQAQ"
                className="social-icons-link github"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <i className="fab fa-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/watsonpeng/"
                className="social-icons-link linkedin"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="mailto: 16xp3@queensu.ca"
                className="social-icons-link email"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
              >
                <i className="far fa-envelope"></i>
              </a>

            </div>
          </div>
        </section>

        <div className="page-content">
        <p >
          <img
            id="profile"
            src="images/pfp.png"
            alt="Watson is Sitting at the front of Queens' library"
          />
          Hi, I'm Watson, a Computer Science student from Queens. I'm a Machine Learning Engineer and Full Stack
          Software Developer. I am currently seeking a position in 2023.
          <br /> <br />
          Are the baby seals cute?
          <br /> <br />
          I took these photos in San Diego, California in 2022. I love traveling
          and I'm always up for an adventure. In the world of technology, I believe integrated AI will be the best companion for SDEs.
          Whether we're discussing the latest and greatest tech products, exchanging workout routines, or sharing ideas on how AI to change the world,
          I always enjoy a good coffee chat. So if you want to join me on this adventure, let's connect and see where our curiosity takes us!
        </p>
            </div>
        </div>
    );
}
