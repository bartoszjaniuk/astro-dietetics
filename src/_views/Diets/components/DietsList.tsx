import { SlideX } from "@/animations/SlideX";
import { SlideY } from "@/animations/SlideY";
import { LinkButton } from "@/_views/Home/components/LinkButton";
import { Button } from "@/_views/Home/components/Button";

const individuals = [
	{
		title: "Plan żywieniowy na 7 dni",
		imgSrc: "/assets/pancakes.jpeg",
		items: [
			"Indywidualny plan żywieniowy",
			"Indywidualne zalecenia",
			"Jadłospis na 7 dni",
			"Jadłospis idealnie dopasowany do Twoich potrzeb",
		],
	},
	{
		title: "Pierwsza konsultacja",
		imgSrc: "/assets/sandwich.jpeg",
		items: [
			"Wywiad zdrowotny i żywieniowy",
			"Pomiar na analizatorze składu masy ciał",
			"Omówienie dotychczasowej diety i błędów żywieniowyc",
			"Edukacja żywieniowa i indywidualne zalecenia.",
			"Koszt każdej kolejnej wizyty kontrolnej to 100 zł",
		],
	},
	{
		title: "Plan żywieniowy na 14 dni",
		imgSrc: "/assets/tortilla.webp",

		items: [
			"Indywidualny plan żywieniowy",
			"Indywidualne zalecenia",
			"Jadłospis na 14 dni",
			"Jadłospis idealnie dopasowany do Twoich potrzeb",
		],
	},

	{
		title: "Plan żywieniowy na 14 dni",
		imgSrc: "/assets/fruits-bowl.jpeg",

		items: [
			"Indywidualny plan żywieniowy",
			"Indywidualne zalecenia",
			"Jadłospis na 14 dni",
			"Jadłospis idealnie dopasowany do Twoich potrzeb",
		],
	},
];

type Props = {
	title: string;
	imgSrc: string;
	items: string[];
};

{
	/* <section className="min-h-80 w-full relative container responsive-padding mx-auto flex items-center z-[5]">
<span className="opacity-20 fixed left-[0%] top-[0%] w-full h-full [background-image:url('assets/breakfast.jpg')] xl:bg-no-repeat xl:bg-cover " />

<h2 className="text-4xl">{text}</h2>
</section> */
}

/* <div className="border-r-[1px] border-r-primary">
<div className="w-72 h-72 absolute -right-1/2 top-1/2 -translate-y-1/2 bg-white rounded-[100%] z-10">
	<img
		src={imgSrc}
		alt=""
		className="w-full h-full object-cover border-secondary rounded-[100%]"
	/>
</div>
</div> */

const Card = ({ title, items, imgSrc }: Props) => {
	return (
		<div className="min-h-full lg:min-h-[630px] rounded-md bg-white w-full shadow-lg relative">
			<div className="hidden lg:block lg:w-72 lg:h-72 absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 bg-white rounded-[100%] z-10">
				<img
					src={imgSrc}
					alt=""
					className="w-full h-full object-cover border-secondary rounded-[100%]"
				/>
			</div>

			<div className="lg:hidden w-full  flex justify-center z-10 relative">
				<img
					src={imgSrc}
					alt=""
					className="w-48 h-48 object-cover border-secondary rounded-[100%]"
				/>
			</div>
			<span className="lg:hidden h-[1px] w-full bg-secondary absolute left-0 top-[105px]" />
			<span className="hidden lg:block w-[1px] bg-secondary h-full absolute left-[145px] top-0" />

			<div className="flex flex-col gap-4 py-4 lg:py-0 lg:justify-center lg:gap-8 px-6 lg:pl-80 h-full relative">
				<h5 className="text-4xl">{title}</h5>
				<ul className="list-none">
					{items.map((item, i) => (
						<li key={i} className="leading-10 text-xl">
							{item}
						</li>
					))}
				</ul>
				<Button className="w-full xl:w-fit xl:text-xl xl:py-4 xl:px-8">
					Wybierz dietę
				</Button>
			</div>
		</div>
	);
};

export const DietsList = () => {
	return (
		<section className="w-full h-full bg-softGray py-8 lg:py-0 relative">
			<div className="container responsive-padding mx-auto">
				<div className="py-8 grid grid-cols-1 xl:grid-cols-2 gap-4 ">
					{individuals.map((item, i) => (
						<Card key={i} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};
