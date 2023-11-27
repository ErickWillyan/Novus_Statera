import { useRegisterUser } from "../context/register";
import ScreenCadastroPrim from "./CadPrim";
import ScreenCadastroSec from "./CadSec";
import { View } from "react-native";

export const StepForm = () => {
  const { step } = useRegisterUser();
  const components = [
    <ScreenCadastroPrim />,
    <ScreenCadastroSec />,
  ];
  return <View style={{ flex: 1 }}>{components[step - 1]}</View>;
};
