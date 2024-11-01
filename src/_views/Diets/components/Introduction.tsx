import { LinkButton } from "@/_views/Home/components/LinkButton";
import { SlideX } from "@/animations/SlideX";
import { SlideY } from "@/animations/SlideY";
import { AbstractShape } from "@/components/AbstractShape/AbstractShape";

export const Introduction = () => {
  return (
    <section className="w-full h-full bg-white py-8 lg:py-0 relative">
      <AbstractShape className="absolute left-16 top-0 w-32" />
      <AbstractShape className="absolute right-32 top-32 w-48" />
      <div className="container responsive-padding mx-auto">
        <div className="flex-1 flex flex-col gap-6 lg:py-8 text-center">
          <SlideY
            component="h1"
            from="top"
            className="text-4xl md:text-6xl lg:leading-[4rem]"
          >
            Osiągnij wymarzoną sylwetkę i <br /> doskonałe samopoczucie pod{" "}
            <br /> okiem wykwalifikowanego <br /> dietetyka.
          </SlideY>
          <SlideX component="p" from="right" className="text-2xl text-center">
            Umami to miejsce, gdzie każdego dnia rozprawiam się ze złymi
            nawykami żywieniowymi. <br /> W tym miejscu pomogę Ci je zdrowo i
            skutecznie wdrożyć w życie. <br /> Tak jak lubisz. Bez wyrzeczeń,
            bez stresu oraz bez efektu jo-jo.
          </SlideX>

          <LinkButton
            text="Sprawdź gotowe jadłospisy"
            navigateTo="#jadłospisy"
            className="self-center"
          />
        </div>
      </div>
    </section>
  );
};
