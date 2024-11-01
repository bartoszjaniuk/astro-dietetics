import { SlideY } from "@/animations/SlideY";

import { SlideX } from "@/animations/SlideX";
import { ContactForm } from "../shared/components/ContactForm";
import { AbstractShape } from "@/components/AbstractShape/AbstractShape";
import * as React from "react";
import { useContact } from "@/hooks/useContact";
import { useInitMailer } from "../Home/hooks/useInitMailer";

const Content = () => {
  // TODO: handle isSuccess to display message
  const { onSubmit, isSuccess } = useContact();

  return (
    <main className="w-full min-h-screen bg-white flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-32 container responsive-padding mx-auto h-full">
        <section className="flex flex-col gap-4 bg-white py-8 lg:py-16 xl:py-32 relative">
          <SlideY
            component="h1"
            from="top"
            className="text-6xl text-primary text-nowrap"
          >
            Skontaktuj się ze mną
          </SlideY>

          <SlideX
            component="p"
            from="left"
            className="font-light text-primary font-lato text-2xl"
          >
            Chciałbyś zrobić pierwszy krok w kierunku sylwetki marzeń? Poprawić
            wyniki badań i stan swojego zdrowia? <br /> Masz pytania i
            wątpliwości jak schudnąć lub przytyć? <br /> Śmiało, napisz do mnie!
            Odpowiem tak szybko, jak to możliwe.
          </SlideX>
          <h5 className="text-xl text-primary font-bold">
            Formularz kontaktowy
          </h5>
          <ContactForm onSubmit={onSubmit} />
        </section>
        <section className="h-full py-8 lg:h-5/6 bg-primary text-white container responsive-padding mx-auto flex flex-col gap-4 xl:pl-32 lg:pt-32 relative rounded-xl lg:[border-radius:30%_70%_70%_30%/30%_30%_70%_70%]">
          <AbstractShape className="w-16 absolute top-32 -right-16" />

          <div className="flex flex-col gap-4">
            <p className="font-medium text-2xl">Gabinet Dietetyczny UMAMI</p>
            <div className="flex gap-2 items-center">
              <img
                src="/assets/offer-introduction.png"
                className="bg-white border border-primary rounded-full w-[42px] h-[42px] object-contain"
              />
              <p className="">mgr Aleksandra Kajstura-Janiuk</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="flex">
                <img width={16} src="/assets/phone.svg" alt="Ikonka telefonu" />
              </div>

              <a className="font-lato" href={`tel:570 498 067`}>
                +48 570 498 067
              </a>
            </div>

            <div className="flex gap-2">
              <div className="flex">
                <img width={20} src="/assets/email.svg" alt="Ikonka Maila" />
              </div>
              <a
                className="underline font-lato"
                href="mailto:aleksandra@dietetyk-umami.pl"
              >
                aleksandra@dietetyk-umami.pl
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-2xl">Adres</p>
            <div className="flex flex-col">
              <p>Akademia Fitness</p>
              <p>ul. Ocicka 4, 47-400 Racibórz</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-2xl">Współpraca</p>
            <div className="flex flex-col">
              <a
                className="underline text-white"
                href="https://akademia-fitness.eu/oferta/dietetyka"
              >
                Akademia Fitness
              </a>
              <a
                href="httas://www.healthlabs.care/pl-en"
                className="underline text-white"
              >
                Health Labs {""}
                <span className="font-medium font-lato">
                  kod rabatowy: UMAMI10
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.232427245804!2d18.20260967706767!3d50.08193507152423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47116805a0be8eb5%3A0xe8362cb409eec0ef!2sAkademia%20Fitness%20(Ocicka)!5e0!3m2!1sen!2spl!4v1702029427976!5m2!1sen!2spl"
        width="100%"
        height="650"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
};

export const Contact = () => {
  useInitMailer();

  return <Content />;
};
