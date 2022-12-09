// about page, contains basic informations about myself

// importing general items
import React from "react";

// importing styles
import "./aboutPage.scss";

// importing images
import github from "../../assets/images/about/github.png";
import JavaScriptCertificate from "../../assets/images/about/javascriptCertificate.png";

export default function AboutPage() {
	return (
		<div className="main">
			<section className="aboutPage">
				<h2 className="pageHeading">About</h2>
				<div className="aboutPage__container">
					<div className="aboutPage--contents">
						<h3>Related to programming</h3>
						<p>First started programming age 14 in high school. First programming language was C...</p>

						<div className="aboutPage--contents--figures">
							<figure>
								<h4>School - Basics</h4>
								<a href="link" target="_blank" rel="noreferrer">
									<img src="" alt="" />
								</a>
								<figcaption></figcaption>
							</figure>

							<figure>
								<h4>Self Taught - Advanced</h4>
								<a
									href="https://www.freecodecamp.org/certification/fcc1fd16a03-be4d-47cc-a798-42c2fbc37651/javascript-algorithms-and-data-structures"
									target="_blank"
									rel="noreferrer">
									<img src={JavaScriptCertificate} alt="JavaScript Certificate" />
								</a>
								<figcaption>
									Althought I learned beginner things in school, some advenced things I learned on my
									own. For instance, JavaScript was one of my first self tought programming languages.
									I used array of internet sources, including mdm, w3schools, stackOverflow... Image
									above shows my javaScript Certificate from freeCodeCamp.
								</figcaption>
							</figure>

							<figure>
								<h4>GitHub Contributions</h4>
								<a href="https://github.com/max-marschhauser" target="_blank" rel="noreferrer">
									<img src={github} alt="github activities" />
								</a>
								<figcaption>
									Only recently did I start using Git to store my code so it may look like I am new to
									programming. GitHub contributions from the images above show my motivation for
									programming. Every day I try to create something new, to implement some new code.
								</figcaption>
							</figure>

							<figure>
								<h4>Miscellaneous</h4>
								<a href="link" target="_blank" rel="noreferrer">
									<img src="" alt="" />
								</a>
								<figcaption>
									Faks 2 kolegija o web designu, Informatics teacher for 2 years, projects for friends
								</figcaption>
							</figure>
						</div>
					</div>
					<div className="aboutPage--contents">
						<h3>Unrelated to programming</h3>
					</div>
				</div>
			</section>
		</div>
	);
}
