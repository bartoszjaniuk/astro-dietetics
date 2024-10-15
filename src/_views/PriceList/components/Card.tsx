type Props = {
	title: string;
	price: string;
	items: string[];
	className?: string;
};
export const Card = ({ title, price, items, className }: Props) => {
	return (
		<article
			className={`shadow-md h-[650px] md:h-[400px] xl:h-[500px] bg-white p-8 flex flex-col gap-4 ${className}`}
		>
			<h3 className="text-4xl">{title}</h3>
			<p className="text-primary text-7xl">{price}</p>
			<ul className="list-none">
				{items.map((i) => (
					<li key={i} className="text-primary text-2xl leading-8">
						{i}
					</li>
				))}
			</ul>
		</article>
	);
};
