import { SlideX } from "@/animations/SlideX";
import { SlideY } from "@/animations/SlideY";

export const Introduction = () => {
	return (
		<section className="w-full h-full bg-white py-8 lg:py-0 relative">
			<img
				src="/assets/vegetables.jpg"
				alt="Obrazki warzyw"
				className="absolute left-0 top-0 h-full hidden md:block md:-left-[300px] lg:-left-[220px] xl:left-0"
			/>
			<img
				src="/assets/vegetables.jpg"
				alt="Obrazki warzyw"
				className="absolute right-0 top-0 h-full hidden md:block md:-right-[300px] lg:-right-[220px] xl:right-0"
			/>
			<div className="container responsive-padding mx-auto">
				<div className="flex-1 flex flex-col gap-6 lg:py-8 text-center">
					<SlideY
						component="h2"
						from="top"
						className="text-6xl xl:text-7xl pt-8  text-primary"
					>
						Gabinet Dietetyczny
					</SlideY>
					<SlideX component="h2" from="left" className="text-4xl">
						Wszystkie wizyty łączą w sobie porady dietetyczne, elementy
						motywacji, edukację żywieniową, <br /> pracę z procesem zmiany,
						uzyskanie trwałego efektu <br /> i zadowolenia z siebie.
					</SlideX>
				</div>
			</div>
		</section>
	);
};