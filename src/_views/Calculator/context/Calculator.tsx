import * as React from "react";

export type NavigationData = {
  gender: string;
  height: number;
  weight: number;
  age: number;
  activity: string;
  goal: string;
  summary: number;
};

type CalculatorContextProps = {
  navigationData: NavigationData;
  updateNavigationData: (data: Partial<NavigationData>) => void;
};

const initialState = {
  gender: "",
  height: 0,
  weight: 0,
  age: 0,
  activity: "",
  goal: "",
  summary: 0,
};

const CalculatorContext = React.createContext<CalculatorContextProps>({
  updateNavigationData: () => null,
  navigationData: initialState,
});

export const CalculatorProvider = ({ children }: React.PropsWithChildren) => {
  const [formData, setFormData] = React.useState(initialState);

  const updateNavigationData = (data: Partial<NavigationData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const value = React.useMemo(
    () => ({
      navigationData: formData,
      updateNavigationData,
    }),
    [formData, updateNavigationData]
  );

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculatorData = () => {
  const context = React.useContext(CalculatorContext);

  if (context === undefined) {
    throw new Error("useCalculatorData must be used within CalculatorProvider");
  }

  return context;
};
