"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				p: 4,
				mt: 4,
				backgroundColor: "#fafafa",
				minHeight: "100vh",
			}}
		>
			{/* Header Section */}
			<Box sx={{ textAlign: "center", mb: 4 }}>
				<Image
					src="/logo.svg"
					alt="VegDev Studios"
					width={400} // Adjusted width
					height={300} // Adjusted height
					style={{ display: "block", margin: "0 auto", borderRadius: "8px" }}
				/>
				<Typography
					variant="h4"
					sx={{ mt: 2, fontWeight: 600, color: "#2d3748" }}
				>
					Vegan Startups - Let's Build Something Beautiful Together
				</Typography>
				<Typography
					sx={{
						mt: 2,
						fontSize: "1.1rem",
						color: "#4a5568",
						maxWidth: "800px",
						margin: "0 auto",
					}}
				>
					Vegan startups benefit from having a website. It’s key to branding,
					increasing sales, and networking. Vegan startups also tend to be more
					passionate about their business because they are committed to creating
					a healthier, more sustainable, and more compassionate planet. Maybe
					your focus is on all three or just one. Either way, VegDev Studios
					matches your passion. Let’s build something beneficial for you and
					everyone else.
				</Typography>
			</Box>

			{/* Images Section - Align horizontally */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "row", // Align images horizontally
					gap: 3, // Space between images
					justifyContent: "center", // Center the images
					flexWrap: "wrap", // Ensure responsiveness on smaller screens
				}}
			>
				<Box
					sx={{
						boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
						borderRadius: 2,
						overflow: "hidden",
						transition: "all 0.3s ease",
					}}
				>
					<Image
						src="/animals.jpg"
						alt="Animals"
						width={400}
						height={300}
						style={{ display: "block", margin: "0 auto" }}
					/>
				</Box>
				<Box
					sx={{
						boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
						borderRadius: 2,
						overflow: "hidden",
						transition: "all 0.3s ease",
					}}
				>
					<Image
						src="/vegan-health.png"
						alt="Vegan Health"
						width={400}
						height={300}
						style={{ display: "block", margin: "0 auto" }}
					/>
				</Box>
				<Box
					sx={{
						boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
						borderRadius: 2,
						overflow: "hidden",
						transition: "all 0.3s ease",
					}}
				>
					<Image
						src="/climate-change.jpg"
						alt="Climate Change"
						width={400}
						height={300}
						style={{ display: "block", margin: "0 auto" }}
					/>
				</Box>
			</Box>

			{/* Testimonial Section */}
			<Box sx={{ textAlign: "center", mt: 6 }}>
				<Typography
					component="h2"
					variant="h4"
					sx={{ fontWeight: 600, color: "#2d3748" }}
				>
					What Our Customers Are Saying
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row", // Align images horizontally
						gap: 3, // Space between images
						justifyContent: "center", // Center the images
						marginTop: "40px",
						flexWrap: "wrap", // Ensure responsiveness on smaller screens
					}}
				>
					{/* Testimonial Card 1 */}
					<Box
						sx={{
							boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
							borderRadius: 2,
							overflow: "hidden",
							textAlign: "center",
							p: 3,
							transition: "all 0.3s ease",
							width: "100%",
							maxWidth: "360px",
							"&:hover": {
								boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.15)",
								transform: "translateY(-5px)",
							},
						}}
					>
						<Image
							src="/earthsave-baltimore.png"
							alt="MichiVeg"
							width={400}
							height={300}
							style={{
								display: "block",
								margin: "0 auto",
								borderRadius: "8px",
							}}
						/>
						<Typography
							variant="h6"
							sx={{ mt: 2, fontWeight: 600, color: "#2d3748" }}
						>
							MichiVeg
						</Typography>
						<Typography
							variant="body2"
							sx={{ mt: 1, fontSize: "1rem", color: "#4a5568" }}
						>
							"The website they built for us exceeded our expectations! It’s
							visually stunning, easy to navigate, and aligns perfectly with our
							climate action goals. Thanks to their expertise, our outreach
							efforts are now more effective than ever. We couldn’t be happier
							with the results!"
						</Typography>
						<Link
							href="https://michiveg.com"
							style={{
								display: "inline-block",
								marginTop: "15px",
								color: "#3182ce",
								fontWeight: 500,
								textDecoration: "none",
								"&:hover": {
									color: "#63b3ed",
								},
							}}
						>
							Visit MichiVeg
						</Link>
					</Box>
					{/* Testimonial Card 2 */}
					<Box
						sx={{
							boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
							borderRadius: 2,
							overflow: "hidden",
							textAlign: "center",
							p: 3,
							transition: "all 0.3s ease",
							width: "100%",
							maxWidth: "360px",
							"&:hover": {
								boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.15)",
								transform: "translateY(-5px)",
							},
						}}
					>
						<Image
							src="/earthsave-baltimore.png"
							alt="EarthSave Baltimore"
							width={400}
							height={300}
							style={{
								display: "block",
								margin: "0 auto",
								borderRadius: "8px",
							}}
						/>
						<Typography
							variant="h6"
							sx={{ mt: 2, fontWeight: 600, color: "#2d3748" }}
						>
							EarthSave Baltimore
						</Typography>
						<Typography
							variant="body2"
							sx={{ mt: 1, fontSize: "1rem", color: "#4a5568" }}
						>
							"Working with this web development team has been a game-changer
							for our organization! They created a beautiful, user-friendly
							website that perfectly reflects our mission to save the planet.
							We've seen a significant increase in engagement and donations
							thanks to their work. Highly recommend!"
						</Typography>
						<Link
							href="https://earthsavebaltimore.org/"
							style={{
								display: "inline-block",
								marginTop: "15px",
								color: "#3182ce",
								fontWeight: 500,
								textDecoration: "none",
								"&:hover": {
									color: "#63b3ed",
								},
							}}
						>
							Visit EarthSave Baltimore
						</Link>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Home;
