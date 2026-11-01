import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import donnees from '../../../server/db.seed.json';
import { Livre } from "../../../types/livre";
export default function DetailLivreScreen(){
    const{id} = useLocalSearchParams();
    const livreId = Number(id);
    const router = useRouter();
    let livre : Livre[] = donnees.livres as Livre[];
    let livreItem : Livre ;
    livreItem = livre.find((x:Livre) => x!.id == Number(id)) as Livre
    useEffect(() => {
        
        console.log(livreItem);
        if(!livreItem){
            router.navigate('/tabs');
        }
    })
    return (
        <View style = {styles.container}>
            <ScrollView>
                <Text>Titre : {livreItem!.titre}</Text>
                <Text>Auteur : {livreItem!.auteur}</Text>
                <Text>genre : {livreItem!.genre}</Text>
                <Text>Auteur : {livreItem!.statut}</Text>
                <Text>Auteur : {livreItem!.nbrPages}</Text>
            </ScrollView>
        </View>
    )
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