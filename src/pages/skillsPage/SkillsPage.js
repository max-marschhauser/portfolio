// skills page, contains list of my skills and my experience with every one of them

// importing general items
import React, { useState } from "react";

// importing data
import dataObject from "../../data/skillsPageExperiences.js";

// importing styles
import "./skillsPage.scss";

// importing images
import HTML from "../../assets/images/HTML.png";
import CSS from "../../assets/images/CSS.png";
import C from "../../assets/images/C.png";
import JavaScript from "../../assets/images/JavaScript.png";
import MySQL from "../../assets/images/MySQL.png";
import PHP from "../../assets/images/PHP.png";
import ReactImage from "../../assets/images/React.png";
import Sass from "../../assets/images/Sass.png";
import TypeScript from "../../assets/images/TypeScript.png";
import MongoDB from "../../assets/images/MongoDB.png";
import NodeJS from "../../assets/images/NodeJS.png";

export default function SkillsPage() {
	let [currentLanguage, setCurrentLanguage] = useState("HTML");

	function handleMouseOver(event) {
		setCurrentLanguage(event.target.alt);
	}

	return (
		<div className="main">
			<section className="skillsPage">
				<h2 className="pageHeading">Skills</h2>
				<div className="skillsPage--container">
					<div className="leftPart">
						<h3>Everyday use</h3>
						<div className="left-grid">
							<img src={HTML} alt="HTML" onMouseEnter={handleMouseOver} />
							<img src={CSS} alt="CSS" onMouseEnter={handleMouseOver} />
							<img src={Sass} alt="Sass" onMouseEnter={handleMouseOver} />
							<img src={JavaScript} alt="JavaScript" onMouseEnter={handleMouseOver} />
							<img src={TypeScript} alt="TypeScript" onMouseEnter={handleMouseOver} />
							<img src={ReactImage} alt="React" onMouseEnter={handleMouseOver} />
						</div>
					</div>
					<div className="rightPart">
						<div className="rightUpperPart">
							<h3>Familiar with</h3>
							<div className="right-grid">
								<img src={PHP} alt="PHP" onMouseEnter={handleMouseOver} />
								<img src={MongoDB} alt="MongoDB" onMouseEnter={handleMouseOver} />
								<img src={MySQL} alt="MySQL" onMouseEnter={handleMouseOver} />
								<img src={NodeJS} alt="NodeJS" onMouseEnter={handleMouseOver} />
								<img src={C} alt="C" onMouseEnter={handleMouseOver} />
							</div>
						</div>
						<div className="rightLowerPart">
							<h4>My Experience with</h4>
							<header>{currentLanguage}</header>
							<ul>
								{dataObject[currentLanguage].map((listItem) => (
									<li key={listItem}>{listItem}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
