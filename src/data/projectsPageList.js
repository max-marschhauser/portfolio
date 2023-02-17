// document contains data which is shown on the Projects page

// importing images

import caviaTattooStudio1 from "../assets/images/projects/CAVIA-Tattoo-Studio/cavia-tattoo-studio1.png";
import caviaTattooStudio2 from "../assets/images/projects/CAVIA-Tattoo-Studio/cavia-tattoo-studio2.png";
import caviaTattooStudio3 from "../assets/images/projects/CAVIA-Tattoo-Studio/cavia-tattoo-studio3.png";

import digitalStore1 from "../assets/images/projects/Digital-Store/digital-store1.png";
import digitalStore2 from "../assets/images/projects/Digital-Store/digital-store2.png";
import digitalStore3 from "../assets/images/projects/Digital-Store/digital-store3.png";

import gradientHoverCard1 from "../assets/images/projects/Gradient-Hover-Card/gradient-hover-card1.png";
import gradientHoverCard2 from "../assets/images/projects/Gradient-Hover-Card/gradient-hover-card2.png";

import guineaPigDoctor1 from "../assets/images/projects/Guinea-Pig-Doctor/guinea-pig-doctor1.png";
import guineaPigDoctor2 from "../assets/images/projects/Guinea-Pig-Doctor/guinea-pig-doctor2.png";

import lightdarkTheme1 from "../assets/images/projects/Light-Dark-Theme/light-dark-theme1.png";
import lightdarkTheme2 from "../assets/images/projects/Light-Dark-Theme/light-dark-theme2.png";
import lightdarkTheme3 from "../assets/images/projects/Light-Dark-Theme/light-dark-theme3.png";

import loadingSpinner1 from "../assets/images/projects/Loading-Spinner/loading-spinner1.png";
import loadingSpinner2 from "../assets/images/projects/Loading-Spinner/loading-spinner2.png";

import hamburgerExample1 from "../assets/images/projects/Hamburger-Example/hamburger-example1.png";
import hamburgerExample2 from "../assets/images/projects/Hamburger-Example/hamburger-example2.png";

import multistepForm1 from "../assets/images/projects/Multistep-Form/multistep-form1.png";
import multistepForm2 from "../assets/images/projects/Multistep-Form/multistep-form2.png";
import multistepForm3 from "../assets/images/projects/Multistep-Form/multistep-form3.png";

import pokemonApp1 from "../assets/images/projects/Pokemon-App/pokemon-app1.png";
import pokemonApp2 from "../assets/images/projects/Pokemon-App/pokemon-app2.png";

import portfolioPage1 from "../assets/images/projects/Portfolio-Page/portfolio-page1.png";
import portfolioPage2 from "../assets/images/projects/Portfolio-Page/portfolio-page2.png";
import portfolioPage3 from "../assets/images/projects/Portfolio-Page/portfolio-page3.png";

import rockPaperScissors1 from "../assets/images/projects/Rock-Paper-Scissors/rock-paper-scissors1.png";
import rockPaperScissors2 from "../assets/images/projects/Rock-Paper-Scissors/rock-paper-scissors2.png";

import toDo1 from "../assets/images/projects/To-Do/to-do1.png";
import toDo2 from "../assets/images/projects/To-Do/to-do2.png";

import yuGiOhCardSearch1 from "../assets/images/projects/Yu-Gi-Oh-Card-Search/yu-gi-oh-card-search1.png";
import yuGiOhCardSearch2 from "../assets/images/projects/Yu-Gi-Oh-Card-Search/yu-gi-oh-card-search2.png";
import yuGiOhCardSearch3 from "../assets/images/projects/Yu-Gi-Oh-Card-Search/yu-gi-oh-card-search3.png";
import yuGiOhCardSearch4 from "../assets/images/projects/Yu-Gi-Oh-Card-Search/yu-gi-oh-card-search4.png";

const projectsData = [
	{
		id: 0,
		img: [caviaTattooStudio1, caviaTattooStudio2, caviaTattooStudio3],
		name: "CAVIA Tattoo Studio",
		technology: "HTML, CSS, JavaScript",
		description:
			"Responsive brochure page for local Tattoo Studio built using HTML, CSS and JavaScript. First bigger project in a long time, used as warm up for future projects. Page shows information about local Tattoo business, shows authors previous works and other things related to tattooing.",
		githubLink: "https://github.com/max-marschhauser/CAVIA-Tattoo-Studio",
		codepenLink: "",
	},
	{
		id: 1,
		img: [digitalStore1, digitalStore2, digitalStore3],
		name: "Digital Store",
		technology: "HTML, CSS, Sass, JavaScript",
		description:
			"Digital store built using JavaScript, HTML and SCSS. Responsive eCommerce Single-page app. Also can be used as a brochure page for business. Data is stored in an object file and imported when needed. User can filter or sort displayed items and add items to the cart.",
		githubLink: "https://github.com/max-marschhauser/Digital-Store",
		codepenLink: "",
	},
	{
		id: 2,
		img: [gradientHoverCard1, gradientHoverCard2],
		name: "Gradient Hover Card",
		technology: "HTML, CSS, JavaScript",
		description:
			"Cool looking gradient hover card built using plain JS, CSS and HTML. Component intended to be used in other projects.",
		githubLink: "https://github.com/max-marschhauser/gradient-hover-card",
		codepenLink: "https://codepen.io/max-marschhauser/pen/WNgNrVO",
	},
	{
		id: 3,
		img: [guineaPigDoctor1, guineaPigDoctor2],
		name: "Guinea Pig Doctor",
		technology: "HTML, CSS, JavaScript",
		description:
			"Responsive brochure page for local veterinarian specialized in guinea pig treatment built with HTML, CSS and JS. Fairly simple page built for fun.",
		githubLink: "https://github.com/max-marschhauser/Guinea-Pig-Doctor",
		codepenLink: "",
	},
	{
		id: 4,
		img: [lightdarkTheme1, lightdarkTheme2, lightdarkTheme3],
		name: "Light-dark Theme",
		technology: "HTML, CSS, React",
		description:
			"Sample component for light-dark theme button which can be used on various pages. Built using React and CSS. Component intended to be used in other projects.",
		githubLink: "https://github.com/max-marschhauser/light-dark-theme",
		codepenLink: "",
	},
	{
		id: 5,
		img: [loadingSpinner1, loadingSpinner2],
		name: "Loading Spinner",
		technology: "HTML, CSS",
		description:
			"Good looking Loading Spinner built with CSS. This component can be used on various sites that require loading.",
		githubLink: "https://github.com/max-marschhauser/Loading-Spinner",
		codepenLink: "https://codepen.io/max-marschhauser/pen/oNPNxbv",
	},
	{
		id: 6,
		img: [hamburgerExample1, hamburgerExample2],
		name: "Hamburger Examples",
		technology: "HTML, CSS, JavaScript, SVG",
		description:
			"Examples of Hamburger buttons used for opening navbars on small screen devices. Responsive component which can be used in future projects. Built using HTML, CSS, JavaScript and SVG.",
		githubLink: "https://github.com/max-marschhauser/hamburger-examples",
		codepenLink: "https://codepen.io/max-marschhauser/pen/MWqWybB",
	},
	{
		id: 7,
		img: [multistepForm1, multistepForm2, multistepForm3],
		name: "Multistep Form",
		technology: "HTML, CSS, JavaScript",
		description: "Sample code for multistep form. Component intended to be used in other projects.",
		githubLink: "https://github.com/max-marschhauser/Multistep-Form",
		codepenLink: "https://codepen.io/max-marschhauser/pen/LYJYNVK",
	},
	{
		id: 8,
		img: [pokemonApp1, pokemonApp2],
		name: "Pokemon App",
		technology: "HTML, CSS, Sass, JavaScript, React",
		description:
			"Pokemon game built using React and SCSS. Uses API data stored in objects to display information about items. Single-page app. Game generates random Pokemon name using two data files (one is array of objects which contains names and informations about pokemons, and the another is object which contains links to pokemon images). User gets one randomly generated pokemon name and four randomly generated pokemon images. User has to click on the right pokemon image. Game tracks users score and combo. Added Pokemon theme song as a background music. Game currently supports Pokemon from the first generation (first 151 Pokemon).",
		githubLink: "https://github.com/max-marschhauser/pokemon-app",
		codepenLink: "",
	},
	{
		id: 9,
		img: [portfolioPage1, portfolioPage2, portfolioPage3],
		name: "Portfolio",
		technology: "HTML, CSS, Sass, JavaScript, React",
		description:
			"Portfolio page which displays my web development skills, my completed projects, and functions as my CV page. Responsive Single-page app. Uses data stored in objects to display information on the page. Built using React and SCSS.",
		githubLink: "https://github.com/max-marschhauser/portfolio",
		codepenLink: "",
	},
	{
		id: 10,
		img: [rockPaperScissors1, rockPaperScissors2],
		name: "Rock-Paper-Scissors",
		technology: "HTML, CSS, JavaScript",
		description: "Rock-Paper-Scissors responsive game built using JavaScript. Fairly simple game built for fun.",
		githubLink: "https://github.com/max-marschhauser/Rock-Paper-Scissors",
		codepenLink: "https://codepen.io/max-marschhauser/pen/rNrEbjZ",
	},
	{
		id: 11,
		img: [toDo1, toDo2],
		name: "To-Do List",
		technology: "HTML, JavaScript",
		description: "To-Do list built using JavaScript and HTML. Very simple JS to-do list built for fun.",
		githubLink: "https://github.com/max-marschhauser/ToDo-List",
		codepenLink: "https://codepen.io/max-marschhauser/pen/ababNzX",
	},
	{
		id: 12,
		img: [yuGiOhCardSearch1, yuGiOhCardSearch2, yuGiOhCardSearch3, yuGiOhCardSearch4],
		name: "Yu-Gi-Oh Card Search",
		technology: "HTML, CSS, Sass, JavaScript, React",
		description:
			"Responsive Single-page App eCommerce page built using React and SCSS. Uses external API to fetch and display data about items. Uses LocalStorage to store items in the cart. Page can be used as a brochure page. Users can filter and sort through Yu-Gi-Oh cards that are available in Yu-Gi-Oh database API. Currently this page only displays cards released till 1. january 2008., plan is to add later cards in the future. Users can add their favorite cards in cart and purchase them. LocalStorage ensures that cards will remain in the cart when user returns to the page.",
		githubLink: "https://github.com/max-marschhauser/yugioh-card-search",
		codepenLink: "",
	},
];

export default projectsData;
