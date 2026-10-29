import React from 'react';
import { StyleSheet, View, FlatList, Text } from "react-native";
import donnees from'../../server/db.seed.json';
import { Livre } from '../types/livre';
import CarteLivre form '../../components/CarteLivre';
export default function Index() {
  const livres = donnees.livres as Livre[];
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Ma Bibliothèque</Text>
      <FlatList
        data={livres}
        keyExtractor={(item)=>String(item.id)}
        renderItem={({ item }) => <CarteLivre livre={item} />}
      ></FlatList>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddigTop: 40,
  },
  headerTitle: {
    fontSize: 22,
    fontWeigth: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});
