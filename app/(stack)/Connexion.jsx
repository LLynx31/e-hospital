import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Connexion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Ajoutez ici la logique de connexion
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "white", padding: 16 }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Image
            source={require('../../assets/images/logo.png')} // Remplacer par l'URL de l'image
            style={{ width: 250, height: 70 }}
          />
        </View>

        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>
          Heureux de vous retrouver
        </Text>
        <Text style={{ color: "#666", textAlign: "center", marginBottom: 30 }}>
          Utilisez vos identifiants pour accéder à vos comptes
        </Text>

        <TextInput
          label="Enter Username"
          mode="outlined"
          left={<TextInput.Icon icon="account" />}
          value={username}
          onChangeText={setUsername}
          style={{ marginBottom: 16 }}
        />
        <TextInput
          label="Enter Password"
          mode="outlined"
          secureTextEntry
          left={<TextInput.Icon rippleColor={"#000"} icon="lock" />}
          right={<TextInput.Icon icon="eye" />}
          value={password}
          onChangeText={setPassword}
          style={{ marginBottom: 16 }}
        />

        <TouchableOpacity>
          <Text style={{ textAlign: "right", color: "#007bff", marginBottom: 16 }}>mot de passe oublié ?</Text>
        </TouchableOpacity>

        <Button
          buttonColor="#2563eb"
          mode="contained"
          onPress={handleLogin}
          style={{ marginBottom: 16 }}
        >
          Log in
        </Button>

        <TouchableOpacity onPress={() => router.replace('(stack)/Inscription')}>
          <Text style={{ textAlign: "center", color: "#666" }}>
            Vous n'avez pas de compte ?{" "}
            <Text style={{ color: "#007bff" }}>Inscrivez-vous</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
