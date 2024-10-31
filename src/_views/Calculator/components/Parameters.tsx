import { Input } from "@/components/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/_views/Home/components/Button";
import * as z from "zod";
import { useCalculatorData } from "../context/Calculator";

const REQUIRED_ERROR_MESSAGE = "Pole jest wymagane";
const MAX_LIMIT_ERROR_MESSAGE = "Przekroczono limit";

const schema = z.object({
	weight: z
		.number({
			required_error: REQUIRED_ERROR_MESSAGE,
			invalid_type_error: REQUIRED_ERROR_MESSAGE,
		})
		.min(1, REQUIRED_ERROR_MESSAGE)
		.max(300, MAX_LIMIT_ERROR_MESSAGE),
	height: z
		.number({
			required_error: REQUIRED_ERROR_MESSAGE,
			invalid_type_error: REQUIRED_ERROR_MESSAGE,
		})
		.min(1, REQUIRED_ERROR_MESSAGE)
		.max(250, MAX_LIMIT_ERROR_MESSAGE),
	age: z
		.number({
			required_error: REQUIRED_ERROR_MESSAGE,
			invalid_type_error: REQUIRED_ERROR_MESSAGE,
		})
		.min(1, REQUIRED_ERROR_MESSAGE)
		.max(100, MAX_LIMIT_ERROR_MESSAGE),
});

type FormData = z.infer<typeof schema>;

export const Parameters = ({ onNextStep }: { onNextStep: VoidFunction }) => {
	const { navigationData, updateNavigationData } = useCalculatorData();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({
		defaultValues: {
			age: navigationData.age || undefined,
			height: navigationData.height || undefined,
			weight: navigationData.weight || undefined,
		},
		mode: "all",
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormData> = (data) => {
		if (Object.values(data).some((value) => !value)) return;
		updateNavigationData({
			age: data.age,
			height: data.height,
			weight: data.weight,
		});
		onNextStep();
	};
	return (
		<div className="flex flex-col gap-8 text-center w-full md:min-w-[600px] max-w-2xl">
			<h5 className="text-3xl">Twoje parametry</h5>
			<form className="w-full">
				<Input
					required
					errors={errors}
					label="Waga (kg)"
					name="weight"
					id="weight"
					type="number"
					rules={{ valueAsNumber: true }}
					register={register}
				/>
				<Input
					required
					errors={errors}
					label="Wzrost (cm)"
					name="height"
					id="height"
					type="number"
					rules={{ valueAsNumber: true }}
					register={register}
				/>
				<Input
					required
					errors={errors}
					label="Wiek"
					name="age"
					id="age"
					type="number"
					rules={{ valueAsNumber: true }}
					register={register}
				/>
			</form>

			<Button
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
