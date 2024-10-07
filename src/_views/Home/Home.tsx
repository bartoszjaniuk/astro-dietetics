import * as React from "react";
import { ModalProvider } from "../../providers/ModalProvider";
import { Offer } from "./components/Offer";
import { useInitMailer } from "./hooks/useInitMailer";
import { FixedQuote } from "./components/FixedQuote";
import { ThreeCards } from "./components/ThreeCards";
import { Cooperation } from "./components/Cooperation";
import { CalculatorIntro } from "./components/CalculatorIntro";

const Content = () => {
	useInitMailer();
	return (
		<>
			<Offer />
			<FixedQuote />
			<ThreeCards />
			<Cooperation />
			<CalculatorIntro />
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
