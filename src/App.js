import Navbar from "./Navbar";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useMemo } from "react";
import { CssBaseline } from "@mui/material";

function App({ setMode }) {
	const theme = useTheme();

	return (
		<div>
			<Navbar setMode={setMode} />
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
					mode,
				},
				// typography: {
				// 	fontFamily:
				// }
			}),
		[mode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App setMode={setMode} />
		</ThemeProvider>
	);
}
