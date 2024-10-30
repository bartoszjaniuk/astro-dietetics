import { Introduction } from "./components/Introduction";
import { DietsList } from "./components/DietsList";
import { useInitMailer } from "../Home/hooks/useInitMailer";

const Content = () => {
  return (
    <>
      <Introduction />
      <DietsList />
    </>
  );
};

export const Diets = () => {
  useInitMailer();

  return <Content />;
};
