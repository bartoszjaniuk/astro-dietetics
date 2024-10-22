import type { ContactFormFieldValues } from "@/_views/shared/components/ContactForm";
import * as React from "react";

export const useContact = () => {
	const [isSuccess, setIsSuccess] = React.useState(false);
	const [successMessage, setSuccessMessage] = React.useState("");

	React.useEffect(() => {
		if (isSuccess) {
			setSuccessMessage("Wiadomość została wysłana.");
			setTimeout(() => {
				setSuccessMessage("");
				setIsSuccess(false);
			}, 3000);
		}
	}, [isSuccess]);

	const onSubmit = async (formData: ContactFormFieldValues) => {
		try {
			const response = await fetch(
				"https://umami-get-mailed.onrender.com/api/v1/email/send-email",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify({
						email: formData.email,
						subject: formData.thread,
						message: formData.message,
					}),
				},
			);
			await response.json();
			const res = await response.json();
			if (res.status === "success") setIsSuccess(true);
		} catch (error) {
			console.log(error);
		}
	};

	return { isSuccess, onSubmit };
};
