import * as React from "react";
import * as z from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/_views/Home/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioButton } from "./RadioButton";
import { goal } from "../constants/calculator";
import { useCalculatorData } from "../context/Calculator";

const schema = z.object({
	goal: z.string().min(1, "Wybierz cel").trim(),
});

type FormData = z.infer<typeof schema>;

export const Goal = ({ onNextStep }: { onNextStep: VoidFunction }) => {
	const { navigationData, updateNavigationData } = useCalculatorData();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({
		defaultValues: { goal: navigationData.goal },
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormData> = (data) => {
		if (!data.goal) return;
		updateNavigationData({ goal: data.goal });
		onNextStep();
	};

	return (
		<div className="flex flex-col gap-8 text-center max-w-2xl bg-purple-400 min-h-full">
			<h5 className="text-3xl">Jaki jest Twój cel?</h5>
			<form className="w-full md:min-w-[600px] h-full">
				<ul className="flex flex-col gap-2 list-none">
					<RadioButton
						register={register}
						name="goal"
						label="chcę schudnąć"
						value={goal.lose}
					/>
					<RadioButton
						register={register}
						name="goal"
						label="chcę utrzymać masę ciała"
						value={goal.hold}
					/>
					<RadioButton
						register={register}
						name="goal"
						label="chcę przytyć"
						value={goal.gain}
					/>
				</ul>
			</form>
			<Button
				isWithoutAnimation
				disabled={!isValid}
				type="submit"
				onClick={handleSubmit(onSubmit)}
				className="self-center"
			>
				Następny krok
			</Button>
		</div>
	);
};
