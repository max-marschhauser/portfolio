// component for Projects page

// importing general items
import React, { useEffect, useState, useMemo } from "react";

// importing data
import List from "../../../../data/projectsPageList.js";

// importing styles
import "./openedProject.scss";

export default function OpenedProject(props) {
	const { toggleModal, handleToggleModal, modalContent } = props;

	let [imageNumber, setImageNumber] = useState(0);

	let selectedItemObject = useMemo(() => {}, []);

	let numberOfImages = 0;

	if (toggleModal === true) {
		List.forEach((item) => {
			if (item.name === modalContent) {
				selectedItemObject = item;

				numberOfImages = item.img.length;
			}
		});
	}

	useEffect(() => {
		setImageNumber(0);
	}, [selectedItemObject]);

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
							<svg viewBox="0 0 512 512" data-name="closeModal">
								<path
									data-name="closeModal"
									d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm86.63 272L320 342.63l-64-64-64 64L169.37 320l64-64-64-64L192 169.37l64 64 64-64L342.63 192l-64 64z"
								/>
							</svg>
						</button>

						<h3>{selectedItemObject.name}</h3>

						<div className="imageContainer">
							<div className="operationContainer" id="subtract">
								<button onClick={changeImage} data-operation="subtract">
									&lt;
								</button>
							</div>
							<img
								id="image"
								src={selectedItemObject.img[imageNumber]}
								alt="Selected Project Images"
								loading="lazy"
							/>
							<div className="operationContainer" id="add">
								<button onClick={changeImage} data-operation="add">
									&gt;
								</button>
							</div>
						</div>
						<p>{selectedItemObject.imgDesc[imageNumber]}</p>
					</dialog>
				</section>
			) : (
				<></>
			)}
		</>
	);
}
