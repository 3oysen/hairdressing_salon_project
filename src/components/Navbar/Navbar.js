import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import GlobalStyles from "@mui/material/GlobalStyles";

const pages = ["Home", "Services", "About us", "Contact "];
const salonName = ["Salon Fryzjerski"];
const salonOwnerName = ["Boysen Magdalena"];

const Navbar = ({ setMode }) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	const handleToggleColorTheme = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	return (
		<React.Fragment>
			<GlobalStyles styles={{ body: { padding: 0 } }} />
			<AppBar position="fixed">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box sx={{ marginTop: ".7rem", marginBottom: ".7rem" }}>
							<Typography
								variant="h5"
								noWrap
								component="a"
								href=""
								sx={{
									mr: 2,
									display: { xs: "none", md: "flex" },
									fontFamily: "quicksand",
									fontWeight: 700,
									letterSpacing: ".3rem",
									color: "inherit",
									textDecoration: "none",
								}}
							>
								{salonName}
							</Typography>
							<Typography
								variant="h6"
								component="a"
								href=""
								sx={{
									mr: 2,
									display: { xs: "none", md: "flex" },
									fontFamily: "ms madi",
									fontWeight: 700,
									letterSpacing: ".2rem",
									color: "inherit",
									textDecoration: "none",
									opacity: 0.8,
									justifyContent: "center",
								}}
							>
								{salonOwnerName}
							</Typography>
						</Box>

						<Box sx={{ display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>

						<Box
							sx={{ flexGrow: 1, marginTop: ".7rem", marginBottom: ".7rem" }}
						>
							<Typography
								variant="h5"
								noWrap
								component="a"
								href=""
								sx={{
									mr: 2,
									display: { xs: "flex", md: "none" },
									fontFamily: "quicksand",
									fontWeight: 700,
									letterSpacing: ".3rem",
									color: "inherit",
									textDecoration: "none",
									justifyContent: "center",
								}}
							>
								{salonName}
							</Typography>
							<Typography
								variant="h6"
								component="a"
								href=""
								sx={{
									mr: 2,
									display: { xs: "flex", md: "none" },
									fontFamily: "ms madi",
									fontWeight: 700,
									letterSpacing: ".2rem",
									color: "inherit",
									textDecoration: "none",
									opacity: 0.8,
									justifyContent: "center",
								}}
							>
								{salonOwnerName}
							</Typography>
						</Box>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
								flexDirection: "row-reverse",
							}}
						>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: "inherit",
										display: "block",
									}}
								>
									{page}
								</Button>
							))}
						</Box>
						<Button
							key={"Color Mode"}
							sx={{
								my: 2,
								color: "inherit",
								display: "flex",
								opacity: 0.8,
							}}
							onClick={handleToggleColorTheme}
						>
							<Brightness6Icon />
						</Button>
					</Toolbar>
				</Container>
			</AppBar>
		</React.Fragment>
	);
};
export default Navbar;
