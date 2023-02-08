// component for skills page, contains list of images to be displayed

// importing general items
import React from "react";

// importing images
import HTML from "../../../assets/images/skills/HTML.png";
import CSS from "../../../assets/images/skills/CSS.png";
import C from "../../../assets/images/skills/C.png";
import JavaScript from "../../../assets/images/skills/JavaScript.png";
import MySQL from "../../../assets/images/skills/MySQL.png";
import PHP from "../../../assets/images/skills/PHP.png";
import ReactImage from "../../../assets/images/skills/React.png";
import Sass from "../../../assets/images/skills/Sass.png";
import TypeScript from "../../../assets/images/skills/TypeScript.png";

export default function SkillItems(props) {
	let { currentSkill, handleMouseOver } = props;

	return (
		<>
			<img
				loading="lazy"
				className={currentSkill === "HTML" ? "activeImage" : ""}
				src={HTML}
				alt="HTML"
				onMouseEnter={handleMouseOver}
			/>

			<img
				loading="lazy"
				className={currentSkill === "CSS" ? "activeImage" : ""}
				src={CSS}
				alt="CSS"
				onMouseEnter={handleMouseOver}
			/>

			<img
				loading="lazy"
				className={currentSkill === "Sass" ? "activeImage" : ""}
				src={Sass}
				alt="Sass"
				onMouseEnter={handleMouseOver}
			/>

			<img
				loading="lazy"
				className={currentSkill === "JavaScript" ? "activeImage" : ""}
				src={JavaScript}
				alt="JavaScript"
				onMouseEnter={handleMouseOver}
			/>

			<img
				p
				loading="lazy"
				className={currentSkill === "TypeScript" ? "activeImage" : ""}
				src={TypeScript}
				alt="TypeScript"
				onMouseEnter={handleMouseOver}
			/>

			<img
				className={currentSkill === "React" ? "activeImage" : ""}
				src={ReactImage}
				alt="React"
				onMouseEnter={handleMouseOver}
			/>

			<img
				loading="lazy"
				className={currentSkill === "PHP" ? "activeImage" : ""}
				src={PHP}
				alt="PHP"
				onMouseEnter={handleMouseOver}
			/>

			<img
				loading="lazy"
				className={currentSkill === "MySQL" ? "activeImage" : ""}
				src={MySQL}
				alt="MySQL"
				onMouseEnter={handleMouseOver}
			/>

			<img
				loading="lazy"
				className={currentSkill === "C" ? "activeImage" : ""}
				src={C}
				alt="C"
				onMouseEnter={handleMouseOver}
			/>
		</>
	);
}
