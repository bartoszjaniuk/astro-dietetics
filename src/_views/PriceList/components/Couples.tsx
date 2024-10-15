import { SlideX } from "@/animations/SlideX";
import { SlideY } from "@/animations/SlideY";
import { Card } from "./Card";

const couples = [
	{
		title: "Plan żywieniowy na 7 dni",
		price: "200 zł",
		items: [
			"Indywidualny plan żywieniowy",
			"Indywidualne zalecenia",
			"Jadłospis na 7 dni idealnie dopasowany do waszych potrzeb",
		],
	},
	{
		title: "Pierwsza konsultacja dla pary",
		price: "200 zł",
		items: [
			"Wywiad zdrowotny i żywieniowy",
			"Pomiar na analizatorze składu masy ciał",
			"Omówienie dotychczasowej diety i błędów żywieniowyc",
			"Edukacja żywieniowa i indywidualne zalecenia.",
			"Koszt każdej kolejnej wizyty kontrolnej to 150 zł",
		],
	},
	{
		title: "Plan żywieniowy na 14 dni",
		price: "250 zł",
		items: [
			"Indywidualny plan żywieniowy",
			"Indywidualne zalecenia",
			"Jadłospis na 14 dni",
			"Jadłospis idealnie dopasowany do Waszych potrzeb",
		],
	},
];

export const Couples = () => {
	return (
		<section className="w-full h-full bg-white py-8 lg:py-0 relative">
			<div className="container responsive-padding mx-auto">
				<div className="flex-1 flex flex-col gap-6 lg:py-8 text-center">
					<SlideY
						component="h2"
						from="top"
						className="text-5xl xl:text-7xl pt-8 text-primary"
					>
						Konsultacja dla par
					</SlideY>
					<SlideX component="p" from="left" className="text-2xl leading-8">
						Chcielibyście wspólnie o siebie zadbać? Nie macie pojęcia jak
						przygotowywać posiłki? <br /> Chcielibyście, aby cały ten proces był
						przyjemny i wygodny, a jednocześnie zindywidualizowany do Was?{" "}
						<br /> Już dziś zapiszcie się do mnie na pierwszą konsultację, a ja
						rozwieję wszystkie wasze wątpliwości!
					</SlideX>
					<div className="py-8 grid grid-cols-1 xl:grid-cols-3 gap-4 ">
						{couples.map((item, i) => (
							<Card
								key={i}
								{...item}
								className={
									i === 1 ? "xl:-translate-y-4 border-[3px] border-primary" : ""
								}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
