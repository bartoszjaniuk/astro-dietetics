import { cn } from "@/lib/utils";
import * as React from "react";

const Modal = ({
	children,
	onClose,
}: React.PropsWithChildren<{ onClose: VoidFunction }>) => {
	return (
		<div
			className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl bg-white rounded-lg z-[9999] w-full min-h-full md:w-[600px] md:min-h-[500px] "
			role="dialog"
		>
			<button className="absolute top-4 right-4 w-4 h-4 z-50" onClick={onClose}>
				<img
					src="/assets/close.svg"
					alt="Close button"
					className="w-full h-auto"
				/>
			</button>
			<div className="p-8 h-full w-full flex items-center md:justify-center">
				{children}
			</div>
		</div>
	);
};

const Backdrop = ({
	className,
	...props
}: React.PropsWithChildren<React.ComponentProps<"div">>) => {
	return (
		<div
			{...props}
			className={cn(
				"fixed top-0 left-0 w-screen h-full xl:min-h-screen bg-black opacity-50 z-[100]",
				className,
			)}
		></div>
	);
};

export const Dialog = ({
	isOpen,
	onClose,
	children,
}: React.PropsWithChildren<{
	isOpen: boolean;
	onClose: VoidFunction;
}>) => {
	if (!isOpen) return null;
	return (
		<>
			<Modal onClose={onClose}>{children}</Modal>
			<Backdrop />
		</>
	);
};
