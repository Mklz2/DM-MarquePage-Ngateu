import { Stack } from "expo-router";

export default function RootLayout() {
  return( 
    <Stack screenOptions={{headerTintColor: '#4ade80'}} >
      <Stack.Screen name="tabs" options={{headerShown:false}}/>
      <Stack.Screen name="livre/[id]" options={{title: 'Details du livre'}}/>
      <Stack.Screen name="livres/nouveau" options={{presentation: 'modal', title:'Nouveau livre'}}/>
    </Stack>);
}
