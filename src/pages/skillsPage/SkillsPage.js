// skills page, contains list of my skills and my experience with every one of them

// importing general items
import React, { useState } from "react";

// importing data
import dataObject from "../../data/skillsPageExperiences.js";

// importing styles
import "./skillsPage.scss";

// importing images
import HTML from "../../assets/images/skills/HTML.png";
import CSS from "../../assets/images/skills/CSS.png";
import C from "../../assets/images/skills/C.png";
import JavaScript from "../../assets/images/skills/JavaScript.png";
import MySQL from "../../assets/images/skills/MySQL.png";
import PHP from "../../assets/images/skills/PHP.png";
import ReactImage from "../../assets/images/skills/React.png";
import Sass from "../../assets/images/skills/Sass.png";
import TypeScript from "../../assets/images/skills/TypeScript.png";
import MongoDB from "../../assets/images/skills/MongoDB.png";
import NodeJS from "../../assets/images/skills/NodeJS.png";

export default function SkillsPage() {
	let [currentLanguage, setCurrentLanguage] = useState("HTML");

	function handleMouseOver(event) {
		setCurrentLanguage(event.target.alt);
	}

	return (
		<>
			<h2 className="pageHeading">
				Skills
				<p>Want to know what I know?</p>
			</h2>

			<main className="skillsPage">
				<section className="images">
					<img
						loading="lazy"
						className={currentLanguage === "HTML" ? "activeImage" : ""}
						src={HTML}
						alt="HTML"
						onMouseEnter={handleMouseOver}
					/>
					<img
						loading="lazy"
						className={currentLanguage === "CSS" ? "activeImage" : ""}
						src={CSS}
						alt="CSS"
						onMouseEnter={handleMouseOver}
					/>
					<img
						loading="lazy"
						className={currentLanguage === "Sass" ? "activeImage" : ""}
						src={Sass}
						alt="Sass"
						onMouseEnter={handleMouseOver}
					/>
					<img
						loading="lazy"
						className={currentLanguage === "JavaScript" ? "activeImage" : ""}
						src={JavaScript}
						alt="JavaScript"
						onMouseEnter={handleMouseOver}
					/>
					<img
						loading="lazy"
						className={currentLanguage === "TypeScript" ? "activeImage" : ""}
						src={TypeScript}
						alt="TypeScript"
						onMouseEnter={handleMouseOver}
					/>
					<img
						loading="lazy"
						className={currentLanguage === "React" ? "activeImage" : ""}
						src={ReactImage}
						alt="React"
						onMouseEnter={handleMouseOver}
					/>

					<img
						loading="lazy"
						className={currentLanguage === "PHP" ? "activeImage" : ""}
						src={PHP}
						alt="PHP"
						onMouseEnter={handleMouseOver}
					/>
					<img
						loading="lazy"
						className={currentLanguage === "MongoDB" ? "activeImage" : ""}
						src={MongoDB}
						alt="MongoDB"
						onMouseEnter={handleMouseOver}
					/>
					<img
						loading="lazy"
						className={currentLanguage === "MySQL" ? "activeImage" : ""}
						src={MySQL}
						alt="MySQL"
						onMouseEnter={handleMouseOver}
					/>
					<img
						loading="lazy"
						className={currentLanguage === "NodeJS" ? "activeImage" : ""}
						src={NodeJS}
						alt="NodeJS"
						onMouseEnter={handleMouseOver}
					/>
					<img
						loading="lazy"
						className={currentLanguage === "C" ? "activeImage" : ""}
						src={C}
						alt="C"
						onMouseEnter={handleMouseOver}
					/>
				</section>
				<section className="description">
					<div className="sticky">
						<h3>My Experience with</h3>
						<header>{currentLanguage}</header>
						<ul>
							{dataObject[currentLanguage].map((listItem) => (
								<li key={listItem}>{listItem}</li>
							))}
						</ul>
					</div>
				</section>
			</main>
		</>
	);
}
