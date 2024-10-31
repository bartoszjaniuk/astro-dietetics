import * as React from "react";

const calculatorBackgroundImageMap = [
	"/assets/calculator/gender.svg",
	"/assets/calculator/target.svg",
	"/assets/calculator/parameters.svg",
	"/assets/calculator/activity.svg",
	"/assets/calculator/summary.svg",
];

export const Layout = ({
	children,
	step,
	onGoBack,
}: React.PropsWithChildren<{ step: number; onGoBack: VoidFunction }>) => {
	const percentage = Math.round(
		(step / (calculatorBackgroundImageMap.length - 1)) * 100,
	);

	return (
		<main className="relative min-h-screen w-full bg-white grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-[2fr_1fr]">
			<span
				style={{ width: `${percentage}%` }}
				className="w-full h-6  bg-primary font-lato text-white absolute top-0 left-0 z-50 text-start responsive-padding-screen"
			>
				{percentage}%
			</span>
			<section className="bg-white min-h-full w-full responsive-padding-screen flex justify-center pt-16 relative">
				<img
					src="/assets/umami-logo.jpeg"
					alt=""
					className="w-48 absolute top-8 left-1/2 -translate-x-1/2"
				/>

				{step < 4 ? (
					<button
						onClick={onGoBack}
						className="absolute top-12 left-6 lg:left-12 xl:left-44 w-7 h-7"
					>
						<img src="/assets/arrowLeft.svg" alt="Wstecz" />
					</button>
				) : null}
				<div className="pt-8 w-full h-full">{children}</div>
			</section>
			<section className="bg-secondary min-h-full w-full flex items-center justify-center">
				<div className="w-full px-4 pt-4 xl:px-0 xl:pt-0 xl:w-[500px]">
					<img
						src={calculatorBackgroundImageMap[step]}
						alt="Osoba wskazująca na kalkulator"
						className="w-full h-auto"
					/>
				</div>
			</section>
		</main>
	);
};
