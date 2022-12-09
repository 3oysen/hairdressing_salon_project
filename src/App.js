import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useMemo } from "react";
import { CssBaseline } from "@mui/material";
import "./style.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/Home";
import Map from "./components/Map/Map";
import About from "./components/about/About";
import ClientComments from "./components/ClientComments/ClientComments";
import FooterTabs from "./components/FooterTabs/FooterTabs";

function App({ setMode }) {
	const theme = useTheme();

	return (
		<div>
			<Navbar setMode={setMode} />
		</div>
	);
}

function TabPanel() {
	return (
		<div>
			<FooterTabs />
		</div>
	);
}

export default function ColorModeWrapper() {
	const [mode, setMode] = useState("light");
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					primary: {
						main: "#fefefe",
					},
					secondary: {
						main: "#ff2fc4",
					},
					background: {
						test: "#eaeaea",
					},
					mode,
				},
				typography: {
					fontFamily: "quicksand",
					fontSize: 14,
					fontWeightLight: 300,
					fontWeightRegular: 400,
					fontWeightMedium: 500,
				},
			}),
		[mode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App setMode={setMode} />
			<Home />
			<About />
			<ClientComments />
			<Map />
			<TabPanel />
		</ThemeProvider>
	);
}
