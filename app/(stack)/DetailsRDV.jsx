import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SearchDoctor from "../../components/SearchDoctor";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function DetailsRDV() {
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "jeudi 15 mai 8h-9h" },
    { key: "2", value: "jeudi 15 mai 9h-10h" },
    { key: "3", value: "jeudi 15 mai 10h-11h" },
  ];
  return (
    <SafeAreaView>
      <ScrollView className="px-5 my-5">
        <View className="flex flex-row mb-5 items-center">
          <TouchableOpacity className="basis-1/4" onPress={() => router.back()}>
            <Ionicons size={30} name="arrow-back"></Ionicons>
          </TouchableOpacity>

          <View className="basis-1/2">
            <Text className="text-xl text-blue-500 text-center font-bold">
              {" "}
              Détails du rendez-vous{" "}
            </Text>
          </View>

          <View className="basis-1/4"></View>
        </View>
        <SearchDoctor
          lieu={"CHU treichville"}
          nom={"Akou"}
          prenom={"Serge"}
          note={"4.8"}
          specialite={"Cardiologue"}
          urlImg={require("../../assets/images/topDoctor/top2.png")}
        ></SearchDoctor>
        <View className="mt-5">
          <Text className="font-bold text-lg">Date de prise</Text>
          <Text className="font text-base text-slate-400">
            Lundi 20 mai 2024
          </Text>
        </View>
        <View className="mt-5">
          <Text className="font-bold text-lg mb-3">
            Jour de rendez-vous sélectioné
          </Text>
          <View className="flex-row">
            <View className="py-1 px-2 bg-slate-300 rounded">
              <Text className="text-sm">jeudi 15 mai 8h-9h</Text>
            </View>
          </View>
        </View>
        <View className="mt-5">
          <Text className="font-bold text-lg">Cout du rendez-vous</Text>
          <Text className="font text-base text-blue-400 font-bold">
            5000 FCFA
          </Text>
        </View>
        <View className="mt-5">
          <Text className="font-bold text-lg">Mode de paiement choisis</Text>
          <Text className="font text-base text-slate-400">
            Choisissez le mode de paiement
          </Text>
        </View>

        <View className="flex-row p-2 bg-white border-2 border-blue-500 rounded-md mt-3 justify-between items-center">
          <View className="flex-row items-center">
            <Image
              className="w-[80px] h-[80px] rounded-md "
              source={require("../../assets/images/wave.png")}
            ></Image>
            <Text className="ml-5 text-lg font-semibold">Wave</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
