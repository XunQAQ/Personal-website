import { Link } from 'react-scroll';
import { Button } from "./Button";
import "./styles/Footer.css";
import React from "react";

function Footer({listThing, year}){
    const subject = "Interested in Resume"
    const body = `Hi Watson,
	%0D%0A%0D%0A  I was on your personal website and I'm would love for you to send me your resume. Hope to connect!
	%0D%0A%0D%0A  Thank you!`

    return(
      <footer className="footer-container">
        {/*
        <section className="footer-contact" id="contact">
          <p className="footer-contact-heading" >Contact me</p>
            <div>
            <form>
              <input className="footer-input" type="email" name="email" placeholder="Your Email"></input>
              <Button buttonStyle="btn--outline">Submit</Button>
            </form>
          </div>
        </section>
        */}

        {/*footer link section*/}

        <div className="footer-link-wrapper">
            <div className="footer-link-item" id="about-card">
              <h2>About</h2>
                <Link className="footer-link" activeClass="active" to="home" spy={true} smooth={true} duration={1250}>Home</Link>
                <Link className="footer-link"activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={1250}>About Me</Link>
                <Link className="footer-link" activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={1250}>Projects</Link>
                <a className="footer-link" activeClass="active" spy={true} smooth={true} offset={-70} duration={1250}
                  href={`mailto:16xp3@queensu.ca?subject=${subject}&body=${body}`} target="_blank" without rel="noopener noreferrer">Resume</a>
						</div>
            <div className="footer-link-item" id="dev-card">
              <h2>Development Projects</h2>
              <a className="footer-link" target="_blank" href="https://github.com/amandayu1/PREPosition-website" rel="noreferrer">PREPosition</a>
              <a className="footer-link" target="_blank" href="http://waterloobasics.com/" rel="noreferrer"> Waterloo Basics</a>
              <a className="footer-link" target="_blank" href="https://github.com/amandayu1/amanda-yu-website" rel="noreferrer">Portfolio Website</a>
              <a className="footer-link" target="_blank" href="https://github.com/amandayu1/unzucc.me" rel="noreferrer">Unzucc.me</a>
              <a className="footer-link" target="_blank" href="https://devpost.com/software/grocery-app-n0ps83" rel="noreferrer">SmartCart</a>
            </div>
            <div className="footer-link-item" id="design-card">
              <h2>Design Projects</h2>
              <a className="footer-link" target="_blank" href="https://amandayu2002.wixsite.com/thereachinitiative" rel="noreferrer"> The Reach Initiative</a>
              <a className="footer-link"  target="_blank" href="https://www.streamsyndicate-canada.com/" rel="noreferrer">STREAM Syndicate</a>
              <a className="footer-link" target="_blank" href="https://devpost.com/software/coronavrus" rel="noreferrer">CoronaVRus</a>
            </div>
          </div>
          {/*end of footer link wrapper*/}

        {/*footer social media section*/}
          <section className="social-media">
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
      </footer>
    )
  }

  export default Footer;
