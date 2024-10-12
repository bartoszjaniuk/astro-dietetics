import { SlideX } from "@/animations/SlideX";
import { SlideY } from "@/animations/SlideY";

const before =
	'before:absolute before:bottom-0 before:left-0 before:opacity-45 before:content-[""] before:w-[80%] before:h-[80%] before:bg-primary before:[border-radius:30%_70%_70%_30%/30%_30%_70%_70%]';

const after =
	'after:absolute after:bottom-0 after:right-0 after:opacity-1 after:content-[""] after:w-[80%] after:h-[80%] after:bg-primary after:[border-radius:30%_70%_70%_30%/30%_30%_70%_70%]';

export const Introduction = () => {
	return (
		<section className="w-full h-full bg-white py-8 lg:py-0">
			<div className="flex flex-col-reverse lg:flex-row container responsive-padding mx-auto">
				<div className="flex-1 flex flex-col gap-6 items-center lg:items-start lg:py-8 lg:w-[50%] xl:w-[70%]">
					<SlideY
						component="h2"
						from="top"
						className="text-white bg-primary rounded-md px-4 py-2 w-fit text-center xl:text-2xl"
					>
						DIETETYK KLINICZNY I PSYCHODIETETYK
					</SlideY>
					<SlideX
						component="h2"
						from="left"
						className="text-4xl font-black text-primary text-left lg:text-left"
					>
						mgr Aleksandra Kajstura-Janiuk
					</SlideX>
					<SlideX
						component="p"
						from="left"
						className="font-light text-primary font-lato lg:text-left text-2xl lg:text-2xl xl:text-3xl"
					>
						Nazywam się Aleksandra Kajstura-Janiuk, jestem dietetykiem
						klinicznym i psychodietetykiem. Nauczę Cię jak zadbać o siebie oraz
						zacząć prowadzić zdrowy styl życia krok po kroku. Jestem absolwentką
						Uniwersytetu Opolskiego oraz Wyższej Szkole Biznesu i Nauk o Zdrowiu
						w Łodzi. Cały czas się szkolę, uczę i zdobywam wiedzę na kursach czy
						szkoleniach. Służę pomocą jeśli zmagasz się z problemami
						zdrowotnymi, z nadmierną lub za niską masą ciała lub po prostu
						chcesz zmienić swoje nawyki żywieniowe.
					</SlideX>
					<p className="font-medium text-primary text-3xl">
						Współpracując ze mną nie tylko{" "}
						<span className="font-black">uzyskasz wymarzoną sylwetkę </span> ale
						również pokochasz swoje ciało{" "}
						<span className="font-black">i poprawisz swoje samopoczucie!</span>{" "}
					</p>
				</div>
				<div
					className={`flex-grow-1 xl:w-[30%] flex justify-center pt-8 ${before} ${after}`}
				>
					<img
						src="/assets/about.png"
						alt="Landing Image"
						className="object-contain w-auto max-w-full h-[600px] z-10"
					/>
				</div>
			</div>
		</section>
	);
};
