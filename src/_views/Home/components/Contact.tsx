import * as React from "react";
import { AbstractShape } from "@/components/AbstractShape/AbstractShape";
import {
  ContactForm,
  type ContactFormFieldValues,
} from "@/_views/shared/components/ContactForm";

const classNameAfter =
  'after:absolute after:content-[""] after:w-full after:h-full after:top-0 after:left-0 after:-z-[1] after:bg-white  md:after:[clip-path:polygon(0%_0%,100%_0%,100%_75%,0%_100%)]';

const classNameBefore =
  'before:absolute before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:-z-[1] before:bg-softGray';

const Content = () => {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");

  React.useEffect(() => {
    if (isSuccess) {
      setSuccessMessage("Wiadomość została wysłana.");
      setTimeout(() => {
        setSuccessMessage("");
        setIsSuccess(false);
      }, 3000);
    }
  }, [isSuccess]);

  const onSubmit = async (formData: ContactFormFieldValues) => {
    try {
      const response = await fetch(
        "https://umami-get-mailed.onrender.com/api/v1/email/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            subject: formData.thread,
            message: formData.message,
          }),
        }
      );
      await response.json();
      const res = await response.json();
      if (res.status === "success") setIsSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

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
          <h5 className="text-xl">
            Potrzebujesz specjalistycznej porady? Napisz do mnie za pomocą
            formularza lub zadzwoń.
          </h5>
        </div>

        <div className="flex flex-col xl:flex-row gap-8">
          <div className="w-full">
            <img
              src="assets/personContactForm.svg"
              alt="Osoba z telefonem komórkowym"
            />
          </div>
          <div className="w-full flex flex-col gap-4 justify-center">
            <h3 className="text-3xl text-primary py-4">Napisz do mnie</h3>
            <ContactForm onSubmit={onSubmit} />
            {successMessage && (
              <p className="text-green-700">{successMessage}</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export const Contact = () => {
  return <Content />;
};
