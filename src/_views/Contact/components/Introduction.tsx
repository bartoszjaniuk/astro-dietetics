import { SlideX } from "@/animations/SlideX";
import { SlideY } from "@/animations/SlideY";

const before =
  'before:hidden before:lg:block before:absolute before:bottom-0 before:left-0 before:opacity-45 before:content-[""] before:w-[80%] before:h-[80%] before:border before:border-primary before:[border-radius:30%_70%_70%_30%/30%_30%_70%_70%]';

const after =
  'after:hidden after:lg:block after:absolute after:bottom-64 after:left-64 after:opacity-1 after:content-[""] after:w-[80%] after:h-[80%] after:border after:border-primary after:[border-radius:30%_70%_70%_30%/30%_30%_70%_70%]';

export const Introduction = () => {
  return (
    <section className="w-full h-full bg-white py-8 lg:py-0 shadow-lg">
      <div className="flex flex-col-reverse lg:flex-row container responsive-padding mx-auto">
        <div className="flex-1 flex flex-col gap-6 items-center lg:items-start lg:py-8">
          <SlideY
            component="h2"
            from="top"
            className="text-5xl xl:text-7xl pt-8"
          >
            Kontakt
          </SlideY>

          <SlideX
            component="p"
            from="left"
            className="font-light text-primary font-lato lg:text-left text-2xl lg:text-2xl xl:text-3xl"
          >
            Chciałbyś zrobić pierwszy krok w kierunku sylwetki marzeń? Poprawić
            wyniki badań i stan swojego zdrowia? Masz pytania i wątpliwości jak
            schudnąć lub przytyć? <br /> Śmiało, napisz do mnie! Odpowiem tak
            szybko, jak to możliwe.
          </SlideX>
        </div>
        <div className="flex-grow-1 xl:w-[30%] flex justify-center pt-8">
          <img
            src="/assets/contact.jpg"
            alt="Landing Image"
            className="object-contain w-auto max-w-full h-[500px] z-10"
          />
        </div>
      </div>
    </section>
  );
};
