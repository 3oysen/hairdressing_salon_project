import React from "react";
import "./about.css";

export default function About() {
	return (
		<div className="justify-container">
			<div className="content-container">
				<div className="row-container column-container column-divider">
					<div className="about-img"></div>
					<div className="about-right-section">
						<div className="content-title style-title">
							WELCOME TO THE HAIR SALON
						</div>
						<div className="about-description">
							<div>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an.
							</div>
							<button class="btn">read more</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
