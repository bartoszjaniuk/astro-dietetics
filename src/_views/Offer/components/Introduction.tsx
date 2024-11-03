import { LinkButton } from "@/_views/Home/components/LinkButton";
import { SlideX } from "@/animations/SlideX";
import { SlideY } from "@/animations/SlideY";

const before =
  'before:hidden before:lg:block before:absolute before:bottom-0 before:left-0 before:opacity-45 before:content-[""] before:w-[80%] before:h-[80%] before:border before:border-primary before:[border-radius:30%_70%_70%_30%/30%_30%_70%_70%]';

const after =
  'after:hidden after:lg:block after:absolute after:bottom-64 after:left-64 after:opacity-1 after:content-[""] after:w-[80%] after:h-[80%] after:border after:border-primary after:[border-radius:30%_70%_70%_30%/30%_30%_70%_70%]';

export const Introduction = () => {
  return (
    <section className="w-full h-full bg-white py-8 lg:py-0">
      <div className="flex flex-col-reverse lg:flex-row container responsive-padding mx-auto">
        <div className="flex-1 flex flex-col gap-4 items-center lg:items-start lg:py-8 lg:max-w-[60%]">
          <SlideY
            component="h1"
            from="top"
            className="text-4xl lg:text-6xl pt-8"
          >
            WSPÓŁPRACA DIETETYCZNA.
          </SlideY>
          <SlideX
            component="h2"
            from="left"
            className="text-2xl lg:text-3xl text-primary text-left lg:text-left"
          >
            Zrób pierwszy krok już dziś, nie jutro.
          </SlideX>
          <SlideX
            component="p"
            from="left"
            className="font-light text-primary font-lato lg:text-left text-xl lg:text-2xl 2xl:text-3xl"
          >
            Pomogę Ci poprawić swoją sylwetkę i samopoczucie bez wielkich
            wyrzeczeń, nawet jeśli zmagasz się z jakimiś problemami zdrowotnymi.
            Dzięki mojej pomocy będziesz mieć więcej energii i polepszysz swoje
            samopoczucie oraz stan zdrowia!
          </SlideX>
          <LinkButton text="Sprawdź ofertę" navigateTo="#moje-uslugi" />
        </div>
        <div
          className={`flex-grow-1 xl:w-[30%] flex justify-center pt-8 ${before} ${after}`}
        >
          <img
            src="/assets/pani-dietetyk-poza-bok.webp"
            alt="Zdjęcie Pani Dietetyk ze skrzyżowanymi rękoma bokiem"
            className="object-contain w-auto max-w-full h-[600px] z-10"
          />
        </div>
      </div>
    </section>
  );
};
