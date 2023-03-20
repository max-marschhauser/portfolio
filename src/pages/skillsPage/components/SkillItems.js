// component for skills page, contains list of images to be displayed

// importing general items
import React, { useState, useEffect, useRef } from "react";

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

	const HTMLRef = useRef();
	const CSSRef = useRef();
	const SassRef = useRef();
	const JavaScriptRef = useRef();
	const TypeScriptRef = useRef();
	const ReactRef = useRef();
	const PHPRef = useRef();
	const MySQLRef = useRef();
	const CRef = useRef();

	const [HTMLIsVissible, setHTMLIsVissible] = useState(false);
	const [CSSIsVissible, setCSSIsVissible] = useState(false);
	const [SassIsVissible, setSassIsVissible] = useState(false);
	const [JavaScriptIsVissible, setJavaScriptIsVissible] = useState(false);
	const [TypeScriptIsVissible, setTypeScriptIsVissible] = useState(false);
	const [ReactIsVissible, setReactIsVissible] = useState(false);
	const [PHPIsVissible, setPHPIsVissible] = useState(false);
	const [MySQLIsVissible, setMySQLIsVissible] = useState(false);
	const [CIsVissible, setCIsVissible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((item) => {
				let target = item.target.dataset.image;

				switch (target) {
					case "HTML": {
						setHTMLIsVissible(item.isIntersecting);
						break;
					}
					case "CSS": {
						setCSSIsVissible(item.isIntersecting);
						break;
					}
					case "Sass": {
						setSassIsVissible(item.isIntersecting);
						break;
					}
					case "JavaScript": {
						setJavaScriptIsVissible(item.isIntersecting);
						break;
					}
					case "TypeScript": {
						setTypeScriptIsVissible(item.isIntersecting);
						break;
					}
					case "React": {
						setReactIsVissible(item.isIntersecting);
						break;
					}
					case "PHP": {
						setPHPIsVissible(item.isIntersecting);
						break;
					}
					case "MySQL": {
						setMySQLIsVissible(item.isIntersecting);
						break;
					}
					case "C": {
						setCIsVissible(item.isIntersecting);
						break;
					}

					default: {
						break;
					}
				}
			});
		});
		observer.observe(HTMLRef.current);
		observer.observe(CSSRef.current);
		observer.observe(SassRef.current);
		observer.observe(JavaScriptRef.current);
		observer.observe(TypeScriptRef.current);
		observer.observe(ReactRef.current);
		observer.observe(PHPRef.current);
		observer.observe(MySQLRef.current);
		observer.observe(CRef.current);
	}, []);

	return (
		<>
			<button
				className={HTMLIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="HTML"
				ref={HTMLRef}
				onMouseEnter={focusItem}>
				<img
					className={currentSkill === "HTML" ? "activeImage skillsImage" : "skillsImage"}
					loading="lazy"
					src={HTML}
					alt="HTML"
				/>
			</button>

			<button
				className={CSSIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="CSS"
				ref={CSSRef}
				onMouseEnter={focusItem}>
				<img
					className={currentSkill === "CSS" ? "activeImage skillsImage" : "skillsImage"}
					loading="lazy"
					src={CSS}
					alt="CSS"
				/>
			</button>

			<button
				className={SassIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="Sass"
				ref={SassRef}
				onMouseEnter={focusItem}>
				<img
					className={currentSkill === "Sass" ? "activeImage skillsImage" : "skillsImage"}
					loading="lazy"
					src={Sass}
					alt="Sass"
				/>
			</button>

			<button
				className={JavaScriptIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="JavaScript"
				ref={JavaScriptRef}
				onMouseEnter={focusItem}>
				<img
					className={currentSkill === "JavaScript" ? "activeImage skillsImage" : "skillsImage"}
					loading="lazy"
					src={JavaScript}
					alt="JavaScript"
				/>
			</button>

			<button
				className={TypeScriptIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="TypeScript"
				ref={TypeScriptRef}
				onMouseEnter={focusItem}>
				<img
					className={currentSkill === "TypeScript" ? "activeImage skillsImage" : "skillsImage"}
					loading="lazy"
					src={TypeScript}
					alt="TypeScript"
				/>
			</button>

			<button
				className={ReactIsVissible === true ? "vissibleButton " : ""}
				onFocus={handleFocus}
				data-image="React"
				ref={ReactRef}
				onMouseEnter={focusItem}>
				<img
					className={currentSkill === "React" ? "activeImage skillsImage" : "skillsImage"}
					loading="lazy"
					src={ReactImage}
					alt="React"
				/>
			</button>

			<button
				className={PHPIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="PHP"
				ref={PHPRef}
				onMouseEnter={focusItem}>
				<img
					className={currentSkill === "PHP" ? "activeImage skillsImage" : "skillsImage"}
					loading="lazy"
					src={PHP}
					alt="PHP"
				/>
			</button>

			<button
				className={MySQLIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="MySQL"
				ref={MySQLRef}
				onMouseEnter={focusItem}>
				<img
					className={currentSkill === "MySQL" ? "activeImage skillsImage" : "skillsImage"}
					loading="lazy"
					src={MySQL}
					alt="MySQL"
				/>
			</button>

			<button
				className={CIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="C"
				ref={CRef}
				onMouseEnter={focusItem}>
				<img
					className={currentSkill === "C" ? "activeImage skillsImage" : "skillsImage"}
					loading="lazy"
					src={C}
					alt="C"
				/>
			</button>
		</>
	);
}
