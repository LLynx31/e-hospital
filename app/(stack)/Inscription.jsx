import { useState } from "react";
import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import { TextInput, Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";

export default function Connexion() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [adresse, setAdresse] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [photo, setPhoto] = useState(null);
  const router = useRouter();

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const handleInscription = () => {
    const userData = {
      nom,
      prenom,
      email,
      numero,
      dateDeNaissance: date,
      adresse,
      motDePasse,
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
      <View className="items-center mb-10">
        <Image
          source={require("../../assets/images/logo.png")} // Remplacer par l'URL de l'image si nécessaire
          style={{ width: 250, height: 70, marginTop: 10 }}
        />
      </View>

      <Text className="text-xl font-bold text-center mb-2">
        Prenez soin de votre santé
      </Text>
      <Text className="text-gray-500 text-center mb-8">
        Inscrivez-vous pour pouvoir réaliser des consultations
      </Text>

      <TextInput
        label="Entrez votre nom"
        autoCapitalize="words"
        mode="outlined"
        left={<TextInput.Icon icon="account" />}
        value={nom}
        onChangeText={setNom}
        className="mb-4 bg-blue-50"
      />
      <TextInput
        label="Entrez votre prénom"
        mode="outlined"
        autoCapitalize="words"
        left={<TextInput.Icon icon="account" />}
        value={prenom}
        onChangeText={setPrenom}
        className="mb-4 bg-blue-50"
      />

      <TextInput
        label="Entrez votre email"
        mode="outlined"
        keyboardType="email-address"
        left={<TextInput.Icon icon="mail" />}
        value={email}
        onChangeText={setEmail}
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
      <TouchableOpacity onPress={() => setShow(true)} className="mb-4">
        <TextInput
          label="Entrez votre date de naissance"
          mode="outlined"
          value={date.toLocaleDateString()} // Affiche la date sélectionnée
          left={<TextInput.Icon icon="calendar" />}
          editable={false} // Rend le champ non modifiable par l'utilisateur
          className="bg-blue-50"
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      <TextInput
        label="Entrez votre adresse"
        mode="outlined"
        left={<TextInput.Icon icon="map-marker" />}
        value={adresse}
        onChangeText={setAdresse}
        className="mb-4 bg-blue-50"
      />

      <TextInput
        label="Entrez votre mot de passe"
        mode="outlined"
        secureTextEntry
        left={<TextInput.Icon icon="lock" />}
        right={<TextInput.Icon icon="eye" />}
        value={motDePasse}
        onChangeText={setMotDePasse}
        className="mb-4 bg-blue-50"
      />

      <TouchableOpacity onPress={handleChoosePhoto} className="mb-4">
        <View className="flex-row justify-between items-center bg-blue-50 p-4 rounded">
          <Text>
            {" "}
            {!photo
              ? "Choisissez une photo d'utilisateur"
              : "Changer la photo d'utilisateur"}
            
          </Text>

          {photo && (
              <Image
              className="rounded-full"
                source={{ uri: photo }}
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: 10,
          
                }}
              />
            )}
        </View>
      </TouchableOpacity>
      <View className="flex-row justify-center"></View>

      <Button
        buttonColor="#2563eb"
        mode="contained"
        className="mb-6 mt-4"
        onPress={handleInscription}
      >
        S'inscrire
      </Button>

      <TouchableOpacity
        onPress={() => router.replace("(stack)/Connexion")}
        className="mt-10 mb-36"
      >
        <Text className="text-center text-gray-500">
          Vous avez déjà un compte ?{" "}
          <Text className="text-blue-500">Connectez-vous</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}
