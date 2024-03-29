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
import Figma from "../../../assets/images/skills/Figma.png";
import ChatGPT from "../../../assets/images/skills/ChatGPT.png";
import WordPress from "../../../assets/images/skills/WordPress.png";

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
			case "Figma":
				FigmaRef.current.focus();
				break;
			case "WordPress":
				WordPressRef.current.focus();
				break;
			case "ChatGPT":
				ChatGPTRef.current.focus();
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
				break;
		}
	}

	const HTMLRef = useRef();
	const CSSRef = useRef();
	const SassRef = useRef();
	const JavaScriptRef = useRef();
	const TypeScriptRef = useRef();
	const ReactRef = useRef();
	const FigmaRef = useRef();
	const WordPressRef = useRef();
	const ChatGPTRef = useRef();
	const PHPRef = useRef();
	const MySQLRef = useRef();
	const CRef = useRef();

	const [HTMLIsVissible, setHTMLIsVissible] = useState(false);
	const [CSSIsVissible, setCSSIsVissible] = useState(false);
	const [SassIsVissible, setSassIsVissible] = useState(false);
	const [JavaScriptIsVissible, setJavaScriptIsVissible] = useState(false);
	const [TypeScriptIsVissible, setTypeScriptIsVissible] = useState(false);
	const [ReactIsVissible, setReactIsVissible] = useState(false);
	const [FigmaIsVissible, setFigmaIsVissible] = useState(false);
	const [WordPressIsVissible, setWordPressIsVissible] = useState(false);
	const [ChatGPTIsVissible, setChatGPTIsVissible] = useState(false);
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
					case "Figma": {
						setFigmaIsVissible(item.isIntersecting);
						break;
					}
					case "WordPress": {
						setWordPressIsVissible(item.isIntersecting);
						break;
					}
					case "ChatGPT": {
						setChatGPTIsVissible(item.isIntersecting);
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
		observer.observe(FigmaRef.current);
		observer.observe(WordPressRef.current);
		observer.observe(ChatGPTRef.current);
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
				<img className={currentSkill === "HTML" ? "activeImage" : ""} loading="lazy" src={HTML} alt="HTML" />
			</button>

			<button
				className={CSSIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="CSS"
				ref={CSSRef}
				onMouseEnter={focusItem}>
				<img className={currentSkill === "CSS" ? "activeImage" : ""} loading="lazy" src={CSS} alt="CSS" />
			</button>

			<button
				className={SassIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="Sass"
				ref={SassRef}
				onMouseEnter={focusItem}>
				<img className={currentSkill === "Sass" ? "activeImage" : ""} loading="lazy" src={Sass} alt="Sass" />
			</button>

			<button
				className={JavaScriptIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="JavaScript"
				ref={JavaScriptRef}
				onMouseEnter={focusItem}>
				<img
					className={currentSkill === "JavaScript" ? "activeImage" : ""}
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
					className={currentSkill === "TypeScript" ? "activeImage" : ""}
					loading="lazy"
					src={TypeScript}
					alt="TypeScript"
				/>
			</button>

			<button
				className={ReactIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="React"
				ref={ReactRef}
				onMouseEnter={focusItem}>
				<img
					className={currentSkill === "React" ? "activeImage" : ""}
					loading="lazy"
					src={ReactImage}
					alt="React"
				/>
			</button>

			<button
				className={FigmaIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="Figma"
				ref={FigmaRef}
				onMouseEnter={focusItem}>
				<img className={currentSkill === "Figma" ? "activeImage" : ""} loading="lazy" src={Figma} alt="Figma" />
			</button>

			<button
				className={WordPressIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="WordPress"
				ref={WordPressRef}
				onMouseEnter={focusItem}>
				<img
					className={currentSkill === "WordPress" ? "activeImage" : ""}
					loading="lazy"
					src={WordPress}
					alt="WordPress"
				/>
			</button>

			<button
				className={ChatGPTIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="ChatGPT"
				ref={ChatGPTRef}
				onMouseEnter={focusItem}>
				<img
					className={currentSkill === "ChatGPT" ? "activeImage" : ""}
					loading="lazy"
					src={ChatGPT}
					alt="ChatGPT"
				/>
			</button>

			<button
				className={PHPIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="PHP"
				ref={PHPRef}
				onMouseEnter={focusItem}>
				<img className={currentSkill === "PHP" ? "activeImage" : ""} loading="lazy" src={PHP} alt="PHP" />
			</button>

			<button
				className={MySQLIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="MySQL"
				ref={MySQLRef}
				onMouseEnter={focusItem}>
				<img className={currentSkill === "MySQL" ? "activeImage" : ""} loading="lazy" src={MySQL} alt="MySQL" />
			</button>

			<button
				className={CIsVissible === true ? "vissibleButton" : ""}
				onFocus={handleFocus}
				data-image="C"
				ref={CRef}
				onMouseEnter={focusItem}>
				<img className={currentSkill === "C" ? "activeImage" : ""} loading="lazy" src={C} alt="C" />
			</button>
		</>
	);
}
