import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

export default function Connexion() {
  const [date, setDate] = useState(new Date());
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [adresse, setAdresse] = useState("");

  const [photo, setPhoto] = useState(null);

  const router = useRouter()

  const handleInscription = () => {
    const userData = {
      numero,
      adresse,
      photo, // Ajoutez l'URL de la photo ici
    };
    // Envoyer les données de l'utilisateur ici (par exemple, via une API)
    console.log(userData);
  };

  const handleChoosePhoto = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted === false) {
      alert("Permission to access gallery is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(pickerResult.assets[0].uri);

    if (!pickerResult.canceled) {
      setPhoto(pickerResult.assets[0].uri);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      className="bg-white p-6"
    >
      <View className="flex flex-row mt-5  items-center">
        <TouchableOpacity className="basis-1/4" onPress={() => router.back()}>
          <Ionicons size={30} name="arrow-back" />
        </TouchableOpacity>

        <View className="basis-1/2">
          <Text className="text-xl text-center text-blue-500 font-bold">
            Editer le profile
          </Text>
        </View>

        <View className="wbasis-1/4" />
      </View>
      <View className="items-center mt-1">
        <View className="justify-between items-center p-4 rounded">
          {photo ? (
            <Image
                className="rounded-full"
              source={{ uri: photo }}
              style={{
                width: 80,
                height: 80,
                marginLeft: 10,
                
              }}
            />
          ) : (
            <Ionicons name="person-circle" size={80}></Ionicons>
          )}
          <TouchableOpacity onPress={handleChoosePhoto} className="mb-4">
            <Text className="mt-5 text-blue-500">
              {" "}
              Changer la photo d'utilisateur
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TextInput
        label="Entrez votre nom"
        autoCapitalize="words"
        mode="outlined"
        left={<TextInput.Icon icon="account" />}
        value={nom}
        className="mb-4 bg-blue-50"
        disabled
      />
      <TextInput
        label="Entrez votre prénom"
        mode="outlined"
        autoCapitalize="words"
        left={<TextInput.Icon icon="account" />}
        value={prenom}
        className="mb-4 bg-blue-50"
        disabled
      />

      <TextInput
        label="Entrez votre email"
        mode="outlined"
        keyboardType="email-address"
        left={<TextInput.Icon icon="mail" />}
        value={email}
        className="mb-4 bg-blue-50"
        disabled
      />

      <TextInput
        label="Entrez votre date de naissance"
        mode="outlined"
        value={date.toLocaleDateString()} // Affiche la date sélectionnée
        left={<TextInput.Icon icon="calendar" />}
        editable={false} // Rend le champ non modifiable par l'utilisateur
        className="bg-blue-50 mb-4"
        disabled
      />

      <TextInput
        label="Entrez votre adresse"
        mode="outlined"
        left={<TextInput.Icon icon="map-marker" />}
        value={adresse}
        onChangeText={setAdresse}
        className="mb-4 bg-blue-50"
      />

      <TextInput
        label="Entrez votre numéro"
        mode="outlined"
        keyboardType="phone-pad"
        left={<TextInput.Icon icon="phone" />}
        value={numero}
        onChangeText={setNumero}
        className="mb-4 bg-blue-50"
      />

      <Button
        buttonColor="#2563eb"
        mode="contained"
        className="mb-6 mt-4"
        onPress={handleInscription}
      >
        Modifier
      </Button>
    </KeyboardAwareScrollView>
  );
}
