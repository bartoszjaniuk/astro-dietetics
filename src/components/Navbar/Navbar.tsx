import React from "react";
import { MENU_LINKS } from "./constants/menuLinks";
import { motion } from "framer-motion";
import { ResponsiveLinks } from "./components/ResponsiveLinks";
import { INSTAGRAM_URL, FACEBOOK_URL } from "../../constants/socialMedia";

type Props = {
	currentPath: string;
};

const makePathFromLink = (path: string) => path.slice(1).replace(" ", "-");

export const Navbar = ({ currentPath }: Props) => {
	return (
		<div className="bg-white w-full fixed z-50">
			<nav className="container responsive-padding mx-auto h-24 flex items-center justify-between gap-16 relative z-50 ">
				<a href="/">
					<img
						src="/assets/umami-logo.jpeg"
						className="w-48 mr-4"
						alt="Gabinet Dietetyczny Umami logo"
					/>
				</a>
				<ResponsiveLinks />
				<div className="links">
					{MENU_LINKS.map((link, index) => {
						const isActive = currentPath === makePathFromLink(link.path);
						return (
							<a
								className={`relative text-xl md:text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center whitespace-nowrap   ${
									isActive ? "text-primary" : null
								}`}
								key={index}
								href={link.path}
							>
								{link.title}
							</a>
						);
					})}
				</div>
				<div className="gap-4 hidden xl:flex items-center">
					<button className="border border-primary rounded-sm px-4 py-2 text-xl ">
						Napisz do mnie
					</button>
					<button className="bg-primary text-white rounded-sm px-4 py-2 text-xl ">
						Kalkulator
					</button>
				</div>
				<ul className="hidden lg:flex gap-4 h-[96px] list-none items-center">
					<motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
						<a href={INSTAGRAM_URL} className="cursor-pointer">
							<img width={24} src="/assets/ig.svg" alt="Profil na Instagram" />
						</a>
					</motion.li>
					<motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
						<a href={FACEBOOK_URL} className="cursor-pointer">
							<img width={24} src="/assets/fb.svg" alt="Profil na Facebook" />
						</a>
					</motion.li>
					<motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
						<a href={FACEBOOK_URL} className="cursor-pointer">
							<img width={24} src="/assets/tiktok.svg" alt="Profil na TikTok" />
						</a>
					</motion.li>
				</ul>
			</nav>
		</div>
	);
};
