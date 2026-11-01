import { Link, Stack, useRouter } from "expo-router";
import { Button, FlatList, Pressable, StyleSheet, View } from "react-native";
import CarteLivre from '../../../components/CarteLivre';
import donnees from '../../../server/db.seed.json';
import { Livre } from '../../../types/livre';
export default function Index() {
  const livres = donnees.livres as Livre[];
  const router = useRouter();
  return (
   

    <View style={{ flex: 1 }}>
      <Stack.Screen 
        options={{ 
          title: 'Ma Bibliothèque',
          headerStyle: { backgroundColor: '#1e293b' }, 
          headerTintColor: '#4ade80',                 
          headerTitleStyle: {...styles.headerTitle},
          headerRight: () => (
            <Button onPress={() => router.navigate('/livres/nouveau')} title="+" color="#4ade80" />
          ),
        }} 
      /> 
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
