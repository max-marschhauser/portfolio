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

	function HandleSearchWord(newWord) {
		setSearchWord(newWord);
	}

	function HandleSkillChange(newSkill) {
		setActiveSkill(() => {
			if (newSkill === activeSkill) {
				return "";
			} else {
				return newSkill;
			}
		});
	}

	function HandleKeywordChange(newKeyword) {
		setActiveKeyword(() => {
			if (newKeyword === activeKeyword) {
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
			<h2
				className={
					theme === "iceTheme"
						? "pageHeading iceThemeImage"
						: theme === "twilightTheme"
						? "pageHeading twilightThemeImage"
						: theme === "natureTheme"
						? "pageHeading natureThemeImage"
						: theme === "spaceTheme"
						? "pageHeading spaceThemeImage"
						: "pageHeading"
				}>
				Projects
				<p>Interested in my projects?</p>
			</h2>

			<OpenedProject
				handleToggleModal={handleToggleModal}
				modalContent={modalContent}
				toggleModal={toggleModal}
			/>

			<main className="projectsPage">
				<ProjectsList
					searchWord={searchWord}
					activeSkill={activeSkill}
					activeKeyword={activeKeyword}
					handleToggleModal={handleToggleModal}
				/>
				<Filter
					searchChanger={HandleSearchWord}
					skillChanger={HandleSkillChange}
					keywordChanger={HandleKeywordChange}
					activeSkill={activeSkill}
					activeKeyword={activeKeyword}
				/>
			</main>
		</>
	);
}
