// component for skills page, contains list of images to be displayed

// importing general items
import React, { useRef, useEffect, useState } from "react";

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

	const HTMLRef = useRef();
	const CSSRef = useRef();
	const SassRef = useRef();
	const JavaScriptRef = useRef();
	const TypeScriptRef = useRef();
	const ReactRef = useRef();
	const PHPRef = useRef();
	const MySQLRef = useRef();
	const CRef = useRef();

	const [HTMLIsVissible, setHTMLIsVissible] = useState();
	const [CSSIsVissible, setCSSIsVissible] = useState();
	const [SassIsVissible, setSassIsVissible] = useState();
	const [JavaScriptIsVissible, setJavaScriptIsVissible] = useState();
	const [TypeScriptIsVissible, setTypeScriptIsVissible] = useState();
	const [ReactIsVissible, setReactIsVissible] = useState();
	const [PHPIsVissible, setPHPIsVissible] = useState();
	const [MySQLIsVissible, setMySQLIsVissible] = useState();
	const [CIsVissible, setCIsVissible] = useState();

	useEffect(() => {
		const observer = new IntersectionObserver(callback, options);
		observer.observe(HTMLRef.current);

		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 1,
		};
	}, []);

	/*useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setHTMLIsVissible(entry.isIntersecting);
		}, (threshold = 0.5));
		observer.observe(HTMLRef.current);
	}, []);*/

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setCSSIsVissible(entry.isIntersecting);
		});
		observer.observe(CSSRef.current);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setSassIsVissible(entry.isIntersecting);
		});
		observer.observe(SassRef.current);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setJavaScriptIsVissible(entry.isIntersecting);
		});
		observer.observe(JavaScriptRef.current);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setTypeScriptIsVissible(entry.isIntersecting);
		});
		observer.observe(TypeScriptRef.current);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setReactIsVissible(entry.isIntersecting);
		});
		observer.observe(ReactRef.current);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setPHPIsVissible(entry.isIntersecting);
		});
		observer.observe(PHPRef.current);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setMySQLIsVissible(entry.isIntersecting);
		});
		observer.observe(MySQLRef.current);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setCIsVissible(entry.isIntersecting);
		});
		observer.observe(CRef.current);
	}, []);

	return (
		<>
			<img
				ref={HTMLRef}
				loading="lazy"
				className={(currentSkill === "HTML" ? "activeImage" : "", HTMLIsVissible === true ? "vissible" : "")}
				src={HTML}
				alt="HTML"
				onMouseEnter={handleMouseOver}
			/>
			<img
				ref={CSSRef}
				loading="lazy"
				className={(currentSkill === "CSS" ? "activeImage" : "", CSSIsVissible === true ? "vissible" : "")}
				src={CSS}
				alt="CSS"
				onMouseEnter={handleMouseOver}
			/>
			<img
				ref={SassRef}
				loading="lazy"
				className={(currentSkill === "Sass" ? "activeImage" : "", SassIsVissible === true ? "vissible" : "")}
				src={Sass}
				alt="Sass"
				onMouseEnter={handleMouseOver}
			/>
			<img
				ref={JavaScriptRef}
				loading="lazy"
				className={
					(currentSkill === "JavaScript" ? "activeImage" : "",
					JavaScriptIsVissible === true ? "vissible" : "")
				}
				src={JavaScript}
				alt="JavaScript"
				onMouseEnter={handleMouseOver}
			/>
			<img
				ref={TypeScriptRef}
				loading="lazy"
				className={
					(currentSkill === "TypeScript" ? "activeImage" : "",
					TypeScriptIsVissible === true ? "vissible" : "")
				}
				src={TypeScript}
				alt="TypeScript"
				onMouseEnter={handleMouseOver}
			/>
			<img
				ref={ReactRef}
				loading="lazy"
				className={(currentSkill === "React" ? "activeImage" : "", ReactIsVissible === true ? "vissible" : "")}
				src={ReactImage}
				alt="React"
				onMouseEnter={handleMouseOver}
			/>

			<img
				ref={PHPRef}
				loading="lazy"
				className={(currentSkill === "PHP" ? "activeImage" : "", PHPIsVissible === true ? "vissible" : "")}
				src={PHP}
				alt="PHP"
				onMouseEnter={handleMouseOver}
			/>
			<img
				ref={MySQLRef}
				loading="lazy"
				className={(currentSkill === "MySQL" ? "activeImage" : "", MySQLIsVissible === true ? "vissible" : "")}
				src={MySQL}
				alt="MySQL"
				onMouseEnter={handleMouseOver}
			/>
			<img
				ref={CRef}
				loading="lazy"
				className={(currentSkill === "C" ? "activeImage" : "", CIsVissible === true ? "vissible" : "")}
				src={C}
				alt="C"
				onMouseEnter={handleMouseOver}
			/>
		</>
	);
}
