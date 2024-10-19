import { Introduction } from "./components/Introduction";
import { DietsList } from "./components/DietsList";

const Content = () => {
	return (
		<>
			<Introduction />
			<DietsList />
		</>
	);
};

export const Diets = () => {
	return <Content />;
};
