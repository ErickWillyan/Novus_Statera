import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ColetorList = ({ coletores }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Coletores</Text>
      <FlatList
        data={coletores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Nome: {item.nome}</Text>
            <Text style={styles.itemText}>Email: {item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default ColetorList;
