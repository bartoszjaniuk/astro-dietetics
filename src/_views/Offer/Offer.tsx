import { ModalProvider } from "@/providers/ModalProvider";
import React from "react";
import { Introduction } from "./components/Introduction";
import { StripWithIcons } from "./components/StripWithIcons";
import { Services } from "./components/Services";

const Content = () => {
	return (
		<main className="bg-white w-full min-h-screen flex flex-col">
			<Introduction />
			<StripWithIcons />
			<Services />
		</main>
	);
};

export const Offer = () => {
	return (
		<ModalProvider>
			<Content />
		</ModalProvider>
	);
};
