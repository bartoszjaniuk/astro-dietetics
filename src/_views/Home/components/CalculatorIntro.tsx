import React from "react";
import { SlideX } from "../../../animations/SlideX";
import { SlideY } from "../../../animations/SlideY";
import { LinkButton } from "./LinkButton";
import {
  AppRoute,
  RoutePath,
} from "../../../components/Footer/components/enums/appRoutes";
import { AbstractShape } from "@/components/AbstractShape/AbstractShape";

const classNameAfter =
  'after:absolute after:content-[""] after:w-full after:h-full after:top-0 after:left-0 after:-z-[1] after:bg-softGray after:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_75%)]';
const classNameBefore =
  'before:absolute before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:-z-[1] before:bg-white';

export const CalculatorIntro = () => {
  return (
    <section
      className={`min-h-[65rem] flex items-center z-10 py-8 gap-10 lg:gap-16 ${classNameAfter} ${classNameBefore}`}
    >
      <AbstractShape className="absolute right-96 top-0 opacity-80 w-32" />
      <div className="container responsive-padding mx-auto flex flex-col xl:flex-row gap-8">
        <div className="w-full flex flex-col gap-8 xl:gap-16">
          <SlideX
            component="h1"
            className="text-4xl md:text-6xl xl:text-7xl flex flex-col gap-3"
          >
            <p>
              Jaka
              <span className="pl-3 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[110%] before:h-[110%] before:-z-[1] before:md:border before:md:border-primary before:md:[border-radius:40%_70%_27%_73%/49%_31%_59%_51%]">
                kaloryczność
              </span>
            </p>
            <p>będzie dla Ciebie </p>
            <p className="pl-3 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[110%] before:h-[130%] before:-z-[1] before:md:border before:md:border-primary before:md:[border-radius:30%_70%_27%_73%/49%_71%_69%_51%] w-fit">
              odpowiedia?
            </p>
          </SlideX>
          <SlideX from="right" component="p" className="text-2xl xl:text-3xl">
            Skorzystaj z kalkulatora, aby dowiedzieć się, jakie obecnie masz
            zapotrzebowanie kaloryczne. Po wpisaniu swoich danych dowiesz się
            ile powinieneś jeść, aby osiągnąć swój cel.
          </SlideX>
          <SlideY className="flex flex-col text-xl lg:flex-row gap-2 lg:gap-8">
            <LinkButton
              navigateTo={RoutePath.KALKULATOR}
              className="w-full lg:w-fit text-center xl:w-fit xl:text-left"
              text="Przejdź do kalkulatora"
            />

            <div className="relative">
              <p className="opacity-0 min-w-[256px]">Napisz do mnie</p>
              <img
                className="hidden xl:block absolute top-10 right-0 z-[100] scale-[1.7]"
                alt="Strzałka wskazująca kierunek"
                src="/assets/arrowPointer.svg"
              />
            </div>
          </SlideY>
        </div>
        <div className="w-full">
          <img
            src="assets/personWithPhone.svg"
            alt="Osoba patrząca na telefon komórkowy"
          />
        </div>
      </div>
    </section>
  );
};
