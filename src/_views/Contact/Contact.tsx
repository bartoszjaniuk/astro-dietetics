import { ContactSection } from "./components/ContactSection";
import { Introduction } from "./components/Introduction";

const Content = () => {
  return (
    <>
      <Introduction />
      <ContactSection />
    </>
  );
};

export const Contact = () => {
  return <Content />;
};
