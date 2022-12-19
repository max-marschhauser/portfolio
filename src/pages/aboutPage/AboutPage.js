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

				<div className="aboutPage--contents">
					<h3>Related to programming</h3>

					<div className="aboutPage--contents--figures">
						<figure>
							<h4>School - Basics</h4>

							<figcaption>
								<ul>
									<li>
										First started programming age 14 in high school. First programming language was
										C... First started programming age 14 in high school. First programming language
										was C... First started programming age 14 in high school. First programming
										language was C... First started programming age 14 in high school. First
										programming language was C... First started programming age 14 in high school.
										First programming language was C...
									</li>
									<li>Started learning programming in school in 2009. at the age of 14.</li>
									<li>My first programming language was C which I used for 4 years.</li>
									<li>Next year I started learning web desing (HTML and CSS)</li>
									<li>In 2012. started using PHP and MySql.</li>
								</ul>
							</figcaption>
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
								Althought I learned beginner things in school, some advenced things I learned on my own.
								For instance, JavaScript was one of my first self tought programming languages. I used
								array of internet sources, including mdm, w3schools, stackOverflow... Image above shows
								my javaScript Certificate from freeCodeCamp.
							</figcaption>
						</figure>

						<figure>
							<h4>Miscellaneous things about me related to programming</h4>
							<figcaption>
								<ul>
									<li>At university I attended 2 courses on modern web design.</li>
									<li>Was a computer science teacher for 2 years.</li>
								</ul>
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
					</div>
				</div>
				<div className="aboutPage--contents">
					<h3>Unrelated to programming</h3>
					<div className="aboutPage--contents--figures">
						<figure>
							<h4>Education</h4>
							<figcaption>
								<ul>
									<li>3. gim OS</li>
									<li>diplomirao povijest i pedagogiju</li>
									<li>
										4 godine radio kao pedagog u osnovnoj školi - leading team of about 100 people
									</li>
								</ul>
							</figcaption>
						</figure>

						<figure>
							<h4>My Personality</h4>
							<figcaption>
								<ul>
									<li>responsibility</li>
									<li>dobro radim u timu i individualno</li>
									<li>soft skills</li>
									<li>comunication skills</li>
									<li>will to learn and advence</li>
								</ul>
							</figcaption>
						</figure>

						<figure>
							<h4>Languages</h4>
							<figcaption>
								<ul>
									<li>engleski C</li>
									<li>njemački B</li>
									<li>mađarski B</li>
								</ul>
							</figcaption>
						</figure>

						<figure>
							<h4>Razno</h4>
							<figcaption>
								<ul>
									<li>vozačka B kategorije</li>
								</ul>
							</figcaption>
						</figure>
					</div>
				</div>
			</section>
		</div>
	);
}
