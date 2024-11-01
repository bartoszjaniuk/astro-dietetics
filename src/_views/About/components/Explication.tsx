import { LinkButton } from "@/_views/Home/components/LinkButton";
import { SlideX } from "@/animations/SlideX";

export const Explication = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:items-center bg-softGray container responsive-padding mx-auto gap-8 py-8">
      <div className="flex-grow-1 lg:w-1/2 lg:h-full lg:items-center flex justify-center">
        <img
          src="/assets/about-avocado.png"
          alt="Kobieta trzymająca w ręku avocado"
          className="object-contain w-auto max-w-full h-full xl:h-[600px] rounded-full"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 items-center justify-center  md:items-start md:pt-8 lg:w-[50%]">
        <SlideX
          component="h2"
          from="left"
          className="text-3xl font-black text-primary text-left lg:text-left"
        >
          U mnie nie ma diety cud!
        </SlideX>
        <SlideX
          component="p"
          from="left"
          className="font-light text-primary font-lato lg:text-left lg:text-2xl 2xl:text-3xl"
        >
          Jako dietetyk kliniczny i psychodietetyk przeprowadzę Cię przez proces
          zmiany nawyków żywieniowych bez magicznych sztuczek. Nauczę Cię jak
          jeść smacznie i zdrowo, a kiedy pojawią się pierwsze efekty i w
          związku z tym poprawi się Twoje samopoczucie pokażę Ci jak utrzymać
          wymarzoną sylwetkę i upragniony styl życia.
        </SlideX>
        <p className="pt-2 text-primary text-2xl  font-medium uppercase">
          ZMIANA NAWYKÓW ŻYWIENIOWYCH = ZMIANA STYLU ŻYCIA.
        </p>

        <div className="flex flex-col xl:flex-row gap-4 xl:gap-4 justify-center w-full">
          <LinkButton
            text="Przejdź do oferty"
            navigateTo="/oferta"
            className="w-full text-center"
          />
          <LinkButton
            variant="inverted"
            text="Sprawdź jadłospisy"
            navigateTo="/diety"
            className="w-full text-center"
          />
        </div>
      </div>
    </div>
  );
};
