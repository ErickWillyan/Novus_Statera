import { View, StyleSheet } from 'react-native';
import CardColetor from "../../components/Cardcoletor";

export default function ScreenHistorico() {
  return (
    <View style={styles.container}>
      <CardColetor
    perfilImageUrl="https://exemplo.com/seu-perfil.jpg"
    nome="João da Silva"
    endereco="Osasco-SP"
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});