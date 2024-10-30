import React from "react";
import { useCalculatorData } from "../context/Calculator";
import { Button } from "@/_views/Home/components/Button";
import { AbstractShape } from "@/components/AbstractShape/AbstractShape";
import { SummaryTable } from "./SummaryTable";
import { LinkButton } from "@/_views/Home/components/LinkButton";

export const Summary = () => {
  const { navigationData } = useCalculatorData();
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl md:min-w-[600px] relative">
      <AbstractShape className="absolute -right-56 top-0 w-16" />
      <AbstractShape className="absolute -left-72 -bottom-96 w-56" />

      <div className="pt-4">
        <h5 className="text-3xl pb-8">Wynik zapotrzebowania:</h5>
        <h2 className="text-8xl text-center text-primary">
          <span className="pl-3 z-40 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[110%] before:h-[110%] before:-z-[1] before:border before:border-primary before:[border-radius:40%_70%_27%_73%/49%_31%_59%_51%]">
            {navigationData.summary} <br /> kcal
          </span>
        </h2>
      </div>

      <SummaryTable {...navigationData} />

      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <LinkButton
          className="w-full md:w-fit container responsive-padding mx-auto text-center"
          navigateTo="/#napisz-do-mnie"
          text="Napisz do mnie"
        />
        <LinkButton
          variant="inverted"
          className="w-full md:w-fit container responsive-padding mx-auto text-center"
          navigateTo="/kalkulator"
          text="Oblicz ponownie"
        />
      </div>
    </div>
  );
};
