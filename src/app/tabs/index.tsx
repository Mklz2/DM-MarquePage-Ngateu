import { Link } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CarteLivre from '../../../components/CarteLivre';
import donnees from '../../../server/db.seed.json';
import { Livre } from '../../../types/livre';
export default function Index() {
  const livres = donnees.livres as Livre[];
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Ma Bibliothèque</Text>
      <FlatList
        data={livres}
        keyExtractor={(item)=>String(item.id)}
        renderItem={({item}) => (
          <Link href={`/livres/${item.id}` as any} asChild>
            <Pressable>
              <CarteLivre livre={item}/>
            </Pressable>
          </Link>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});
