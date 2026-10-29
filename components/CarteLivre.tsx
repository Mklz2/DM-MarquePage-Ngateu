import React from 'react';
import { View, Text, StyleSheet } from 'mode_modules/react-native';
import { Livre } from '../types/livre';

interface CarteLivreProps {
    livre: Livre;
}
export default function CarteLivre({ livre} : CarteLivreProps) {
    const getBadgeColor = (statut: string) => {
        switch (statut) {
            case 'LU': return '#4ade80';
            case 'EN_COURS': return '#facc15';
            case 'A_LIRE': return '#f87171';
            default: return '#cbd5e1';
        }
    };
    return(
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.titre}>{livre.titre}</Text>
                <View style={[styles.badge, {backgroundColor: getBadgeColor(livre.statut)}]}>
                    <Text style={styles.badgeText}>{livre.statut}</Text>
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
        shadowColor: #000,
        shadowOffset: {width: 0, heigth: 1},
        shadowOpacity: {value: 0.2},
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
        fontWeigth: 'bold',
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
        fontWeigth: 'bold',
        color:'#000',
    },
});