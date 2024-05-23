import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Stack.Screen
        name="Paiement"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="PaiementRDV"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />

      <Stack.Screen
        name="DetailsRDV"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />

      
    </Stack>
  );
}
