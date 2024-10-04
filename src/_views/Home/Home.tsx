import * as React from "react";
import { ModalProvider } from "../../providers/ModalProvider";
import { Offer } from "./components/Offer";
import { useInitMailer } from "./hooks/useInitMailer";
import { FixedQuote } from "./components/FixedQuote";

const Content = () => {
	useInitMailer();
	return (
		<>
			<Offer />
			<FixedQuote />
		</>
	);
};

export const Home = () => {
	return (
		<ModalProvider>
			<Content />
		</ModalProvider>
	);
};
