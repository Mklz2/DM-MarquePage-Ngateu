import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
export default function TabLayout() {
  return( 
    <Tabs screenOptions={{ tabBarActiveTintColor: '#4ade80', headerShown: true}}>   
        <Tabs.Screen name="index" options={{title: 'Bibliothèque', tabBarIcon:({color, size})=>(<Ionicons name="book-outline" size={size} color={color as string}/>),}}/>
        <Tabs.Screen name="citations" options={{title: 'Citations', tabBarIcon:({color, size}) => (<Ionicons name="chatbubble-outline" size={size} color={color as string} />),}} />
        <Tabs.Screen name="profil" options={{title: 'Profil', tabBarIcon:({color, size }) => (<Ionicons name="person-outline" size={size} color={color as string}/>),}}/>
    </Tabs>
  );
}