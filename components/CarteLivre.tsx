
import { StyleSheet, Text, View } from 'react-native';
import { Livre } from '../types/livre';

interface CarteLivreProps {
    livre: Livre;
}
interface BdgInterface {
    badBg: string,
    lblClr: string,
};
export default function CarteLivre({ livre} : CarteLivreProps) {
    const getBadgeColor = (statut: string): BdgInterface => {
        switch (statut) {
            case 'LU': return {
                badBg:'#afeec6',
                lblClr: '#4ade80',
            };
            case 'EN_COURS': return {
                badBg:'#f1e7c2',
                lblClr: '#facc15',
            };
            case 'A_LIRE': return {
                badBg:'#f5c5c5',
                lblClr: '#f87171',
            };
            default: return {
                badBg:'#c1daf9',
                lblClr: '#cbd5e1',
            };
        }
    };
    const getBadgeName = (statut: string): string=> {
        switch (statut) {
            case 'LU': return "Lu";
            case 'EN_COURS': return "En cour de lecture";
            case 'A_LIRE': return "A lire";
            default: return "Pas Disponible";
        }
    };
    return(
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.titre}>{livre.titre}</Text>
                <View style={[styles.badge, {backgroundColor: getBadgeColor(livre.statut).badBg}]}>
                    <Text style={{...styles.badgeText, color:getBadgeColor(livre.statut).lblClr}}>{getBadgeName(livre.statut)}</Text>
                </View>
            </View>
            <Text style={styles.auteur}>{livre.auteur}</Text>
            <Text style={styles.details}>Genre : {livre.genre} | Pages : {livre.nbrPages}</Text>
        </View>
    ); 
}
const styles = StyleSheet.create({
    card:{
        backgroundColor: '#ffffff',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    titre:{
        fontSize: 16,
        fontWeight: 900,
        flex: 1,
    },
    auteur:{
        fontSize: 14,
        color: '#4b5563',
        marginBottom: 8,
    },
    details:{
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    badgeText:{
        fontSize: 10,
        fontWeight: 'bold',
        color:'#000',
    },
    badge: {
        borderRadius: 3,
        paddingHorizontal: 3,
        paddingVertical: 2,
    }
});