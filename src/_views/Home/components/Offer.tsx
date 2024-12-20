import React from "react";
import { RoutePath } from "../../../components/Footer/components/enums/appRoutes";
import { LinkButton } from "./LinkButton";
import { AbstractShape } from "@/components/AbstractShape/AbstractShape";
import { SlideX } from "@/animations/SlideX";
import { SlideY } from "@/animations/SlideY";

export const Offer = () => {
  return (
    <main className="relative bg-white min-h-screen lg:min-h-[93vh] xl:min-h-screen z-50">
      <AbstractShape className="absolute left-40 top-8 z-[1] w-40 opacity-85" />

      <AbstractShape className="absolute right-16 bottom-24 z-[1] w-20 opacity-85" />
      <div className="min-h-screen lg:min-h-[93vh] xl:min-h-screen flex flex-col lg:flex-row bg-white container responsive-padding mx-auto gap-8 xl:gap-0">
        <div className="flex-1 flex flex-col gap-4 justify-center items-center lg:items-start pt-4 md:pt-8 lg:pt-0 lg:w-1/2 ">
          <SlideX
            component="h2"
            from="left"
            className="text-4xl text-primary text-center"
          >
            Cześć! Nazywam się
          </SlideX>
          <SlideX
            component="h2"
            from="right"
            className="text-3xl font-black text-primary text-center lg:text-left"
          >
            mgr Aleksandra Kajstura-Janiuk
          </SlideX>
          <SlideX
            component="p"
            from="left"
            className="text-2xl font-light max-w-[600px] text-primary font-lato leading-[2rem] text-center lg:text-left"
          >
            Zdrowy styl życia, zrównoważona dieta i trochę aktywności fizycznej
            - klucz do Twojej wymarzonej sylwetki!
          </SlideX>

          <LinkButton text="Dowiedz się więcej" navigateTo={RoutePath.ABOUT} />
        </div>
        <div className="flex-1 lg:w-1/2 flex items-center justify-center ">
          <div
            className="w-full h-full max-h-screen flex items-end justify-center lg:justify-end bg-primary"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          >
            <img
              src="/assets/pani-dietetyk-poza.webp"
              alt="Zdjęcie Pani dietetyk w pozie ze skrzyżowanymi rękoma przodem"
              className="object-contain w-auto max-h-[100vh] max-w-full md:max-h-[80vh] lg:max-h-screen"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
