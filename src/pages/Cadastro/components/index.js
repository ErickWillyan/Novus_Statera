import { useRegisterUser } from "../context/register";
import ScreenCadastroPrim from "./CadPrim";
import ScreenCadastroSec from "./CadSec";
import ScreenCadastroTerc from "./CadTerc";
import { View } from "react-native";

export const StepForm = () => {
  const { step } = useRegisterUser();
  const components = [
    <ScreenCadastroPrim />,
    <ScreenCadastroSec />,
    <ScreenCadastroTerc />,
  ];
  return <View style={{ flex: 1 }}>{components[step - 1]}</View>;
};
