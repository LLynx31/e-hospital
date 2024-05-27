import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, TextInput } from "react-native-paper";

export default function EditPassword() {
  const [NewMotDePasse, setNewMotDePasse] = useState("");
  const [motDePasseCournant, setMotDePasseCourant] = useState("");
  const [ConfirmNewMotDePasse, setConfirmNewMotDePasse] = useState("");

  const router = useRouter()
  
  const handleNewPassword = () => {
    const userData = {
      NewMotDePasse,
      motDePasseCournant,
      ConfirmNewMotDePasse,
    };
    // Envoyer les données de l'utilisateur ici (par exemple, via une API)
    console.log(userData);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, marginTop: 36 }}
      className="bg-white p-6"
    >
      <View className="flex flex-row mb-8  items-center">
        <TouchableOpacity className="basis-1/4" onPress={() => router.back()}>
          <Ionicons size={30} name="arrow-back" />
        </TouchableOpacity>

        <View className="basis-1/2">
          <Text className="text-xl text-center text-blue-500 font-bold">
            Changer le mot de passe
          </Text>
        </View>

        <View className="wbasis-1/4" />
      </View>
      <TextInput
        label="Mot de passe actuel"
        mode="outlined"
        secureTextEntry
        left={<TextInput.Icon icon="lock" />}
        right={<TextInput.Icon icon="eye" />}
        value={motDePasseCournant}
        onChangeText={setMotDePasseCourant}
        className="mb-10 bg-blue-50"
      />
      <TextInput
        label="Nouveau mot de passe"
        mode="outlined"
        secureTextEntry
        left={<TextInput.Icon icon="lock" />}
        right={<TextInput.Icon icon="eye" />}
        value={NewMotDePasse}
        onChangeText={setNewMotDePasse}
        className="mb-4 bg-blue-50"
      />
      <TextInput
        label="Confirmer le mot de passe"
        mode="outlined"
        secureTextEntry
        left={<TextInput.Icon icon="lock" />}
        right={<TextInput.Icon icon="eye" />}
        value={ConfirmNewMotDePasse}
        onChangeText={setConfirmNewMotDePasse}
        className="mb-4 bg-blue-50"
      />
      <Button
        buttonColor="#2563eb"
        mode="contained"
        className="mb-6 mt-4"
        onPress={handleNewPassword}
      >
        Modifier
      </Button>
    </KeyboardAwareScrollView>
  );
}
