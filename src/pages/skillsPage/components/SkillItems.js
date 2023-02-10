// component for skills page, contains list of images to be displayed

// importing general items
import React, { useRef } from "react";

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
	const { currentSkill, handleFocus } = props;

	function focusItem(e) {
		let itemToFocus = e.target.alt;
		switch (itemToFocus) {
			case "HTML":
				HTMLRef.current.focus();
				break;
			case "CSS":
				CSSRef.current.focus();
				break;
			case "Sass":
				SassRef.current.focus();
				break;
			case "JavaScript":
				JavaScriptRef.current.focus();
				break;
			case "TypeScript":
				TypeScriptRef.current.focus();
				break;
			case "React":
				ReactRef.current.focus();
				break;
			case "PHP":
				PHPRef.current.focus();
				break;
			case "MySQL":
				MySQLRef.current.focus();
				break;
			case "C":
				CRef.current.focus();
				break;
			default:
				ReactRef.current.focus();
				break;
		}
	}

	let HTMLRef = useRef();
	let CSSRef = useRef();
	let SassRef = useRef();
	let JavaScriptRef = useRef();
	let TypeScriptRef = useRef();
	let ReactRef = useRef();
	let PHPRef = useRef();
	let MySQLRef = useRef();
	let CRef = useRef();

	return (
		<>
			<button
				className={currentSkill === "HTML" ? "activeImage" : ""}
				onFocus={handleFocus}
				data-image="HTML"
				ref={HTMLRef}
				onMouseEnter={focusItem}>
				<img loading="lazy" src={HTML} alt="HTML" />
			</button>
			<button
				className={currentSkill === "CSS" ? "activeImage" : ""}
				onFocus={handleFocus}
				data-image="CSS"
				ref={CSSRef}
				onMouseEnter={focusItem}>
				<img loading="lazy" src={CSS} alt="CSS" />
			</button>
			<button
				className={currentSkill === "Sass" ? "activeImage" : ""}
				onFocus={handleFocus}
				data-image="Sass"
				ref={SassRef}
				onMouseEnter={focusItem}>
				<img loading="lazy" src={Sass} alt="Sass" />
			</button>
			<button
				className={currentSkill === "JavaScript" ? "activeImage" : ""}
				onFocus={handleFocus}
				data-image="JavaScript"
				ref={JavaScriptRef}
				onMouseEnter={focusItem}>
				<img loading="lazy" src={JavaScript} alt="JavaScript" />
			</button>
			<button
				className={currentSkill === "TypeScript" ? "activeImage" : ""}
				onFocus={handleFocus}
				data-image="TypeScript"
				ref={TypeScriptRef}
				onMouseEnter={focusItem}>
				<img loading="lazy" src={TypeScript} alt="TypeScript" />
			</button>
			<button
				className={currentSkill === "React" ? "activeImage" : ""}
				onFocus={handleFocus}
				data-image="React"
				ref={ReactRef}
				onMouseEnter={focusItem}>
				<img loading="lazy" src={ReactImage} alt="React" />
			</button>
			<button
				className={currentSkill === "PHP" ? "activeImage" : ""}
				onFocus={handleFocus}
				data-image="PHP"
				ref={PHPRef}
				onMouseEnter={focusItem}>
				<img loading="lazy" src={PHP} alt="PHP" />
			</button>
			<button
				className={currentSkill === "MySQL" ? "activeImage" : ""}
				onFocus={handleFocus}
				data-image="MySQL"
				ref={MySQLRef}
				onMouseEnter={focusItem}>
				<img loading="lazy" src={MySQL} alt="MySQL" />
			</button>
			<button
				className={currentSkill === "C" ? "activeImage" : ""}
				onFocus={handleFocus}
				data-image="C"
				ref={CRef}
				onMouseEnter={focusItem}>
				<img loading="lazy" src={C} alt="C" />
			</button>
		</>
	);
}
