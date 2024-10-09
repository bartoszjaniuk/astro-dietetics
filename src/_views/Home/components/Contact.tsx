import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../components/Input/Input";
import { Button } from "./Button";
import { CheckBox } from "@/components/Checkbox/Checkbox";

const classNameAfter =
	'after:absolute after:content-[""] after:w-full after:h-full after:top-0 after:left-0 after:-z-[1] after:bg-white  md:after:[clip-path:polygon(0%_0%,100%_0%,100%_75%,0%_100%)]';

const classNameBefore =
	'before:absolute before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:-z-[1] before:bg-softGray';

const string = z.string();
const contactFormSchema = z.object({
	email: string
		.min(1, "Pole jest wymagane")
		.email("Podano nieprawidłowy adres email"),
	thread: string.min(1, "Pole jest wymagane").trim(),
	message: string.min(1, "Pole jest wymagane").trim(),
	statute: z.boolean().refine((val) => !!val, {
		message: "Proszę zaakceptować regulamin",
	}),
});

type ContactFormFieldValues = z.infer<typeof contactFormSchema>;

const Content = () => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm<ContactFormFieldValues>({
		mode: "all",
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			email: "",
			thread: "",
			message: "",
			statute: false,
		},
	});

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
		reset();
	};

	return (
		<main
			className={`min-h-full flex flex-col justify-center items-center z-10 bg-white py-8 gap-10 lg:gap-16 ${classNameAfter} ${classNameBefore}`}
		>
			<div className="container responsive-padding mx-auto flex flex-col gap-10">
				<div className="text-center flex flex-col gap-4">
					<h2 className="text-primary text-5xl">Skontaktuj się ze mną</h2>
					<h5 className="text-xl">
						Potrzebujesz specjalistycznej porady? Napisz do mnie za pomocą
						formularza lub zadzwoń.
					</h5>
				</div>

				<div className="flex flex-col xl:flex-row gap-8">
					<div className="w-full">
						<img
							src="assets/personContactForm.svg"
							alt="Osoba z telefonem komórkowym"
						/>
					</div>
					<div className="w-full flex flex-col gap-4 justify-center">
						<h3 className="text-5xl text-primary py-4">Napisz do mnie</h3>
						<form
							className="flex flex-col gap-4"
							onSubmit={handleSubmit(onSubmit)}
						>
							<Input
								required
								id="email"
								type="email"
								name="email"
								label="Email"
								placeholder="Wpisz swój email"
								register={register}
								errors={errors}
							/>
							<Input
								required
								id="thread"
								name="thread"
								label="Temat"
								placeholder="Podaj temat wiadomości"
								register={register}
								errors={errors}
							/>

							<Input
								required
								isTextArea
								id="message"
								name="message"
								label="Wiadomość"
								placeholder="Podaj treść wiadomości"
								register={register}
								errors={errors}
							/>
							<CheckBox
								id="statute"
								name="statute"
								placeholder="Akceptuję regulamin"
								register={register}
								errors={errors}
								rules={{
									required: "Proszę zaakceptować regulamin",
								}}
							/>

							<Button
								className="mt-4 w-full"
								size="sm"
								type="submit"
								disabled={!isValid}
								isWithoutAnimation
							>
								{isSubmitting
									? "Trwa wysyłanie wiadomości..."
									: "Wyślij wiadomość"}
							</Button>
						</form>
						{/* {successMessage && (
						<p className={styles["success-message"]}>{successMessage}</p>
					)} */}
					</div>
				</div>
			</div>
		</main>
	);
};

export const Contact = () => {
	return <Content />;
};
