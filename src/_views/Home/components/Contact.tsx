import * as React from "react";
import { AbstractShape } from "@/components/AbstractShape/AbstractShape";
import {
  ContactForm,
  type ContactFormFieldValues,
} from "@/_views/shared/components/ContactForm";
import { Alert } from "./Alert";
import { useContact } from "@/hooks/useContact";

const classNameAfter =
  'after:absolute after:content-[""] after:w-full after:h-full after:top-0 after:left-0 after:-z-[1] after:bg-white  md:after:[clip-path:polygon(0%_0%,100%_0%,100%_75%,0%_100%)]';

const classNameBefore =
  'before:absolute before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:-z-[1] before:bg-softGray';

const Content = () => {
  const { successMessage, isLoading, onSubmit, onClearMessage } = useContact();

  return (
    <main
      id="formularz-kontaktowy"
      className={`min-h-full flex flex-col justify-center items-center z-10 bg-white py-8 gap-10 lg:gap-16 ${classNameAfter} ${classNameBefore}`}
    >
      <AbstractShape className="left-24 -top-40 absolute w-48 opacity-80" />
      <AbstractShape className="left-48 top-48 absolute w-8 opacity-80" />
      <AbstractShape className="right-48 top-32 absolute w-16 opacity-80" />
      <div className="container responsive-padding mx-auto flex flex-col gap-10">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-primary text-3xl font-black 2xl:text-5xl">
            Skontaktuj się ze mną
          </h2>
          <h3 className="text-xl">
            Potrzebujesz specjalistycznej porady? Napisz do mnie za pomocą
            formularza lub zadzwoń.
          </h3>
        </div>

        <div className="flex flex-col xl:flex-row gap-8">
          <div className="w-full">
            <img
              src="assets/personContactForm.svg"
              alt="Osoba z telefonem komórkowym"
            />
          </div>
          <div className="w-full flex flex-col justify-center">
            {successMessage ? (
              <Alert onClick={onClearMessage} message={successMessage} />
            ) : null}
            <h5 className="text-3xl text-primary py-4">Napisz do mnie</h5>

            <ContactForm isLoading={isLoading} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </main>
  );
};

export const Contact = () => {
  return <Content />;
};
