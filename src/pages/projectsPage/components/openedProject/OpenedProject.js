// component for Projects page

// importing general items
import React, { useState } from "react";

// importing data
import List from "../../../../data/projectsPageList.js";

// importing styles
import "./openedProject.scss";

export default function OpenedProject(props) {
	const { toggleModal, handleToggleModal, modalContent } = props;

	let selectedItemObject = {};
	let [imageNumber, setImageNumber] = useState(0);

	let numberOfImages = 0;

	if (toggleModal === true) {
		List.forEach((item) => {
			if (item.name === modalContent) {
				selectedItemObject = item;

				numberOfImages = item.img.length;
			}
		});
	}

	function changeImage(e) {
		let operation = e.target.dataset.operation;
		if (operation === "add") {
			if (imageNumber === numberOfImages - 1) {
				setImageNumber(0);
			} else {
				setImageNumber(imageNumber + 1);
			}
		}
		if (operation === "subtract") {
			if (imageNumber === 0) {
				setImageNumber(numberOfImages - 1);
			} else {
				setImageNumber(imageNumber - 1);
			}
		}
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

						<div className="imageContainer">
							<div className="operationContainer" id="subtract">
								<button onClick={changeImage} data-operation="subtract">
									-
								</button>
							</div>
							<img id="image" src={selectedItemObject.img[imageNumber]} alt="Selected Project Images" />
							<div className="operationContainer" id="add">
								<button onClick={changeImage} data-operation="add">
									+
								</button>
							</div>
						</div>
					</dialog>
				</section>
			) : (
				<></>
			)}
		</>
	);
}
