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
			`Started learning programming in school in 2009. at the age of 14.`,
			`First programming language was C.`,
			`Used it for 4 years, learned programming basics with it.`,
			`2010. started learning web desing (HTML and CSS).`,
			`2012. started using PHP and MySql, mainly for connecting web pages with databases.`,
			`In university attended two courses related to modern web design (2017. and 2018.).`,
		],
	},
	{
		relatedToProgramming: true,
		title: "Self Taught - Advanced Programming",
		imgSrc: javascriptCertificateSrc,
		link: "https://www.freecodecamp.org/certification/fcc1fd16a03-be4d-47cc-a798-42c2fbc37651/javascript-algorithms-and-data-structures",
		content: [
			`JavaScript, TypeScript, React and other more advenced topics I learned on my own, using array of internet sources souch as MDM, w3schools, stackOverflow, and Youtube tutorials.`,
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
			`Introducing students with programming.`,
			`Mostly taught beginner level programming with languages such as Python for older students and Scratch for younger ones, also introduction to HMTL and CSS.`,
			`Helped students build their first Applications.`,
			`Also tought about other things related to computer science.`,
		],
	},
	{
		relatedToProgramming: true,
		title: "Git and GitHub Contributions",
		imgSrc: githubSrc,
		link: "https://github.com/max-marschhauser",
		content: [
			`Only recently did I start using Git and GitHub to store my code.`,
			`GitHub contributions from the images above show my motivation for programming.`,
			`Every day I try to create something new, to implement some new code.`,
		],
	},
	{
		relatedToProgramming: false,
		title: "Education",
		imgSrc: undefined,
		link: "",
		content: [
			`Studied at the III. gymnasium (Mathematics and Natural Sciences) in Osijek (2009. - 2013.).`,
			`Graduated in History and Pedagogy at the Faculty of Philosophy in Osijek (2013. - 2018.).`,
		],
	},
	{
		relatedToProgramming: false,
		title: "Work Experience",
		imgSrc: undefined,
		link: "",
		content: [
			`4 years as a school counselor in elementary school, gained leadership experience and team work related problem solving experience from leading a team of about 50 people.`,
			`3 years as a computer science teacher in the same school, where I even more improved my computer science knowledge.`,
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
			`Good Soft Skills such as interpersonal skills, time menagement, problem-solving oriented, empathy...`,
			`Advanced Comunication and Listening skills.`,
			`Have will to learn and advance for the benefit of both the company and myself.`,
		],
	},
	{
		relatedToProgramming: false,
		title: "Languages and Other Skills",
		imgSrc: undefined,
		link: "",
		content: [
			`Feel very comfortable with using English languange in both the speaking and writing form.`,
			`Know the basics of German language but didn't use it for a few years, would need some catch-up to be completely comfortable with using it.`,
			`Worked in a Hungarian school and learned Hungarian language to the B1 level, could use it in a simpler conversation.`,
			`Driving licence B category (private car).`,
		],
	},
];

export default aboutData;
