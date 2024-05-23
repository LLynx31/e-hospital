import { Image, TouchableOpacity } from "react-native";
import { View, Text, SafeAreaView } from "react-native";
import ItemProfil from "../../components/ItemProfil";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Tab() {
  return (
    <View className="h-screen pt-8 bg-gray-200">
      <TouchableOpacity
        className="absolute z-10 top-[50px] right-[15px]"
        onPress={() => router.back()}
      >
        <Ionicons size={30} color={"#ef4444"} name="log-out-outline"></Ionicons>
      </TouchableOpacity>

      <View className=" justify-center items-center w-full h-1/3">
        <Image
          className="w-[100px] h-[100px] rounded-lg"
          source={require("../../assets/images/user.png")}
        ></Image>
        <Text className="mt-3 text-lg font-semibold">Brou Pacome</Text>
        <Text className="mt-2 text-sm">+225 0759150683</Text>
      </View>
      <View
        showsVerticalScrollIndicator={false}
        className="flex-1 px-5 py-5 bg-white rounded-2xl"
      >
        <Ionicons size={30} name=""></Ionicons>
        <Text className=" mb-8 text-lg font-semibold">Mon profile</Text>

        <ItemProfil nameIcon={"person"} libelle={"Information personnelle"}></ItemProfil>
        <ItemProfil nameIcon={"lock-closed"} libelle={"Mot de passe"}></ItemProfil>
        <ItemProfil nameIcon={"people"} libelle={"Inviter des amies"}></ItemProfil>
        <ItemProfil nameIcon={"document-text"} libelle={"Mention légale"}></ItemProfil>
        <View className=" h-[100px] "></View>
        
      </View>
    </View>
  );
}
