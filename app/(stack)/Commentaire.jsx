import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"; // Importez KeyboardAwareScrollView
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

// Exemple de données de commentaires
const commentaires = [
  { id: 1, utilisateur: "John Doe", message: "Super article!" },
  {
    id: 2,
    utilisateur: "Jane Smith",
    message: "Merci pour ces informations utiles!",
  },
  // Ajoutez d'autres commentaires si nécessaire
];

export default function PageCommentaire() {
  const renderItem = ({ item }) => (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 8 }}
    >
      <Image
        source={require("../../assets/images/user.png")} // Logo du profil de l'utilisateur
        style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
      />
      <View>
        <Text className="text-base" style={{ fontWeight: "bold" }}>{item.utilisateur}</Text>
        <Text className="text-sm">{item.message}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Commentaires",
        }}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" && "padding"}
        keyboardVerticalOffset={Platform.OS === "ios" && 90}
      >
        <View style={{ flex: 1 }}>
          <FlatList
            className="px-5"
            data={commentaires}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <View className="flex-row border-t py-2 px-2  bg-white border-t-gray-300">
            <TextInput
              multiline
              placeholder="Entrez quelque chose "
              className="w-[280px] rounded-lg border border-zinc-200 bg-zinc-100 h-[40px] px-5"
            />
            <TouchableOpacity className="ml-8">
              <Ionicons
                name="send"
                size={30}
                color={"#3b82f6"}
                style={{ marginTop: 6 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
