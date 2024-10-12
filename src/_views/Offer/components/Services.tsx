import * as React from "react";
import { SlideX } from "@/animations/SlideX";
import { SlideY } from "@/animations/SlideY";
import { Icon, type IconifyIconProps } from "@iconify/react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { servicesData } from "../constants";
import { LinkButton } from "@/_views/Home/components/LinkButton";

type Props = {
	title: string;
	description: string;
	icon: IconifyIconProps["icon"];
	listTitle?: string;
	listItems_1?: string[];
	listItems_2?: string[];
};

const Service = ({
	description,
	title,
	icon,
	listItems_1,
	listItems_2,
	listTitle,
}: Props) => {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value={title}>
				<AccordionTrigger className="text-xl lg:text-2xl">
					<div className="flex gap-4 items-center">
						<Icon fontSize="2.3rem" icon={icon} />
						<p>{title}</p>
					</div>
				</AccordionTrigger>
				<AccordionContent className="text-xl">
					<div className="flex flex-col gap-4">
						<p>{description}</p>
						{listTitle ? <p>{listTitle}</p> : null}
						<div className="grid lg:grid-cols-2 gap-4">
							{listItems_1 && listItems_1.length > 0 ? (
								<ul className="list-disc text-primary pl-5">
									{listItems_1.map((item) => (
										<li key={item} className="text-primary">
											{item}
										</li>
									))}
								</ul>
							) : null}
							{listItems_2 && listItems_2.length > 0 ? (
								<ul className="list-disc text-primary pl-5 lg:pl-0">
									{listItems_2.map((item2) => (
										<li key={item2} className="text-primary">
											{item2}
										</li>
									))}
								</ul>
							) : null}
						</div>
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

const ServicesList = () => {
	return (
		<ul className="list-none w-full h-full">
			{servicesData.map((s) => (
				<li key={s.label}>
					<Service
						icon={s.icon}
						title={s.label}
						description={s.content}
						listItems_1={s.listItems_1}
						listTitle={s.listTitle}
						listItems_2={s.listItems_2}
					/>
				</li>
			))}
		</ul>
	);
};

export const Services = () => {
	return (
		<section className="w-full h-full bg-white py-8" id="moje-uslugi">
			<div className="flex flex-col-reverse lg:flex-row container responsive-padding mx-auto">
				<div className="flex flex-col gap-6 w-full">
					<SlideY component="h1" from="top" className="text-primary text-5xl">
						Usługi
					</SlideY>
					<SlideX
						component="h2"
						from="left"
						className="text-3xl  text-primary text-left lg:text-left"
					>
						Nie wiesz co wybrać? Skontaktuj się ze mną i wszystko razem
						ustalimy.
					</SlideX>
					<ServicesList />
					<LinkButton
						className="self-center my-8"
						variant="inverted"
						text="Sprawdź dostępne opcje współpracy"
						navigateTo="/cennik"
					/>
				</div>
			</div>
		</section>
	);
};
