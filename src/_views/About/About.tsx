import * as React from "react";
import { ModalProvider } from "@/providers/ModalProvider";
import type { ImageMetadata } from "astro";
import { Introduction } from "./components/Introduction";
import { StripWithIcons } from "./components/StripWithIcons";
import { Certificates } from "./components/Certificates";
import { Explication } from "./components/Explication";

const Content = ({ certificates }: { certificates: ImageMetadata[] }) => {
	return (
		<main className="bg-softGray w-full min-h-screen flex flex-col">
			<Introduction />
			<StripWithIcons />
			<Explication />
			<Certificates certificates={certificates} />
		</main>
	);
};

export const About = ({ certificates }: { certificates: ImageMetadata[] }) => {
	return (
		<ModalProvider>
			<Content certificates={certificates} />
		</ModalProvider>
	);
};
