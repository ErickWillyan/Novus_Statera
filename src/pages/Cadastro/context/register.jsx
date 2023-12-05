import { createContext, useContext, useState } from "react";
import { api } from "../../../libs/api";

const RegisterUserContext = createContext({});

export const RegisterUserProvider = ({ children }) => {
  const [dataState, setData] = useState();
  const [step, setStep] = useState(1);

  function ExibirUser() {
    console.log(user);
  }

  const RegisterColetor = async (dados) => {
    const Response = await api.post("/RegisterColetor", dados);

    const { id } = Response.data;

    const coletorId = { coletorId: id };

    console.log(id);

    console.log({
      ...coletorId,
      ...dados,
    });

    RegisterUser({
      ...dados,
      ...coletorId,
    });
  };

  const RegisterDoador = async (dados) => {
    const Response = await api.post("/RegisterDoador", dados);

    const { id } = Response.data;

    const doadorId = { doadorId: id };

    console.log(id);

    console.log({
      ...doadorId,
      ...dados,
    });

    RegisterUser({
      ...dados,
      ...doadorId,
    });
  };

  const RegisterUser = async (data) => {
    await api.post("/RegisterUser", data);
  };

  const handleSubmit = async (data) => {
    const typeUser = data.type;

    if (typeUser === "coletor") {
      RegisterColetor(data);
    } else {
      RegisterDoador(data);
    }
  };

  const handleNextStep = (data) => {
    if (step === 3) {
      handleSubmit({ ...dataState, ...data });
      return;
    }

    setData((prevData) => {
      return {
        ...prevData,
        ...data,
      };
    });

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
