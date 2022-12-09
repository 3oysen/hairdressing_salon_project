import React from "react";
import "./ClientComments.css";
import Box from "@mui/material/Box";

export default function ClientComments() {
	return (
		<div className="justify-container">
			<div className="content-container">
				<p className="content-title style-title ">WHAT OUR CLIENT SAYS</p>
				<div className="row-container column-container client-divider">
					<div className="description">
						<Box sx={{ bgcolor: "background", width: 1, height: 1, mt: 4 }}>
							<p className="wrapper">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								volutpat nunc sed tellus accumsan efficitur. Sed sed ipsum et
								libero pharetra egestas. Praesent porta faucibus lacus a
								aliquet. Aliquam tincidunt arcu velit, ut finibus odio suscipit
								nec.
							</p>

							<div className="row-container client-name">
								<div className="client-img client-img1"></div>
								<p>Anastasia Rose</p>
							</div>
						</Box>
					</div>
					<div className="description">
						<Box sx={{ bgcolor: "background", width: 1, height: 1, mt: 4 }}>
							<p className="wrapper">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								volutpat nunc sed tellus accumsan efficitur. Sed sed ipsum et
								libero pharetra egestas. Praesent porta faucibus lacus a
								aliquet. Aliquam tincidunt arcu velit, ut finibus odio suscipit
								nec.
							</p>
							<div className="row-container client-name">
								<div className="client-img client-img2"></div>
								<p>Sophie Zole</p>
							</div>
						</Box>
					</div>
				</div>
			</div>
		</div>
	);
}
