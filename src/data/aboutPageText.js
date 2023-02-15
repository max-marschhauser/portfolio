// document contains data which is shown on the About page

// importing images

import javascriptCertificateSrc from "../assets/images/about/javascriptCertificate.png";
import githubSrc from "../assets/images/about/github.png";

const aboutData = [
	{
		relatedToProgramming: true,
		title: "School - Programming Basics",
		imgSrc: undefined,
		link: "",
		content: [
			`2009. started learning programming (age 14). First programming language was C, used it for 4 years.`,
			`2010. started learning web desing (HTML and CSS).`,
			`2012. started using PHP and MySql.`,
			`2017. and 2018. in university attended two courses related to modern web design.`,
		],
	},
	{
		relatedToProgramming: true,
		title: "Self Taught - Advanced Programming",
		imgSrc: javascriptCertificateSrc,
		link: "https://www.freecodecamp.org/certification/fcc1fd16a03-be4d-47cc-a798-42c2fbc37651/javascript-algorithms-and-data-structures",
		content: [
			`On my own I learned JavaScript, TypeScript, React and other more advanced languages, mostly using array of internet sources souch as MDM, w3schools, stackOverflow, and Youtube tutorials.`,
			`Also, finished some online courses such as freeCodeCamp.`,
		],
	},

	{
		relatedToProgramming: true,
		title: "Miscellaneous Things Related to Programming",
		imgSrc: undefined,
		link: "",
		content: [
			`I was a computer science teacher for 3 years.`,
			`Mostly taught beginner level programming in Python, also introduction to HMTL and CSS.`,
			`Helped students build their first Applications.`,
		],
	},
	{
		relatedToProgramming: true,
		title: "Git and GitHub Contributions",
		imgSrc: githubSrc,
		link: "https://github.com/max-marschhauser",
		content: [
			`Only recently did I start using Git and GitHub to store my code.`,
			`GitHub contributions from the images above show my motivation for programming. Every day I try to create something new, to implement some new code.`,
		],
	},
	{
		relatedToProgramming: false,
		title: "Education",
		imgSrc: undefined,
		link: "",
		content: [
			`2009. - 2013. III. gymnasium in Osijek (Mathematics and Natural Sciences).`,
			`2013. - 2018. Graduated in History and Pedagogy at the Faculty of Philosophy in Osijek.`,
		],
	},
	{
		relatedToProgramming: false,
		title: "Work Experience",
		imgSrc: undefined,
		link: "",
		content: [
			`4 years as a school counselor (gained leadership experience and team work related problem solving experience from leading a team of about 50 people).`,
			`3 years as a computer science teacher (improved my computer science knowledge).`,
		],
	},
	{
		relatedToProgramming: false,
		title: "My Personality",
		imgSrc: undefined,
		link: "",
		content: [
			`Very responsible.`,
			`Good workflow both in a team and individualy.`,
			`Advanced Soft Skills such as interpersonal skills, time menagement, problem-solving orientation...`,
			`Enhanced Comunication and Listening skills.`,
			`Will to learn and to advance for the benefit of both myself and the company.`,
		],
	},
	{
		relatedToProgramming: false,
		title: "Languages and Other Skills",
		imgSrc: undefined,
		link: "",
		content: [
			`Croatian - mother tongue`,
			`English - Feel very comfortable with using it in both speaking and writing form.`,
			`German - Know the basics of language but didn't use it for a few years, would need some catch-up to be completely comfortable with using it.`,
			`Hungarian - B1 level, could use it in a simpler conversation.`,
			`Driving licence for a car (B category).`,
		],
	},
];

export default aboutData;
