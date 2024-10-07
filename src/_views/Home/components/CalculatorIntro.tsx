import React from "react";
import { SlideX } from "../../../animations/SlideX";
import { SlideY } from "../../../animations/SlideY";
import { LinkButton } from "./LinkButton";
import { AppRoute } from "../../../components/Footer/components/enums/appRoutes";

const classNameAfter =
	'after:absolute after:content-[""] after:w-full after:h-full after:top-0 after:left-0 after:-z-[1] after:bg-softGray after:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_75%)]';
const classNameBefore =
	'before:absolute before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:-z-[1] before:bg-white';

export const CalculatorIntro = () => {
	return (
		<section
			className={`min-h-[60rem] flex items-center z-10 py-8 gap-10 lg:gap-16 ${classNameAfter} ${classNameBefore}`}
		>
			<div className="container responsive-padding mx-auto flex flex-col xl:flex-row gap-8">
				<div className="w-full flex flex-col gap-8 xl:gap-16">
					<SlideX
						component="h1"
						className="text-4xl md:text-6xl xl:text-7xl flex flex-col gap-3 xl:text-center"
					>
						<p>
							Jaka
							<span className="pl-3 md:border md:border-primary md:px-8 md:py-2 md:[border-radius:30%_70%_27%_73%/49%_31%_69%_51%]">
								kaloryczność
							</span>
						</p>
						<p>będzie dla Ciebie </p>
						<p className="md:border md:border-primary md:p-8 md:[border-radius:30%_70%_27%_73%/49%_31%_69%_51%] w-fit">
							odpowiedia?
						</p>
					</SlideX>
					<SlideX from="right" component="p" className="text-2xl xl:text-3xl">
						Skorzystaj z kalkulatora, aby dowiedzieć się, jakie obecnie masz
						zapotrzebowanie kaloryczne. Po wpisaniu swoich danych dowiesz się
						ile powinieneś jeść, aby osiągnąć swój cel.
					</SlideX>
					<SlideY className="flex flex-col text-xl lg:flex-row gap-2 lg:gap-8">
						<LinkButton
							navigateTo={AppRoute.KALKULATOR}
							className="w-full text-center xl:w-fit xl:text-left"
							text="Przejdź do kalkulatora"
						/>
						<LinkButton
							navigateTo="#contact"
							className="w-full text-center xl:w-fit xl:text-left"
							text="Napisz do mnie"
							variant="inverted"
						/>
					</SlideY>
				</div>
				<div className="w-full">
					<img
						src="assets/personWithPhone.svg"
						alt="Osoba patrząca na telefon komórkowy"
					/>
				</div>
			</div>
		</section>
	);
};
