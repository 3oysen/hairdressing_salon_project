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
import ContentCutIcon from "@mui/icons-material/ContentCut";
import Brightness6Icon from "@mui/icons-material/Brightness6";

const pages = ["Products", "Pricing", "Blog"];

const Navbar = ({ setMode }) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleToggleColorTheme = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<ContentCutIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						MB Salon
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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

					<ContentCutIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "white",
							textDecoration: "none",
						}}
					>
						MB Salon
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							flexDirection: "row-reverse",
						}}
					>
						<Button
							key={"Color Mode"}
							sx={{
								my: 2,
								color: "white",
								display: "flex",
							}}
							onClick={handleToggleColorTheme}
						>
							<Brightness6Icon />
						</Button>

						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: "white",
									display: "block",
								}}
							>
								{page}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
