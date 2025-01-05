"use client";
import React, { useState, useRef } from "react";
import { TextField, Button, Stack, Container, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.css";

const ContactForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const emailRef = useRef(null);
	const messageRef = useRef(null);

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		// try {
		// 	const templateParams = {
		// 		email: emailRef.current?.value,
		// 		message: messageRef.current?.value,
		// 		firstName: firstNameRef.current?.value,
		// 		lastName: lastNameRef.current?.value,
		// 		// image: '<img src="https://github.com/chrisdietrich405.png">',
		// 	};
		// 	console.log("params", templateParams);
		// 	await emailjs.send(
		// 		process.env.NEXT_PUBLIC_SERVICE_ID,
		// 		process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID,
		// 		templateParams,
		// 		process.env.NEXT_PUBLIC_USER_ID
		// 	);

		// 	toast.success("Email sent successfully");
		// 	setFirstName("");
		// 	setLastName("");
		// 	setEmail("");
		// 	setMessage("");
		// } catch (error) {
		// 	toast.error("Email not sent");
		// }
	};

	return (
		<Container
			maxWidth="sm"
			sx={{
				marginTop: "150px",
				marginBottom: "30px",
				padding: "20px",
				backgroundColor: "#f5f5f5",
			}}
		>
			<Typography
				sx={{ marginBottom: "30px", color: "000", textAlign: "center" }}
				variant="h4"
				component="h1"
				gutterBottom
			>
				Contact Us
			</Typography>
			<ToastContainer />
			<form onSubmit={handleFormSubmit}>
				<Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
					<TextField
						inputRef={firstNameRef}
						type="text"
						variant="outlined"
						color="primary"
						label="First Name"
						onChange={(e) => setFirstName(e.target.value)}
						value={firstName}
						fullWidth
						required
					/>
					<TextField
						inputRef={lastNameRef}
						type="text"
						variant="outlined"
						color="primary"
						label="Last Name"
						onChange={(e) => setLastName(e.target.value)}
						value={lastName}
						fullWidth
						required
					/>
				</Stack>
				<TextField
					inputRef={emailRef}
					type="email"
					variant="outlined"
					color="primary"
					label="Email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					fullWidth
					required
					sx={{ mb: 4 }}
				/>
				<TextField
					inputRef={messageRef}
					type="message"
					variant="outlined"
					color="primary"
					label="Message"
					onChange={(e) => setMessage(e.target.value)}
					value={message}
					fullWidth
					required
					sx={{ mb: 4 }}
					id="outlined-multiline-static"
					multiline
					rows={4}
				/>

				<Button type="submit" variant="contained" className={styles.button}>
					Submit
				</Button>
			</form>
		</Container>
	);
};

export default ContactForm;
