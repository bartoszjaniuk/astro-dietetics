import * as React from "react";
import * as z from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirstStepCheckbox } from "./FirstStepCheckbox";
import { Button } from "@/_views/Home/components/Button";
import { useCalculatorData } from "../context/Calculator";

const schema = z.object({
	gender: z.string().min(1, "Wybierz płeć").trim(),
});

type FormData = z.infer<typeof schema>;

export const Gender = ({ onNextStep }: { onNextStep: VoidFunction }) => {
	const { navigationData, updateNavigationData } = useCalculatorData();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({
		defaultValues: { gender: navigationData.gender },
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormData> = (data) => {
		if (!data.gender) return;
		updateNavigationData({ gender: data.gender });
		onNextStep();
	};

	return (
		<div className="flex flex-col gap-8 text-center max-w-2xl">
			<h1 className="text-6xl ">Kalkulator kalorii UMAMI</h1>
			<p className="text-xl">
				Kalkulator kalorii to świetne narzędzie, które pozwoli Ci poznać Twoje
				dzienne zapotrzebowanie kaloryczne, wiek metaboliczny oraz optymalną
				wagę. Dzięki niemu możesz skutecznie dopasować swoją dietę do
				indywidualnych potrzeb i osiągnąć zamierzone cele zdrowotne!
			</p>
			<h5 className="text-3xl">Wybierz swoją płeć:</h5>
			<form className="flex gap-4">
				<FirstStepCheckbox label="Kobieta" register={register} value="female">
					<img src="/assets/woman.svg" />
				</FirstStepCheckbox>
				<FirstStepCheckbox label="Mężczyzna" register={register} value="male">
					<img src="/assets/man.svg" />
				</FirstStepCheckbox>
			</form>
			{errors.gender && <p style={{ color: "red" }}>{errors.gender.message}</p>}

			<Button
				disabled={!isValid}
				isWithoutAnimation
				type="submit"
				onClick={handleSubmit(onSubmit)}
				className="self-center"
			>
				Następny krok
			</Button>
			<p className="text-xl font-medium">
				Pewnie zastanawiasz się skąd wiem jak obliczyć dla Ciebie
				zapotrzebowanie kaloryczne
			</p>
			<p className="text-xl">
				Całkowitą przemianę materii nazywamy sumę dobowych wydatków
				energetycznych związanych z metabolizmem podstawowym, niezbędnym do
				utrzymanaia podstawowych funkcji życiowych (PPM) i aktywnością fizyczną
				(współczynnikiem PAL z ang. physical activity level). PAL uwzględnia
				aktywność związaną z uprawianiem sportu oraz tą polegającą na
				wykonywaniu codziennych obowiązków. CPM odpowiada całkowitemu
				zapotrzebowaniu na energię w ciągu dnia, wyrażona w kilokaloriach.
			</p>
			<h5 className="text-3xl">Wzór:</h5>
			<p className="uppercase p-4 border rounded-xl text-3xl text-primary">
				Całkowita Przemiana Materii (CPM) = PPM x współczynnik aktywności
				fizycznej PAL
			</p>
		</div>
	);
};
