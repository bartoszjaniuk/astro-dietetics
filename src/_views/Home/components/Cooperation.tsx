import React from "react";
import { SlideY } from "../../../animations/SlideY";
import { LinkButton } from "./LinkButton";

type Step = {
	icon: JSX.Element;
	title: string;
	description: string;
};

export const steps: Step[] = [
	{
		title: "CEL",
		description:
			"Zastanów się co chcesz osiągnąć. Jaki jest Twój cel? Może zmagasz się z jakimś schorzeniem? Chcesz schudnąć - zredukować poziom tkanki tłuszczowej, a może przytyć?",
		icon: <img width={80} src="/assets/target.svg" alt="Cel" />,
	},
	{
		title: "KONTAKT",
		description:
			"Napisz do mnie lub zadzwoń, umówimy się na pierwszą konsultację stacjonarnie lub online. Jeśli posiadasz, wyniki badań krwi również je wyślij do mnie na maila.",
		icon: <img width={80} src="/assets/contact.svg" alt="Kontakt" />,
	},
	{
		title: "OPIEKA",
		description: `Po pierwszej konsultacji zdecydujesz jaki plan żywieniowy lub pakiet wybierasz. Ceny znajdziesz w zakładce cennik.`,
		icon: <img width={80} src="/assets/healthcare.svg" alt="Opieka" />,
	},
	{
		title: "DZIAŁANIE",
		description:
			"Profil pacjenta online i aplikacja mobilna – to tam będzie udostępniony Twój jadłospis oraz postępy (istnieje również możliwość, aby wysłać go na Twojego maila). Teraz wszystko zależy od Ciebie, a ja będę Ci kibicować i wspierać!",
		icon: <img width={80} src="/assets/bodyweight.svg" alt="Działanie" />,
	},
];

const Card = ({ description, icon, title }: Step) => {
	return (
		<SlideY from="bottom">
			<div className="bg-white h-full rounded-md flex flex-col gap-4 items-center p-8 shadow-lg transition-all hover:-translate-y-6 hover:scale-105">
				<div className="w-full min-h-28 flex items-center justify-center">
					{icon}
				</div>
				<h1 className="text-4xl text-primary">{title}</h1>
				<p className="text-center text-primary">{description}</p>
			</div>
		</SlideY>
	);
};

const classNameAfter =
	'after:absolute after:content-[""] after:w-full after:h-full after:top-0 after:left-0 after:-z-[1] after:bg-white after:[clip-path:polygon(0%_0%,100%_0%,100%_75%,0%_100%)]';

const classNameBefore =
	'before:absolute before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:-z-[1] before:bg-softGray';

const Content = () => {
	return (
		<section
			className={`min-h-[65rem] flex flex-col items-center z-10 bg-white py-8 gap-10 lg:gap-16 ${classNameAfter} ${classNameBefore}`}
		>
			<SlideY
				component="h2"
				from="bottom"
				className="text-5xl font-black text-primary text-center container responsive-padding mx-auto"
			>
				Jak rozpocząć ze mną współpracę w czterech krokach
			</SlideY>

			<div className="container responsive-padding mx-auto relative">
				<div className="hidden xl:block absolute left-0 bottom-0 w-full h-full">
					<img src="/assets/wavyline.svg" alt="test" />
				</div>
				<div className="flex object-center lg:py-16 sm:py-24 ">
					<div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10">
						{steps.map((step, i) => (
							<Card key={i} {...step} />
						))}
					</div>
				</div>
			</div>
			<LinkButton navigateTo="#napiszdomnie" text="Napisz do mnie" />
		</section>
	);
};

export const Cooperation = () => {
	return <Content />;
};
