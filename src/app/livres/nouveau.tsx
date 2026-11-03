import { Picker } from '@react-native-picker/picker';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Genre, Livre, Statut, allGenre, allStatut } from "../../../types/livre";
import { getBadgeName } from "../../../utilities/formatlivreStatusLabel";
export default function Nouveau() {
 
  const router = useRouter();
  const genreList: Genre[] = allGenre;
  const statutList: Statut[] = allStatut;
  let [title, setTitle] = useState("");
  let [auteur, setAuteur] = useState("");
  let [nbrPages, setNbrPages] = useState("");
  let [titleError, setTitleError] = useState("");
  let [auteurError, setAuteurError] = useState("");
  let [nbrPagesError, setNbrPagesError] = useState("");
  let [genre, setGenre] = useState<Genre>(Genre.ROMAN);
  let [statut, setStatut] = useState<Statut>(Statut.A_LIRE);

  function addBook(){
    if(validateForm()){
       const livre: Livre = {
        id : randomId(),
        titre: title,
        auteur: auteur,
        genre: genre,
        nbrPages: nbrPages as unknown as number,
        statut: statut, 
    }
    
    console.log(livre);
    }
   
  }
  function randomId():number{
    const randomValue = Math.random() * (1000000 - 8) + 8;
    return Math.floor(randomValue);
  }
  function validateForm(): boolean{
    removeErrorMessage();
    console.log(typeof(nbrPages));
    if(!title) {
      setTitleError("Entrez le titre du livre.");
      return false;
    }
    if(!auteur){
      setAuteurError("Entrez le nom de l'auteur du livre.");
      return false;
    } 
    if(!nbrPages){
      setNbrPagesError("Donnez un nombre de page.");
      return false;
    }
    if(nbrPages && nbrPages =='0') {
      setNbrPagesError("Donnez un nombre valide!!!");
      return false;
    }
    return true;
  }
  function removeErrorMessage(){
    if(title) {
      setTitleError("");
    }
    if(auteur){
      setAuteurError("");
    } 
    if(nbrPages){
      setNbrPagesError("");
    }
    if(!(nbrPages && nbrPages =='0')) {
      setNbrPagesError("");
    }
  }
  return (
    <View style={styles.container}>
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Titre du livre" placeholderTextColor="#94a3b8" onChangeText={setTitle} value={title}/>
            { titleError ? <Text style = {styles.errorMesage}>{titleError}</Text> : null}
            <TextInput style={styles.input} placeholder="Auteur" placeholderTextColor="#94a3b8" onChangeText={setAuteur} value={auteur}/>
            { auteurError ? <Text style = {styles.errorMesage}>{auteurError}</Text> : null}
            <TextInput style={styles.input} placeholder="Nombre de pages" placeholderTextColor="#94a3b8" onChangeText={(text) => {setNbrPages(text.replace(/[^0-9]/g, '')); }} keyboardType="numeric" value={nbrPages}/>
            { nbrPagesError ? <Text style = {styles.errorMesage}>{nbrPagesError}</Text> : null}
            <Picker selectedValue={genre} onValueChange={(itemGenre) => setGenre(itemGenre)} style={styles.input}>
              {
                allGenre.map((item:Genre)=>{
                  return(
                     <Picker.Item key={item} value={item} label={item}/>
                  )
                })
              }
            </Picker>
             <Picker selectedValue={statut} onValueChange={(itemStatut) => setStatut(itemStatut)} style={styles.input}>
              {
                allStatut.map((item:Statut)=>{
                  return(
                     <Picker.Item key={item} value={item} label={getBadgeName(item)} />
                  )
                })
              }
            </Picker>
            <View style={styles.actions}>
                <Button title="Enregistrer" onPress={addBook} color="#4ade80" />
            </View>
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
  },
  errorMesage: {
    color: "#ef4444",
     fontFamily: 'italic'
  }
});
