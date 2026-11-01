import { useRouter } from "expo-router";
import { Button, StyleSheet, TextInput, View } from "react-native";
export default function Nouveau() {
  const router = useRouter();
  return (
   

    <View style={styles.container}>
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Titre du livre" placeholderTextColor="#94a3b8"/>
            <TextInput style={styles.input} placeholder="Auteur" placeholderTextColor="#94a3b8"/>
            <TextInput style={styles.input} placeholder="Nombre de pages" placeholderTextColor="#94a3b8" keyboardType="numeric"/>
            <View style={styles.actions}>
                <Button title="Annuler" onPress={()=> router.back()} color="#ef4444" />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#0f172a', 
    padding: 20,
    paddingTop: 80,
  },
  form: {
    gap: 16, 
  },
  input: {
    backgroundColor: '#1e293b',
    color: '#f8fafc',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
    fontSize: 16,
  },
  actions: {
    marginTop: 20,
    gap: 12,
  }
});
