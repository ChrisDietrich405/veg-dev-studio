"use client";
import * as React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link"; // Import Link from Next.js

const drawerWidth = 240;
const navItems = [
	{ name: "Home", path: "/" },
	{ name: "Pricing", path: "/pricing" },
	{ name: "Contact", path: "/contact" },
];

function DrawerAppBar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{ textAlign: "center", backgroundColor: "#000000" }}
		>
			<Image
				aria-hidden
				src="/globe.svg"
				alt="Globe icon"
				width={16}
				height={16}
			/>
			<Divider />
			<List>
				{navItems.map(({ name, path }) => (
					<ListItem key={name} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<Link href={path} passHref>
								{" "}
								{/* Wrap with Link */}
								<ListItemText primary={name} />
							</Link>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex", backgroundColor: "#000000" }}>
			<CssBaseline />
			<AppBar sx={{ backgroundColor: "#000000" }} component="nav">
				<Toolbar sx={{ justifyContent: "space-between" }}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Image
							aria-hidden
							src="/logo.svg"
							alt="Globe icon"
							width={32}
							height={32}
						/>
					</Box>
					<Box
						sx={{
							display: { xs: "none", sm: "block" },
						}}
					>
						{navItems.map(({ name, path }) => (
							<Link key={name} href={path} passHref>
								{" "}
								{/* Wrap with Link */}
								<Button sx={{ color: "#fff" }}>{name}</Button>
							</Link>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<nav style={{ backgroundColor: "#000000" }}>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</Box>
	);
}

DrawerAppBar.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default DrawerAppBar;
