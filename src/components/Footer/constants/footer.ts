import type { ColumnProps } from "../components/Column";
import { AppRoute, RoutePath } from "../components/enums/appRoutes";

export const FOOTER_OFFERT: ColumnProps = {
	heading: "Oferta",
	gridColumn: "3/4",
	entries: [
		{
			type: "link",
			content: "Uslugi",
			link: RoutePath.OFFER,
		},
		{
			type: "link",
			content: "Jadłospisy",
			link: RoutePath.MENUS,
		},
		{
			type: "link",
			content: "Dieta Indywidualna",
			link: RoutePath.PRICE_LIST,
		},
		{
			type: "link",
			content: "Kalkulator kalorii",
			link: RoutePath.KALKULATOR,
		},
	],
};

export const FOOTER_ABOUT: ColumnProps = {
	heading: "O mnie",
	gridColumn: "3/4",
	entries: [
		{
			type: "link",
			content: "Wyksztalcenie",
			link: RoutePath.ABOUT,
		},
		{
			type: "link",
			content: "Certyfikaty",
			link: `${RoutePath.ABOUT}#certyfikaty`,
		},
		{
			type: "link",
			content: "Jak rozpocząć współpracę",
			link: `${RoutePath.HOME}#jak-rozpoczac-wspolprace`,
		},
	],
};

export const FOOTER_CONTACT: ColumnProps = {
	heading: "Kontakt",
	gridColumn: "1/2",
	entries: [
		{
			type: "normal",
			content: "Akademia Fitness",
		},
		{
			type: "normal",
			content: "ul. Ocicka 4, 47-400 Racibórz",
		},
		{
			type: "normal",
			content: "Numer telefonu",
		},
		{
			type: "normal",
			content: "+ 48 570 498 067",
		},
	],
};

export const AppRoutes = [
	{ title: AppRoute.ABOUT, url: "/o-mnie" },
	{ title: AppRoute.OFFER, url: "/oferta" },
	{ title: AppRoute.PRICE_LIST, url: "/cennik" },
	{ title: AppRoute.MENUS, url: "/diety" },
	{ title: AppRoute.CONTACT, url: "/kontakt" },
];
