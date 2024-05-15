import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <Stack screenOptions={{title:"e-hospital",headerShown:false,headerShadowVisible:false}}>
      <Stack.Screen name="(tabs)"></Stack.Screen>
      <Stack.Screen name="onboard3"></Stack.Screen>
    </Stack>
  );
}

