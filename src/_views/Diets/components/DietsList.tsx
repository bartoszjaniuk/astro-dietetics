import * as React from "react";
import { Button } from "@/_views/Home/components/Button";
import { Dialog } from "@/components/Dialog/Dialog";
import {
  ContactForm,
  contactFormDefaultValues,
} from "@/_views/shared/components/ContactForm";
import { useContact } from "@/hooks/useContact";
import { Alert } from "@/_views/Home/components/Alert";

const individuals = [
  {
    title: "Plan żywieniowy na 7 dni",
    imgSrc: "/assets/pancakes.jpeg",
    items: [
      "Indywidualny plan żywieniowy",
      "Indywidualne zalecenia",
      "Jadłospis na 7 dni",
      "Jadłospis idealnie dopasowany do Twoich potrzeb",
    ],
  },
  {
    title: "Pierwsza konsultacja",
    imgSrc: "/assets/sandwich.jpeg",
    items: [
      "Wywiad zdrowotny i żywieniowy",
      "Pomiar na analizatorze składu masy ciał",
      "Omówienie dotychczasowej diety i błędów żywieniowych",
      "Edukacja żywieniowa i indywidualne zalecenia",
      "Koszt każdej kolejnej wizyty kontrolnej to 100 zł",
    ],
  },
  {
    title: "Plan żywieniowy na 14 dni",
    imgSrc: "/assets/tortilla.webp",

    items: [
      "Indywidualny plan żywieniowy",
      "Indywidualne zalecenia",
      "Jadłospis na 14 dni",
      "Jadłospis idealnie dopasowany do Twoich potrzeb",
    ],
  },

  {
    title: "Plan żywieniowy na 14 dni",
    imgSrc: "/assets/fruits-bowl.jpeg",

    items: [
      "Indywidualny plan żywieniowy",
      "Indywidualne zalecenia",
      "Jadłospis na 14 dni",
      "Jadłospis idealnie dopasowany do Twoich potrzeb",
    ],
  },
];

type Props = {
  title: string;
  imgSrc: string;
  items: string[];
  open: VoidFunction;
  setThread: (thread: string) => void;
};

const Card = ({ title, items, imgSrc, open, setThread }: Props) => {
  const handleOpen = () => {
    setThread(`Wybieram: ${title}`);
    open();
  };

  return (
    <div className="min-h-full lg:min-h-[630px] rounded-md bg-white w-full shadow-lg relative">
      <div className="hidden lg:block lg:w-72 lg:h-72 absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 bg-white rounded-[100%] z-10">
        <img
          src={imgSrc}
          alt=""
          className="w-full h-full object-cover border-secondary rounded-[100%]"
        />
      </div>

      <div className="lg:hidden w-full  flex justify-center z-10 relative">
        <img
          src={imgSrc}
          alt=""
          className="w-48 h-48 object-cover border-secondary rounded-[100%]"
        />
      </div>
      <span className="lg:hidden h-[1px] w-full bg-secondary absolute left-0 top-[105px]" />
      <span className="hidden lg:block w-[1px] bg-secondary h-full absolute left-[145px] top-0" />

      <div className="flex flex-col gap-4 py-4 lg:py-0 lg:justify-center lg:gap-8 px-6 lg:pl-80 h-full relative">
        <h5 className="text-4xl">{title}</h5>
        <ul className="list-none">
          {items.map((item, i) => (
            <li key={i} className="leading-10 text-xl">
              {item}
            </li>
          ))}
        </ul>
        <Button
          className="w-full xl:w-fit xl:text-xl xl:py-4 xl:px-8"
          onClick={handleOpen}
        >
          Wybierz dietę
        </Button>
      </div>
    </div>
  );
};

export const DietsList = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [thread, setThread] = React.useState("");
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const { onSubmit, isLoading, onClearMessage, successMessage } = useContact();
  return (
    <section
      className="w-full h-full bg-softGray py-8 lg:py-0 relative"
      id="jadłospisy"
    >
      <div className="container responsive-padding mx-auto">
        <div className="py-8 grid grid-cols-1 xl:grid-cols-2 gap-4 ">
          {individuals.map((item, i) => (
            <Card key={i} open={onOpen} setThread={setThread} {...item} />
          ))}
        </div>
      </div>
      <Dialog isOpen={isOpen} onClose={onClose}>
        <div className="flex flex-col gap-4 w-full">
          {successMessage ? (
            <Alert onClick={onClearMessage} message={successMessage} />
          ) : null}
          <h5 className="text-3xl text-primary">Formularz kontaktowy</h5>
          <ContactForm
            isLoading={isLoading}
            onSubmit={onSubmit}
            defaultValues={{ ...contactFormDefaultValues, thread }}
          />
        </div>
      </Dialog>
    </section>
  );
};
