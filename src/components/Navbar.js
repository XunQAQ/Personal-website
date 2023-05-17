import React, { useState } from 'react'
import "./styles/Navbar.css";
import { Link } from 'react-scroll';

export function Navbar({header}) {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const subject = "Interested in Resume"
	const body = `Hi Watson,
	%0D%0A%0D%0A  I was on your personal website and I'm would love for you to send me your resume. Hope to connect!
	%0D%0A%0D%0A  Thank you!`

	return (
			<nav className="navbar">
			{/*Remember to change css so that there's a gap at the top
			<h1>{header}</h1>*/}
				<div className="navbar-container">

					{/*<div className="menu-icon" onClick={handleClick}>*/}
					{/*	<i className={click ? "fas fa-times" : "fas fa-bars"} />*/}
					{/*</div>*/}

					<ul className={click ? "nav-menu active": "nav-menu"} >
						<li className="nav-item">
							<a className="nav-links" activeClass="active" href={`mailto:16xp3@queensu.ca?subject=${subject}&body=${body}`} target="_blank" without rel="noopener noreferrer">Resume</a>
						</li>
						<li className="nav-item">
							<Link className="nav-links" onClick={closeMobileMenu} activeClass="active" to="about" spy={true} smooth={true} offset={-75} duration={1000}>About</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-links" onClick={closeMobileMenu} activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={1000}>Projects</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-links" onClick={closeMobileMenu} activeClass="active" to="about-card" spy={true} smooth={true} duration={1250}>Contacts</Link>
						</li>
					</ul>
				</div>
			</nav>

	)
}

export default Navbar
