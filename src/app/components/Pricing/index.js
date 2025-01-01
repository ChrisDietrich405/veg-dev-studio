import React from "react";
import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	Grid,
	Container,
	Box,
} from "@mui/material";

const Pricing = () => {
	// Template Option
	const templateOption = {
		name: "Template-Based Website",
		description:
			"Choose between Earthsave Baltimore or MichiVeg (without ecommerce functionality)",
		pages: 5,
		price: 500,
		details: [
			"Your website would follow either Earthsave Baltimore or MichiVeg structure, just replacing the data",
		],
	};

	// Custom Option
	const customOption = {
		name: "Template-Based Ecommerce Website ",
		description: "MichiVeg.",
		pages: "Unlimited",
		price: 1500,
		details: [
			"Your website would follow the MichiVeg structure, just replacing the data",
		],
	};

	const customOption2 = {
		name: "Customized Website",
		description: "Fully tailored website with unlimited pages and features.",
		pages: "Unlimited",
		price: 1500,
		details: [
			"Custom design tailored to your needs",
			"Unlimited pages",
			"Advanced features included",
			"Multiple rounds of revisions",
		],
	};

	return (
		<Container maxWidth="lg" sx={{ marginTop: 20 }}>
			<Grid container spacing={4} justifyContent="center">
				{/* Template Option Card */}
				{[templateOption, customOption, customOption2].map((option, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<Card
							variant="outlined"
							sx={{
								height: 350,
								width: 300,
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<CardContent>
								<Typography variant="h5" component="div" gutterBottom>
									{option.name}
								</Typography>
								<Typography variant="body2" color="text.secondary" paragraph>
									{option.description}
								</Typography>
								<Typography variant="h6" component="div" gutterBottom>
									Price: ${option.price}
								</Typography>
								<Typography variant="body2" color="text.secondary" paragraph>
									Includes {option.pages} pages.
								</Typography>
								<Box>
									{option.details.map((detail, index) => (
										<Typography
											key={index}
											variant="body2"
											color="text.secondary"
											paragraph
										>
											{detail}
										</Typography>
									))}
								</Box>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									Choose {index === 0 ? "Template" : "Custom"}
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Pricing;
