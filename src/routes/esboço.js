// Importações de bibliotecas e componentes necessários
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../components/SplashScreen";
import TabNavigator from "./tabNavigator"; // Importa o navegador de abas
import ScreenLogin from '../pages/login'; // Importa a tela de login

const Stack = createStackNavigator(); // Cria um conjunto de rotas empilhadas

export default function MainRoute() { // Componente principal para lidar com a navegação
  const [isSplashVisible, setIsSplashVisible] = useState(true); // Estado para controlar a visibilidade da tela de splash
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar a autenticação do usuário

  useEffect(() => {
    // Função para verificar a autenticação (substituir pela lógica real)
    const checkAuthentication = () => {
      const userIsLoggedIn = /* Verifique a autenticação aqui */ true; // Simulação da autenticação
      setIsLoggedIn(userIsLoggedIn);
    };

    // Simula o tempo de exibição da tela de splash e a verificação de autenticação
    const splashTimeout = setTimeout(() => {
      setIsSplashVisible(false); // Torna a tela de splash invisível
      checkAuthentication(); // Verifica a autenticação do usuário
    }, 3000); // 3 segundos

    return () => clearTimeout(splashTimeout); // Limpa o timer ao desmontar o componente
  }, []);

  return (
    <NavigationContainer> {/* Contêiner de navegação */}
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        {/* Condições para exibir as telas com base nas variáveis de estado */}
        {isSplashVisible ? ( // Se a tela de splash for visível
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : isLoggedIn ? ( // Se o usuário estiver logado
          <Stack.Screen name="TabBar" component={TabNavigator} />
        ) : ( // Caso contrário, exibe a tela de login
          <Stack.Screen name="Login" component={ScreenLogin} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
