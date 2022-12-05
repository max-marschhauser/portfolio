// document contains data which is shown on the Projects page

const projects = [
	{
		id: 0,
		img: "imgurl",
		name: "CAVIA Tattoo Studio",
		technology: "HTML, CSS, JavaScript",
		description:
			"Brochure page for local Tattoo Studio built using HTML, CSS and JavaScript. First real project in a long time, used as warm up for future projects. Page shows information about local Tattoo business, shows authors previous works and other things related to tattooing.",
		githubLink: "https://github.com/max-marschhauser/CAVIA-Tattoo-Studio",
		codepenLink: "www.link.com",
	},
	{
		id: 1,
		img: "imgurl",
		name: "Digital Store",
		technology: "HTML, CSS, Sass, JavaScript",
		description:
			"Digital store built using JavaScript, HTML and SCSS. Data is stored in an object file and imported when needed. User can filter or sort displayed items and add items to the cart.",
		githubLink: "https://github.com/max-marschhauser/Digital-Store",
		codepenLink: "www.link.com",
	},
	{
		id: 2,
		img: "imgurl",
		name: "Loading Spinner",
		technology: "HTML, CSS",
		description: "Good looking Loading Spinner built with CSS. Can be used on various sites that require loading.",
		githubLink: "https://github.com/max-marschhauser/Loading-Spinner",
		codepenLink: "www.link.com",
	},
	{
		id: 3,
		img: "imgurl",
		name: "Guinea Pig Doctor",
		technology: "HTML, CSS, JavaScript",
		description:
			"Brochure page for local veterinarian specialized in guine pig treatment built with HTML, CSS and JS. Fairly simple page built for fun.",
		githubLink: "https://github.com/max-marschhauser/Guinea-Pig-Doctor",
		codepenLink: "www.link.com",
	},
	{
		id: 4,
		img: "imgurl",
		name: "Pokemon App",
		technology: "HTML, CSS, Scss, JavaScript, React",
		description:
			"Pokemon game using React and SCSS. Uses object database to display information about items. Game generates random Pokemon name using two data files (one is array of objects which contains names and informations about pokemons, and the another is object which contains links to pokemon images). User gets one randomly generated pokemon name and four randomly generated pokemon images. User has to click on the right pokemon image. Game tracks users score and combo. Added Pokemon theme song. Game currently supports Pokemon from the first generation (first 151 Pokemon)",
		githubLink: "https://github.com/max-marschhauser/pokemon-app",
		codepenLink: "www.link.com",
	},
	{
		id: 5,
		img: "imgurl",
		name: "Portfolio",
		technology: "HTML, CSS, Sass, JavaScript, React",
		description:
			"Portfolio page which displays my web development skills, my up-to-date work, and functions as my CV. Built using React.",
		githubLink: "https://github.com/max-marschhauser/portfolio",
		codepenLink: "www.link.com",
	},
	{
		id: 6,
		img: "imgurl",
		name: "Rock-Paper-Scissors",
		technology: "HTML, CSS, JavaScript",
		description: "Rock-Paper-Scissors game built using JavaScript. Fairly simple game built for fun.",
		githubLink: "https://github.com/max-marschhauser/Rock-Paper-Scissors",
		codepenLink: "www.link.com",
	},
	{
		id: 7,
		img: "imgurl",
		name: "To-Do List",
		technology: "HTML, JavaScript",
		description: "To-Do list built using JavaScript and HTML. Very simple JS to-do list built for fun.",
		githubLink: "https://github.com/max-marschhauser/ToDo-List",
		codepenLink: "www.link.com",
	},
	{
		id: 8,
		img: "imgurl",
		name: "Yu-Gi-Oh Card Search",
		technology: "HTML, CSS, Sass, JavaScript, React",
		description:
			"Single Page App using React and SCSS. Uses external API to display information about items. Uses LocalStorage to store items in the cart. Users can filter and sort through Yu-Gi-Oh cards that are available in Yu-Gi-Oh database API (https://ygoprodeck.com/api-guide/). Currently this page only displays cards released till 1. january 2008., plan is to add later cards in the future. Users can add their favorite cards in cart and purchase them. LocalStorage ensures that cards will remain in the cart when user returns to the page.",
		githubLink: "https://github.com/max-marschhauser/yugioh-card-search",
		codepenLink: "www.link.com",
	},
];

export default projects;
