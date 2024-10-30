import React, { useEffect } from "react";
import { Button } from "@/_views/Home/components/Button";
import { ActivityTable } from "./ActivityTable";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useCalculatorData, type NavigationData } from "../context/Calculator";
import { RadioButton } from "./RadioButton";
import { activity } from "../constants/calculator";

const schema = z.object({
  activity: z.string().min(1, "Wybierz cel").trim(),
});

type FormData = z.infer<typeof schema>;

const retrieveGoal = (goal: "gain" | "lose" | "hold") => {
  if (goal === "lose") {
    return -500;
  } else if (goal === "hold") {
    return 0;
  } else {
    return 500;
  }
};

const activityMap = {
  layingInBed: 1.2,
  low: 1.4,
  medium: 1.6,
  high: 1.8,
  veryHigh: 2,
};

const calculateCalories = (navigationData: Omit<NavigationData, "summary">) => {
  const { activity, age, height, weight, gender, goal } = navigationData;
  const goalAmount = retrieveGoal(goal as "gain" | "lose" | "hold");
  const activityValue = activityMap[activity as keyof typeof activityMap];
  console.log({ goalAmount, activityValue });

  if (gender === "male") {
    return Math.round(
      (66.5 +
        13.75 * Number(weight) +
        5.003 * Number(height) -
        6.775 * Number(age)) *
        activityValue +
        goalAmount
    );
  } else {
    return Math.round(
      (655.1 +
        9.565 * Number(weight) +
        1.85 * Number(height) -
        4.676 * Number(age)) *
        activityValue +
        goalAmount
    );
  }
};

export const Activity = ({ onNextStep }: { onNextStep: VoidFunction }) => {
  const { navigationData, updateNavigationData } = useCalculatorData();

  useEffect(() => {
    if (navigationData.activity) {
      updateNavigationData({ summary: calculateCalories(navigationData) });
      onNextStep();
    }
  }, [navigationData.activity]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: { activity: navigationData.activity },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!data.activity) return;
    updateNavigationData({ activity: data.activity });
  };

  return (
    <div className="flex flex-col gap-8 text-center max-w-2xl">
      <h5 className="text-3xl">Aktywności oraz ich intensywność</h5>
      <form>
        <ul className="flex flex-col gap-2 list-none">
          <RadioButton
            register={register}
            name="activity"
            value={activity.layingInBed}
            label="pacjent leżący w łóżku"
          />
          <RadioButton
            register={register}
            name="activity"
            value={activity.low}
            label="aktywność fizyczna niska"
          />
          <RadioButton
            register={register}
            name="activity"
            value={activity.medium}
            label="aktywność fizyczna umiarkowana"
          />
          <RadioButton
            register={register}
            name="activity"
            value={activity.high}
            label="aktywność fizyczna wysoka"
          />
          <RadioButton
            register={register}
            name="activity"
            value={activity.veryHigh}
            label="aktywność fizyczna bardzo wysoka"
          />
        </ul>
      </form>
      <Button
        type="submit"
        isWithoutAnimation
        className="self-center"
        onClick={handleSubmit(onSubmit)}
      >
        Następny krok
      </Button>
      <h5 className="text-2xl font-medium">
        Jeśli nie wiesz jaki rodzaj aktywności wybrać, skorzystaj z poniższej
        tabelki
      </h5>

      <ActivityTable />
    </div>
  );
};
