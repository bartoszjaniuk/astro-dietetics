import React from "react";

const text = `„Sukces jest jak drabina – nie wejdziesz na nią trzymając ręce w
          kieszeni.” – Philip Wylie`;

export const FixedQuote = () => {
	return (
		<section className="min-h-80 w-full relative container responsive-padding mx-auto flex items-center z-[5]">
			<span className="opacity-20 fixed left-[0%] top-[0%] w-full h-full [background-image:url('assets/breakfast.jpg')] xl:bg-no-repeat xl:bg-cover " />

			<h2 className="text-4xl">{text}</h2>
		</section>
	);
};
