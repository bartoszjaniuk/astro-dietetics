import * as React from "react";
import { Offer } from "./components/Offer";
import { useInitMailer } from "./hooks/useInitMailer";
import { FixedQuote } from "./components/FixedQuote";
import { ThreeCards } from "./components/ThreeCards";
import { Cooperation } from "./components/Cooperation";
import { CalculatorIntro } from "./components/CalculatorIntro";
import { Contact } from "./components/Contact";

const Content = () => {
	useInitMailer();
	return (
		<>
			<Offer />
			<FixedQuote />
			<ThreeCards />
			<Cooperation />
			<CalculatorIntro />
			<Contact />
		</>
	);
};

export const Home = () => {
	return <Content />;
};
