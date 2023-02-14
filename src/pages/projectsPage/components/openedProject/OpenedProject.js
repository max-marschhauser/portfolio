// component for Projects page

// importing general items
import React from "react";

// importing data
import List from "../../../../data/projectsPageList.js";

// importing styles
import "./openedProject.scss";

export default function OpenedProject(props) {
	const { openedProject, handleProjectClick } = props;

	let selectedItem = {};

	List.map((item) => {
		if (item.name === openedProject) {
			selectedItem = item;
			return null;
		} else return null;
	});

	return (
		<>
			<div>{selectedItem.name}</div>
			<img src={selectedItem.img[0]} alt={selectedItem.name} loading="lazy" />
			<div>{selectedItem.technology}</div>
			<div>{selectedItem.description}</div>
			<div>{selectedItem.githubLink}</div>
			<div>{selectedItem.codepenLink}</div>
			<div className="modal" onClick={handleProjectClick}>
				X
			</div>
		</>
	);
}
