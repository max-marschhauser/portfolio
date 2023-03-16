// document contains data which is shown on the About page

// importing images
import javascriptCertificateSrc from "../assets/images/about/javascriptCertificate.png";
import githubSrc from "../assets/images/about/github.png";

const aboutData = [
	{
		relatedToProgramming: true,
		id: 0,
		title: "School - Programming Basics",
		imgSrc: undefined,
		link: "",
		content: [
			`2009 started learning programming ( age 14 ). First programming language was C, used it for 4 years.`,
			`2010 started learning web design ( HTML and CSS ).`,
			`2012 started using PHP and MySQL.`,
			`2017 and 2018 attended two courses related to modern web design at university.`,
		],
	},
	{
		relatedToProgramming: true,
		id: 1,
		title: "Self Taught - Advanced Programming",
		imgSrc: javascriptCertificateSrc,
		link: "https://www.freecodecamp.org/certification/fcc1fd16a03-be4d-47cc-a798-42c2fbc37651/javascript-algorithms-and-data-structures",
		content: [
			`On my own, I have learned JavaScript, TypeScript, React and other more advanced languages, mostly using a variety of internet sources souch as MDM, w3schools, stackOverflow, and Youtube tutorials.`,
			`Also, I have finished some online courses such as freeCodeCamp.`,
		],
	},

	{
		relatedToProgramming: true,
		id: 2,
		title: "Miscellaneous Things Related to Programming",
		imgSrc: undefined,
		link: "",
		content: [
			`I was an Information Technology teacher for 3 years.`,
			`I mostly taught beginner level programming in Python, introduction to HMTL,  and CSS.`,
			`I helped students build their first applications.`,
		],
	},
	{
		relatedToProgramming: true,
		id: 3,
		title: "Git and GitHub Contributions",
		imgSrc: githubSrc,
		link: "https://github.com/max-marschhauser",
		content: [
			`I have recently started using Git and GitHub to store my code.`,
			`GitHub contributions, as shown in the image above, display my motivation for programming. Every day I try to create something new and to implement new codes.`,
		],
	},
	{
		relatedToProgramming: false,
		id: 4,
		title: "Work Experience",
		imgSrc: undefined,
		link: "",
		content: [
			`4 years as a school counselor ( gained leadership and problem solving experience, managed a team of about 50 people ).`,
			`3 years as an Information Technology teacher ( improved my computer science knowledge ).`,
		],
	},
	{
		relatedToProgramming: false,
		id: 5,
		title: "Education",
		imgSrc: undefined,
		link: "",
		content: [
			`2009. - 2013. Education at Grammar school in Osijek with focus on mathematics and natural sciences ( Matematičko prirodoslovna gimnazija ).`,
			`2013. - 2018. Major in Pedagogy and History. Graduated from the Faculty of Humanities and social sciences in Osijek.`,
		],
	},
	{
		relatedToProgramming: false,
		id: 6,
		title: "My Personality",
		imgSrc: undefined,
		link: "",
		content: [
			`Very responsible.`,
			`Good workflow both in a team and individually.`,
			`Advanced Soft Skills such as interpersonal skills, time menagement, problem-solving and teamwork`,
			`Enhanced Comunication and Listening skills.`,
			`Motivated to learn and to progress for the benefit of both myself and the company.`,
		],
	},
	{
		relatedToProgramming: false,
		id: 7,
		title: "Languages and Other Skills",
		imgSrc: undefined,
		link: "",
		content: [
			`Croatian - mother tongue`,
			`English - Feel very comfortable using it both in speaking, and writing ( C1 ).`,
			`German - Know the basics but haven't used it for a few years ( B1 ).`,
			`Hungarian - can use it in a simpler conversation ( B1 ).`,
			`Driving licence ( B category ).`,
		],
	},
];

export default aboutData;
