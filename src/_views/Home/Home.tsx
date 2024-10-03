import * as React from "react";
import { ModalProvider } from "../../providers/ModalProvider";
import { RoutePath } from "../../components/Footer/components/enums/appRoutes";
import { LinkButton } from "./components/LinkButton";

const useInitMailer = () => {
	React.useEffect(() => {
		fetch("https://umami-get-mailed.onrender.com/api/v1/app/init", {
			method: "POST",
		});
	}, []);
};

const AbstractShape = () => {
	return (
		<span className="absolute -bottom-8 -left-[20rem] w-[25rem] h-[25rem] lg:left-[-10%] lg:top-0 xl:w-[24rem] xl:h-[24rem] rounded-full border border-primary after:absolute after:content-[''] after:w-[98%] after:h-[98%] after:opacity-70 after:flex after:items-center after:justify-center after:bg-primary after:rounded-full"></span>
	);
};

const Content = () => {
	useInitMailer();
	return (
		<main className="w-full min-h-screen relative bg-white ">
			<AbstractShape />

			<div className="container responsive-padding mx-auto flex flex-wrap gap-8 lg:gap-0">
				<div className="flex flex-col gap-8 bg-white justify-center">
					<h1 className="text-5xl text-primary">Cześć! Nazywam się</h1>
					<h2 className="text-5xl font-black text-primary">
						mgr Aleksandra Kajstura-Janiuk
					</h2>
					<p className="text-4xl font-light max-w-[600px] text-primary font-lato leading-[3rem]">
						Zdrowy styl życia, zrównoważona dieta i trochę aktywności fizycznej
						- klucz do Twojej wymarzonej sylwetki!
					</p>
					<LinkButton text="Dowiedz się więcej" navigateTo={RoutePath.ABOUT} />
				</div>
				<div
					className="w-full flex px-4 h-full md:h-[800px] lg:w-1/2 lg:h-fit bg-primary"
					style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
				>
					<img
						className="w-full h-full object-contain"
						src="/assets/offer.png"
						alt="Aleksandra Kajstura Janiuk - oferta"
					/>
				</div>
			</div>
		</main>
	);
};

export const Home = () => {
	return (
		<ModalProvider>
			<Content />
		</ModalProvider>
	);
};
