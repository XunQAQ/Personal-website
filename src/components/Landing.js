import React from 'react'
import "../App.css";
import { Button } from './Button';
import { ButtonExt } from './ButtonExt';
import "./styles/Landing.css";

function Landing() {
    const subject = "Interested in Resume"
    const body = `Hi Watson,
	%0D%0A%0D%0A  I was on your personal website and I'm would love for you to send me your resume. Hope to connect!
	%0D%0A%0D%0A  Thank you!`


    return (
        <div className="landing-container">
            <img id="background" src="images/landing-img.jpg" alt="Page cover photo, welcome to my portfolio."></img>
            <h1>Watson Peng</h1>
            <p>SPACE IS THE LIMIT REACH FOR THE GALAXY</p>

            {/*Landing page button*/}
            <div className="landing-btn">

                <ButtonExt className="btns" buttonStyle="btn--outline" buttonSize="btn--large" path={`mailto:16xp3@queensu.ca?subject=${subject}&body=${body}`}>
                    Contact Me
                </ButtonExt>

                <Button className="btns" buttonSize="btn--large" path="projects">
                    Projects
                </Button>
            </div>
        </div>
    )
}

export default Landing
