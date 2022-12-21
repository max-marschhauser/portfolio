// document contains data which is shown on the About page

// importing images

import javascriptCertificateSrc from "../assets/images/about/javascriptCertificate.png";
import githubSrc from "../assets/images/about/github.png";

const aboutData = [
	{
		relatedToProgramming: true,
		title: "School - Basics",
		imgSrc: undefined,
		link: "",
		content: [
			"First started programming age 14 in high school. First programming language was C... First started programming age 14 in high school. First programming language",
			"Started learning programming in school in 2009. at the age of 14.",
			"My first programming language was C which I used for 4 years.",
			"Next year I started learning web desing (HTML and CSS)",
			"In 2012. started using PHP and MySql.",
		],
	},
	{
		relatedToProgramming: true,
		title: "Self Taught - Advanced",
		imgSrc: javascriptCertificateSrc,
		link: "",
		content: [
			"Althought I learned beginner things in school, some advenced things I learned on my own. For instance, JavaScript was one of my first self tought programming languages. I used array of internet sources, including mdm, w3schools, stackOverflow... Image above shows my javaScript Certificate from freeCodeCamp.",
		],
	},
	{
		relatedToProgramming: true,
		title: "Miscellaneous things about me related to programming",
		imgSrc: undefined,
		link: "",
		content: [
			"At university I attended 2 courses on modern web design.",
			"Was a computer science teacher for 2 years.",
		],
	},
	{
		relatedToProgramming: true,
		title: "GitHub Contributions",
		imgSrc: githubSrc,
		link: "",
		content: [
			"Only recently did I start using Git to store my code so it may look like I am new to programming. GitHub contributions from the images above show my motivation for programming. Every day I try to create something new, to implement some new code.",
		],
	},
	{
		relatedToProgramming: false,
		title: "Education",
		imgSrc: undefined,
		link: "",
		content: [
			"3. gim OS",
			"diplomirao povijest i pedagogiju",
			"4 godine radio kao pedagog u osnovnoj školi - leading team of about 100 people",
		],
	},
	{
		relatedToProgramming: false,
		title: "My Personality",
		imgSrc: undefined,
		link: "",
		content: [
			"responsibility",
			"dobro radim u timu i individualno",
			"soft skills",
			"comunication skills",
			"will to learn and advence",
		],
	},
	{
		relatedToProgramming: false,
		title: "Languages",
		imgSrc: undefined,
		link: "",
		content: ["engleski C", "njemački B", "mađarski B"],
	},
	{
		relatedToProgramming: false,
		title: "Razno",
		imgSrc: undefined,
		link: "",
		content: ["vozačka B kategorije"],
	},
];

export default aboutData;
