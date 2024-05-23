import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#d4d4d8",
        tabBarActiveTintColor: "#3388FF",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="MesRendezVous"
        options={{
          title: "mes rendez vous",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="calendar" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Consultations"
        options={{
          title: "mes rendez vous",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="medkit-sharp" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Urgence"
        options={{
          title: "Urgence",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="ambulance" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
