// component for Projects page

// importing general items
import React from "react";

// importing data
import List from "../../../../data/projectsPageList.js";

// importing styles
import "./openedProject.scss";

export default function OpenedProject(props) {
	const { toggleModal, handleToggleModal, modalContent } = props;

	let selectedItemObject = {};

	if (toggleModal === true) {
		List.forEach((item) => {
			if (item.name === modalContent) {
				selectedItemObject = item;
			}
		});
	}

	return (
		<>
			{toggleModal === true ? (
				<section className="openedProject">
					<dialog open>
						<button className="closeButton" onClick={handleToggleModal} data-name="closeModal">
							<ion-icon name="close-circle-sharp" onClick={handleToggleModal} data-name="closeModal" />
						</button>

						<h3>{selectedItemObject.name}</h3>

						{selectedItemObject.img.length > 0 ? (
							<img src={selectedItemObject.img[0]} alt="neki tekst" />
						) : (
							<></>
						)}
					</dialog>
				</section>
			) : (
				<></>
			)}
		</>
	);
}
