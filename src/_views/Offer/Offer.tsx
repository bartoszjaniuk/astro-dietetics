import React from "react";
import { Introduction } from "./components/Introduction";
import { StripWithIcons } from "./components/StripWithIcons";
import { Services } from "./components/Services";
import { useInitMailer } from "../Home/hooks/useInitMailer";

const Content = () => {
  return (
    <main className="bg-white w-full min-h-screen flex flex-col">
      <Introduction />
      <StripWithIcons />
      <Services />
    </main>
  );
};

export const Offer = () => {
  useInitMailer();

  return <Content />;
};
