// another page

import React from "react";
import "./skillsPage.scss";

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
	return (
		<div className="main">
			<section className="skillsPage">
				<h2>Skills</h2>
				<div className="skillsPage--container">
					<div className="leftPart">
						<h3>Everyday use</h3>
						<div className="left-grid">
							<img src={HTML} alt="HTML" />
							<img src={CSS} alt="CSS" />
							<img src={Sass} alt="Sass" />
							<img src={JavaScript} alt="JavaScript" />
							<img src={TypeScript} alt="TypeScript" />
							<img src={ReactImage} alt="React" />
						</div>
					</div>
					<div className="rightPart">
						<div className="rightUpperPart">
							<h3>Familiar with</h3>
							<div className="right-grid">
								<img src={PHP} alt="PHP" />
								<img src={MongoDB} alt="MongoDB" />
								<img src={MySQL} alt="MySQL" />
								<img src={NodeJS} alt="NodeJS" />
								<img src={C} alt="C" />
							</div>
						</div>
						<div className="rightLowerPart">
							<h4>My Thoughts About</h4>
							<header>Sass</header>
							<ul>
								<li>Love on the first sight</li>
								<li>My favorite parts are nesting, mixins and modular CSS</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
