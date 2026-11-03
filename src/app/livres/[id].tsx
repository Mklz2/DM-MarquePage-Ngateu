import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import donnees from '../../../server/db.seed.json';
import { Livre } from "../../../types/livre";
import { getBadgeName } from "../../../utilities/formatlivreStatusLabel";

export default function DetailLivreScreen(){
    const{id} = useLocalSearchParams();
    const livreId = Number(id);
    const router = useRouter();
    let livre : Livre[] = donnees.livres as Livre[];
    let livreItem = livre.find((x:Livre) => x!.id == Number(id));
    if(!livreItem){
        router.navigate('/tabs');
     }
    return (
        <View style = {styles.container}>
            <Stack.Screen options={{title: livreItem?.titre}}/>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.card}>
                    <Text style={styles.title}>Titre : {livreItem!.titre}</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Auteur :</Text>
                        <Text style={styles.value}>{livreItem!.auteur}</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Genre :</Text>
                        <Text style={styles.value}>{livreItem!.genre}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Statut :</Text>
                        <Text style={[styles.value, styles.badge]}>{getBadgeName(livreItem!.statut)}</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Nombre de pages :</Text>
                        <Text style={styles.value}>{livreItem!.nbrPages}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: 140,
  },
 scrollContent: {
        padding: 16,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f172a',
    },
    errorText: {
        color: '#f87171',
        fontSize: 16,
        fontWeight: '600',
    },
    card: {
        backgroundColor: '#1e293b',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4ade80',
        marginBottom: 16,
        textAlign: 'center',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#334155',
    },
    label: {
        fontSize: 15,
        color: '#94a3b8',
        fontWeight: '500',
    },
    value: {
        fontSize: 15,
        color: '#f8fafc',
        fontWeight: '600',
    },
    badge: {
        color: '#4ade80',
    },
});