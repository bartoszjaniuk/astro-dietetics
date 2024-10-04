import React from "react";
import { SlideX } from "../../../animations/SlideX";
import { RoutePath } from "../../../components/Footer/components/enums/appRoutes";
import { LinkButton } from "./LinkButton";
import { AbstractShape } from "./AbstractShape";

export const Offer = () => {
	return (
		<main className="relative bg-white min-h-screen lg:min-h-[93vh] xl:min-h-screen z-50">
			<div className="min-h-screen lg:min-h-[93vh] xl:min-h-screen flex flex-col lg:flex-row bg-white container responsive-padding mx-auto gap-8 xl:gap-0">
				<AbstractShape />
				<div className="flex-1 flex flex-col gap-8 justify-center items-center lg:items-start pt-4 md:pt-8 lg:pt-0 lg:w-1/2 ">
					<SlideX
						component="h2"
						from="left"
						className="text-5xl text-primary text-center"
					>
						Cześć! Nazywam się
					</SlideX>
					<SlideX
						component="h2"
						from="right"
						className="text-5xl font-black text-primary text-center lg:text-left"
					>
						mgr Aleksandra Kajstura-Janiuk
					</SlideX>
					<SlideX
						component="p"
						from="left"
						className="text-4xl font-light max-w-[600px] text-primary font-lato leading-[3rem] text-center lg:text-left"
					>
						Zdrowy styl życia, zrównoważona dieta i trochę aktywności fizycznej
						- klucz do Twojej wymarzonej sylwetki!
					</SlideX>
					<LinkButton
						className="w-full text-center text-3xl md:text-4xl lg:text-left md:w-fit md:self-center lg:self-start"
						text="Dowiedz się więcej"
						navigateTo={RoutePath.ABOUT}
					/>
				</div>
				<div className="flex-1 lg:w-1/2 flex items-center justify-center ">
					<div
						className="w-full h-full max-h-screen flex items-end justify-center lg:justify-end bg-primary"
						style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
					>
						<img
							src="/assets/offer.png"
							alt="Landing Image"
							className="object-contain w-auto max-h-[100vh] max-w-full md:max-h-[80vh] lg:max-h-screen"
						/>
					</div>
				</div>
			</div>
		</main>
	);
};
