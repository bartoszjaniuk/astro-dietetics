export const StripWithIcons = () => {
	return (
		<div className="w-full bg-primary flex  gap-8 justify-center h-fit py-4 xl:py-0 xl:h-20 text-white">
			<ul className="flex flex-col md:flex-row gap-8 xl:gap-4 list-none">
				<li className="flex gap-3 justify-center items-center">
					<img className="w-10 h-10" src="/assets/chat.svg" alt="Dymki chatu" />
					<p className="text-xl">Konsultacje dietetyczne</p>
				</li>
				<li className="flex gap-3 justify-center items-center">
					<img className="w-10 h-10" src="/assets/plan.svg" alt="Brzuch" />
					<p className="text-xl">Indywidualny plan żywieniowy</p>
				</li>
				<li className="flex gap-3 justify-center items-center">
					<img className="w-10 h-10" src="/assets/meet.svg" alt="Brzuch" />
					<p className="text-xl">Edukacja żywieniowa</p>
				</li>
			</ul>
		</div>
	);
};
