import React from "react";
import { SlideY } from "../../../animations/SlideY";
import { LinkButton } from "./LinkButton";
import { AppRoute } from "../../../components/Footer/components/enums/appRoutes";

type Diet = {
	clipPath: string;
	title: string;
	backgroundImage: string;
	details: {
		size: string;
		descriptions: string[];
	};
};

const diets: Diet[] = [
	{
		clipPath: "[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_85%)]",
		title: "Dieta dla par",
		backgroundImage:
			"[background-image:linear-gradient(to_right,_#3b2f29_0%,_#967968_51%,_#3b2f29_100%),_url('https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]",

		details: {
			size: "2000 KCAL",
			descriptions: [
				"Wywiad zdrowotny i żywieniowy",
				"Pomiar na analizatorze składu masy ciała",
				"Omówienie dotychczasowej diety i błędów żywieniowych",
				"Edukacja żywieniowa i indywidualne zalecenia",
			],
		},
	},
	{
		clipPath: "[clip-path:polygon(0%_0%,100%_0%,100%_85%,0%_85%)]",
		title: "Dieta Indywidualna",
		backgroundImage:
			"[background-image:linear-gradient(to_right,_#3b2f29_0%,_#967968_51%,_#3b2f29_100%),_url('https://images.pexels.com/photos/4964123/pexels-photo-4964123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]",
		details: {
			size: "Dieta Indywidualna",
			descriptions: [
				"Wywiad zdrowotny i żywieniowy",
				"Pomiar na analizatorze składu masy ciała",
				"Omówienie dotychczasowej diety i błędów żywieniowych",
				"Edukacja żywieniowa i indywidualne zalecenia",
			],
		},
	},
	{
		clipPath: "[clip-path:polygon(0%_0%,100%_0%,100%_85%,0%_100%)]",
		title: "Gotowe Jadłospisy",
		backgroundImage:
			"[background-image:linear-gradient(to_right,_#3b2f29_0%,_#967968_51%,_#3b2f29_100%),_url('https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]",
		details: {
			size: "1600 KCAL",
			descriptions: [
				"Dania na słono",
				"Dania na słodko",
				"4 posiłki dziennie",
				"Jadłospis 7-dniowy",
			],
		},
	},
];

const FloatingCard = ({ backgroundImage, clipPath, details, title }: Diet) => {
	return (
		<SlideY
			from="bottom"
			key={title}
			className="group h-[600px] xl:h-[550px]  flex [perspective:1000px]"
		>
			<div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] bg-white">
				{/* Front Face */}
				<div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] flex flex-col">
					<div
						id="Header"
						className={`bg-cover h-72 bg-blend-screen rounded-t-md ${
							clipPath
						} ${backgroundImage} `}
					>
						&nbsp;
						<div
							id="Heading"
							className="absolute right-0 left-0 top-0 xl:top-1/2 flex justify-center items-center"
						>
							<h1 className="text-4xl xl:text-4xl uppercase text-white [background-image:linear-gradient(to_left,#B29F94,#603813)] min-h-24 xl:min-h-fit flex items-center justify-center w-full xl:w-fit p-1 rounded-md text-center">
								{title}
							</h1>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<ul className="flex flex-col justify-center items-center gap-4 pt-8 lg:pt-0">
							{details.descriptions.map((detail) => (
								<li
									className="border-b-[1px] border-b-softGray py-2"
									key={detail}
								>
									<p className="text-primary text-center">{detail}</p>
								</li>
							))}
						</ul>
						<LinkButton
							navigateTo={AppRoute.MENUS}
							className="w-full text-center text-xl lg:hidden pt-4"
							text="Przejdź do oferty"
						/>
					</div>
				</div>
				{/* Back Face */}
				<div className="absolute inset-0 h-full w-full rounded-xl [background-image:linear-gradient(to_bottom,#57463c,#603813)]  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
					<div className="w-full flex min-h-full flex-col items-center justify-center gap-12">
						<h2 className="text-white text-5xl">{title}</h2>
						<LinkButton
							navigateTo={AppRoute.MENUS}
							variant="inverted"
							className="text-center text-3xl md:text-4xl "
							text="Przejdź do oferty"
						/>
					</div>
				</div>
			</div>
		</SlideY>
	);
};

const classNameAfter =
	'after:absolute after:content-[""] after:w-full after:h-full after:top-0 after:left-0 after:-z-[1] after:bg-softGray after:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_75%)]';
const classNameBefore =
	'before:absolute before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:-z-[1] before:bg-white';

export const ThreeCards = () => {
	return (
		<section
			className={`min-h-[75rem] flex flex-col items-center justify-center z-10 py-8 gap-10 lg:gap-16 ${classNameAfter} ${classNameBefore}`}
		>
			<SlideY
				component="h2"
				from="bottom"
				className="text-5xl font-black text-primary text-center container responsive-padding mx-auto pt-16 xl:pt-0"
			>
				Usługi dostosowane do Twoich potrzeb
			</SlideY>
			<div className="container responsive-padding mx-auto">
				<div className="flex object-center xl:py-16">
					<div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
						{diets.map((diet, i) => (
							<FloatingCard key={i} {...diet} />
						))}
					</div>
				</div>
			</div>
			<SlideY
				component="h2"
				from="bottom"
				className="text-primary text-center container responsive-padding mx-auto text-2xl py-8 max-w-[800px]"
			>
				Sprawdź, ile powinieneś spożywać kalorii w ciągu dnia,{" "}
				<a href={AppRoute.KALKULATOR} className="text-primary underline">
					dzięki kalkulatorowi kalorii!
				</a>
			</SlideY>
		</section>
	);
};
