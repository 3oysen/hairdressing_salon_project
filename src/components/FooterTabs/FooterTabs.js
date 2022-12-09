import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import RoomIcon from "@mui/icons-material/Room";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

export default function FullWidthTabs() {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<div className="justify-container">
			<div className="content-container ">
				<Grid container justify="center">
					<Box sx={{ bgcolor: "background.paper", width: 1, height: 1, mt: 4 }}>
						<AppBar position="static">
							<Tabs
								value={value}
								onChange={handleChange}
								indicatorColor="secondary"
								textColor="inherit"
								variant="fullWidth"
								aria-label="full width tabs example"
							>
								<Tab label="About US" {...a11yProps(0)} />
								<Tab label="Useful Links" {...a11yProps(1)} />
								<Tab label="Contact Info" {...a11yProps(2)} />
							</Tabs>
						</AppBar>
						<SwipeableViews
							axis={theme.direction === "rtl" ? "x-reverse" : "x"}
							index={value}
							onChangeIndex={handleChangeIndex}
						>
							<TabPanel value={value} index={0} dir={theme.direction}>
								About US Lorem Ipsum is simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the industry's
								standard dummy text ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make a type
								specimen book. It has survived not only five centuries, but also
								the leap into electronic typesetting, remaining essentially
								unchanged.
							</TabPanel>
							<TabPanel value={value} index={1} dir={theme.direction}>
								Useful Links 1 <br />
								Useful Links 2 <br />
								Useful Links 3 <br />
							</TabPanel>
							<TabPanel value={value} index={2} dir={theme.direction}>
								<AccessTimeIcon /> Monday - Friday 9:00 AM - 20:00 PM | Saturday
								8:00 AM - 14:00 PM | Sunday - <br />
								<CallIcon /> 733 444 123 <br />
								<RoomIcon /> ppor. Danuty Siedzikówny "Inki" 6, 85-792 Bydgoszcz{" "}
								<br />
							</TabPanel>
						</SwipeableViews>
					</Box>
				</Grid>
			</div>
		</div>
	);
}
