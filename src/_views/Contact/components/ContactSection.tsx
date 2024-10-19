import {
  ContactForm,
  type ContactFormFieldValues,
} from "@/_views/shared/components/ContactForm";
import React from "react";

export const ContactSection = () => {
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
    <section className="w-full h-full bg-white py-8">
      <div className="container responsive-padding mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-16">
          <div className="w-full flex flex-col gap-4 justify-center">
            <h3 className="text-5xl text-primary">Napisz do mnie</h3>
            <ContactForm onSubmit={onSubmit} />
            {successMessage && (
              <p className="text-green-700">{successMessage}</p>
            )}
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4">
              <h5 className="text-2xl lg:xl xl:text-5xl text-primary text-start">
                Gabinet Dietetyczny Umami
              </h5>
              <div className="flex gap-2 items-center">
                <img
                  src="/assets/offer-introduction.png"
                  className="bg-white border border-primary rounded-full w-[72px] h-[72px] object-contain"
                />
                <p className="text-lg 2xl:text-2xl font-semibold">
                  mgr Aleksandra Kajstura-Janiuk
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <div className="w-9 flex justify-end">
                  <img
                    width={20}
                    src="/assets/phone.svg"
                    alt="Ikonka telefonu"
                  />
                </div>

                <a
                  className="text-md xl:text-3xl font-lato"
                  href={`tel:570 498 067`}
                >
                  +48 570 498 067
                </a>
              </div>

              <div className="flex gap-2 items-center ">
                <div className="w-9 flex justify-end">
                  <img width={30} src="/assets/email.svg" alt="Ikonka Maila" />
                </div>
                <a
                  className="underline text-md xl:text-3xl text-thirdnary font-lato"
                  href="mailto:aleksandra@dietetyk-umami.pl"
                >
                  aleksandra@dietetyk-umami.pl
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl lg:xl xl:text-5xl text-primary text-start">
                  Współpracuję z:
                </h5>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://akademia-fitness.eu/oferta/dietetyka"
                    className="w-[300px] text-primary"
                  >
                    <img
                      src="/assets/akademia_fitness.png"
                      className="w-full h-auto"
                    />
                  </a>
                  <a
                    href="https://www.healthlabs.care/pl-en"
                    className="w-[300px] text-primary"
                  >
                    <img
                      src="/assets/health-labs-care.png"
                      className="w-full h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
