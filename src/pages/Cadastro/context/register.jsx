import { createContext, useContext, useState } from "react";

const RegisterUserContext = createContext({});

export const RegisterUserProvider = ({ children }) => {
  const [dataState, setData] = useState();
  const [step, setStep] = useState(1);

  const handleSubmit = (data) => {
    // fazer função de inser aqui dentro
    // o parametro "data" contém todos os dados do usuário
    //
  };

  const handleNextStep = (data) => {
    setData((prevData) => {
      return {
        ...prevData,
        ...data,
      };
    });
    if (step === 3) {
      handleSubmit(dataState);
      return;
    }
    setStep((prevStep) => prevStep + 1);
  };
  const handleBackStep = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
    }
  };

  return (
    <RegisterUserContext.Provider
      value={{ handleNextStep, step, handleBackStep }}
    >
      {children}
    </RegisterUserContext.Provider>
  );
};

export const useRegisterUser = () => useContext(RegisterUserContext);
