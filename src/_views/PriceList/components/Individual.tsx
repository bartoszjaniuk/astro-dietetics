import { SlideX } from "@/animations/SlideX";
import { SlideY } from "@/animations/SlideY";
import { Card } from "./Card";
import { LinkButton } from "@/_views/Home/components/LinkButton";

const individuals = [
  {
    title: "Plan żywieniowy na 7 dni",
    price: "150 zł",
    items: [
      "Indywidualny plan żywieniowy",
      "Indywidualne zalecenia",
      "Jadłospis na 7 dni",
      "Jadłospis idealnie dopasowany do Twoich potrzeb",
    ],
  },
  {
    title: "Pierwsza konsultacja",
    price: "150 zł",
    items: [
      "Wywiad zdrowotny i żywieniowy",
      "Pomiar na analizatorze składu masy ciała",
      "Omówienie dotychczasowej diety i błędów żywieniowych",
      "Edukacja żywieniowa i indywidualne zalecenia",
      "Koszt każdej kolejnej wizyty kontrolnej to 100 zł",
    ],
  },
  {
    title: "Plan żywieniowy na 14 dni",
    price: "200 zł",
    items: [
      "Indywidualny plan żywieniowy",
      "Indywidualne zalecenia",
      "Jadłospis na 14 dni",
      "Jadłospis idealnie dopasowany do Twoich potrzeb",
    ],
  },
];

export const Individual = () => {
  return (
    <section className="w-full h-full bg-softGray py-8 lg:py-0 relative">
      <div className="container responsive-padding mx-auto">
        <div className="flex-1 flex flex-col gap-4 lg:py-8 text-center">
          <SlideY
            component="h2"
            from="top"
            className="text-5xl xl:pt-8 text-primary"
          >
            Konsultacja Indywidualna
          </SlideY>
          <SlideX component="p" from="left" className="text-2xl leading-8">
            Chcesz zmienić styl życia na lepsze, ale nie masz pojęcia od czego
            zacząć? <br /> Potrzebujesz wsparcia i opieki od dietetyka? <br />{" "}
            <p className="text-primary font-bold text-2xl">
              Ta opcja jest właśnie dla Ciebie!
            </p>
          </SlideX>
          <div className="py-8 grid grid-cols-1 xl:grid-cols-3 gap-4 ">
            {individuals.map((item, i) => (
              <Card
                key={i}
                {...item}
                className={
                  i === 1 ? "xl:-translate-y-4 border-[3px] border-primary" : ""
                }
              />
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <h5 className="text-2xl leading-8">
              Wizyta może zostać przeprowadzona w dogodnej dla Ciebie formie
              (WhatsApp, Facebook, MS Teams itp.) lub stacjonarnie.
            </h5>
            <p className="text-2xl font-bold leading-8 text-primary">
              Po każdej konsultacji istnieje możliwość wykupienia planu
              żywieniowego.
            </p>
            <LinkButton
              text="Umów się na wizytę"
              navigateTo="/kontakt"
              className="self-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
