import { Introduction } from "./components/Introduction";
import { Individual } from "./components/Individual";
import { Couples } from "./components/Couples";
import { LinkButton } from "../Home/components/LinkButton";

const Content = () => {
	return (
		<main className="bg-white w-full min-h-screen flex flex-col relative z-50">
			<Introduction />
			<Individual />
			<section className="min-h-full py-4 xl:py-0 xl:min-h-[400px] w-full relative container responsive-padding mx-auto flex items-center z-[-1]">
				<span className="opacity-20 fixed left-[0%] top-[0%] w-full h-full [background-image:url('assets/breakfast.jpg')] xl:bg-no-repeat xl:bg-cover" />

				<div className="flex flex-col gap-6 text-center">
					<h2 className="text-5xl">Dieta online bez wychodzenia z domu</h2>
					<p className="text-3xl">
						W zapracowanym świecie trudno zadbać o siebie. <br /> Dlatego
						przygotowałam dla moich pacjentów wygodną opcję diety i konsultacji
						online, ale jeśli wolisz spotkać się ze mną stacjonarnie, to też
						jest taka możliwość!
					</p>
					<LinkButton
						className="self-center text-xl md:text-2xl"
						variant="inverted"
						text="Sprawdź ofertę"
						navigateTo="/oferta"
					/>
				</div>
			</section>
			<Couples />
		</main>
	);
};

export const PriceList = () => {
	return <Content />;
};
