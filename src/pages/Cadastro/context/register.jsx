import { createContext, useContext, useState } from "react";
import { api } from "../../../libs/api";



const RegisterUserContext = createContext({});

export const RegisterUserProvider = ({ children }) => {
  const [dataState, setData] = useState();
  const [step, setStep] = useState(1);

  const handleSubmit = async (data) => {
    // try{

    //   await api.post("/users", data)
       
        console.log(data)
  // } catch (error) {
  //   console.error('Erro na chamada de API:', error.message);
  //   // Trate o erro de acordo com suas necessidades
  // }
  };

  const handleNextStep = (data) => {

    setData((prevData) => {
      return {
        ...prevData,
        ...data,
      };
    });

    if (step === 2) {
      console.log(step)
      handleSubmit(dataState);
      return;
    }

    if(step === 1){
      console.log(step)
    }
    
    setStep((prevStep) => prevStep + 1);
    
  };
  const handleBackStep = () => {
      setStep(1);
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
