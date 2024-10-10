import { Column } from "./components/Column";
import {
	FOOTER_CONTACT,
	FOOTER_OFFERT,
	FOOTER_ABOUT,
} from "./constants/footer";
import statuteReference from "/regulamin.pdf";

export const Footer = () => {
	return (
		<footer className="w-full bg-primary text-white h-full z-10">
			<div className="container mx-auto h-full primary-selection bg-inherit">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-2 py-8 responsive-padding bg-inherit text-inherit">
					<Column {...FOOTER_CONTACT} />
					<Column {...FOOTER_OFFERT} />
					<Column {...FOOTER_ABOUT} />
				</div>
			</div>
			<div className="w-full bg-white text-primary lg:h-16 flex lg:items-center py-4 ">
				<div className="container mx-auto responsive-padding flex  justify-between bg-inherit">
					<h5 className="text-xl sm:text-base 2xl:text-2xl  bg-inherit">
						© 2022 Gabinet Dietetyczny UMAMI
					</h5>
					<div className="flex gap-4 text-xl sm:text-base 2xl:text-2xl">
						<a href={statuteReference} target="_blank">
							Regulamin i RODO
						</a>

						<a href="/polityka-cookies">Polityka prywatności i cookies</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
