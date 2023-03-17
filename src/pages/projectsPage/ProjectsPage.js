// projects page, contains list of my projects and the abillity to filter and sort them

// importing general items
import React, { useState, useEffect } from "react";

// importing styles
import "./projectsPage.scss";

//import components
import ProjectsList from "./components/projectsList/ProjectsList.js";
import Filter from "./components/filter/Filter.js";
import OpenedProject from "./components/openedProject/OpenedProject.js";

export default function ProjectsPage(props) {
	let { handlePageChange, theme } = props;
	useEffect(() => {
		handlePageChange("projects");
	}, [handlePageChange]);

	const [searchWord, setSearchWord] = useState("");
	const [activeSkill, setActiveSkill] = useState("");
	const [activeKeyword, setActiveKeyword] = useState("");

	function handleSearchWordChange(newWord) {
		setSearchWord(newWord);
	}

	function handleSkillChange(newSkill) {
		setActiveSkill((prev) => {
			if (prev === newSkill) {
				return "";
			} else {
				return newSkill;
			}
		});
	}

	function handleKeywordChange(newKeyword) {
		setActiveKeyword((prev) => {
			if (prev === newKeyword) {
				return "";
			} else {
				return newKeyword;
			}
		});
	}

	let [toggleModal, setToggleModal] = useState(false);
	let [modalContent, setModalContent] = useState("");

	function handleToggleModal(e) {
		let name = e.target.dataset.name;

		if (name === "closeModal") {
			setToggleModal(false);
			setModalContent("");
		} else {
			setToggleModal(true);
			setModalContent(name);
		}
	}

	return (
		<>
			<div
				onKeyDown={(e) => {
					if (e.key === "Escape") {
						setToggleModal(false);
						setModalContent("");
					}
				}}>
				<div
					className={
						theme === "iceTheme" || theme === "spaceTheme"
							? "pageHeading darkTheme"
							: theme === "twilightTheme" || theme === "natureTheme"
							? "pageHeading lightTheme"
							: "pageHeading"
					}>
					<h2>Projects</h2>
					<p>Interested in my projects?</p>
				</div>

				<OpenedProject
					handleToggleModal={handleToggleModal}
					modalContent={modalContent}
					toggleModal={toggleModal}
				/>

				<main>
					<ProjectsList
						searchWord={searchWord}
						activeSkill={activeSkill}
						activeKeyword={activeKeyword}
						handleToggleModal={handleToggleModal}
					/>
					<Filter
						handleSearchWordChange={handleSearchWordChange}
						handleSkillChange={handleSkillChange}
						handleKeywordChange={handleKeywordChange}
						activeSkill={activeSkill}
						activeKeyword={activeKeyword}
					/>
				</main>
			</div>
		</>
	);
}
