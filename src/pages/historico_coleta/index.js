import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ComboBox from "../../components/ComboBox";
import CardColeta from "../../components/CardColeta";
import { api } from "../../libs/api";
import { AuthContext } from "../../contexts/auth";

export default function ScreenHistorico() {
  const { user } = useContext(AuthContext);

  const [coletas, setColetas] = useState([]);

  useEffect(() => {
    async function listar() {
      const doadorId = user.doadorId;

      const response = await api.get("/ListColetaRealizada", {
        params: { doadorId },
      });

      console.log(response.data);

      setColetas(response.data);
    }

    listar();
  }, [user]);

  return (
    <View>
      <View style={styles.containerList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={coletas}
          renderItem={({ item }) => <CardColeta data={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerList:{
    width: "100%",
    alignItems: "center",
  },
});
