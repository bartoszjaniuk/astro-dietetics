import * as React from "react";

type ModalContextProps = {
	isModalOpen: boolean;
	openModal: VoidFunction;
	closeModal: VoidFunction;
	chooseDiet: (diet: string) => void;
	diet?: string;
};

const ModalContext = React.createContext<ModalContextProps | undefined>(
	undefined,
);

export const ModalProvider = ({ children }: React.PropsWithChildren) => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [diet, setDiet] = React.useState<string | undefined>(undefined);

	const closeModal = () => setIsModalOpen(false);
	const openModal = () => setIsModalOpen(true);

	return (
		<ModalContext.Provider
			value={{ isModalOpen, closeModal, openModal, chooseDiet: setDiet, diet }}
		>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const context = React.useContext(ModalContext);

	if (context === undefined) {
		throw new Error(
			"ModalContext is unavailable, make sure you are using ModalProvider",
		);
	}

	return context;
};
