// component for Projects page

// importing general items
import React, { useState, useEffect } from "react";

// importing data
import List from "../../../../data/projectsPageList.js";

// importing styles
import "./openedProject.scss";

export default function OpenedProject(props) {
	const { toggleModal, handleToggleModal } = props;

	let selectedItem = {};

	let itemImages = [];

	List.map((item) => {
		if (item.name === toggleModal) {
			selectedItem = item;

			for (let i = 0; i < item.img.length; i++) {
				itemImages.push(item.img[i]);
			}

			return null;
		} else return null;
	});

	let [selectedImage, setSelectedImage] = useState();

	useEffect(() => {
		setSelectedImage(selectedItem.img[0]);
	}, [selectedItem]);

	function changeImage(e) {
		setSelectedImage(itemImages[e.target.innerHTML - 1]);
	}

	return (
		<>
			<section className="openedProject">
				<div className="openedProject--sticky">
					<h3>{selectedItem.name}</h3>
					<button className="modal" onClick={handleToggleModal} data-name="closeModal">
						X
					</button>
					<img src={selectedImage} alt={selectedImage} />

					<div className="imageNumbers">
						{itemImages.length > 3 ? (
							<>
								<button onClick={changeImage}>1</button>
								<button onClick={changeImage}>2</button>
								<button onClick={changeImage}>3</button>
								<button onClick={changeImage}>4</button>
							</>
						) : itemImages.length > 2 ? (
							<>
								<button onClick={changeImage}>1</button>
								<button onClick={changeImage}>2</button>
								<button onClick={changeImage}>3</button>
							</>
						) : itemImages.length > 1 ? (
							<>
								<button onClick={changeImage}>1</button>
								<button onClick={changeImage}>2</button>
							</>
						) : itemImages.length > 0 ? (
							<button onClick={changeImage}>1</button>
						) : (
							<></>
						)}
					</div>
				</div>
			</section>
		</>
	);
}
