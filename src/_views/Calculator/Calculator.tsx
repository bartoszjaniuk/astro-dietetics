import * as React from "react";
import { Gender } from "./components/Gender";
import { Goal } from "./components/Goal";
import { Parameters } from "./components/Parameters";
import { Activity } from "./components/Activity";
import { CalculatorProvider, useCalculatorData } from "./context/Calculator";
import { Summary } from "./components/Summary";
import { Layout } from "./components/Layout";

const Content = () => {
  const { navigationData } = useCalculatorData();
  console.log(navigationData);
  const [step, setStep] = React.useState(0);
  const onNextStep = () => {
    setStep(step + 1);
  };
  const onGoBack = () => {
    if (step > 0) setStep(step - 1);
    else window.history.back();
  };
  return (
    <Layout step={step} onGoBack={onGoBack}>
      {step === 0 ? <Gender onNextStep={onNextStep} /> : null}
      {step === 1 ? <Goal onNextStep={onNextStep} /> : null}
      {step === 2 ? <Parameters onNextStep={onNextStep} /> : null}
      {step === 3 ? <Activity onNextStep={onNextStep} /> : null}
      {step === 4 ? <Summary /> : null}
    </Layout>
  );
};

export const Calculator = () => {
  return (
    <CalculatorProvider>
      <Content />
    </CalculatorProvider>
  );
};
