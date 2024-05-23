import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Doctor() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="w-screen h-screen">
      <TouchableOpacity
        className="absolute z-10 top-[40px] left-[15px]"
        onPress={() => router.back()}
      >
        <Ionicons size={30} name="arrow-back"></Ionicons>
      </TouchableOpacity>
      <View className="w-full h-[400px]">
        <Image
          className="w-full h-full"
          source={require("../../assets/images/topDoctor/top2.png")}
        ></Image>
      </View>
      <View className="mt-5 mx-5 flex-row justify-between">
        <View>
          <Text className="text-2xl font-bold">Akou Serge</Text>
          <Text className="text-base mt-1">Cardiologue</Text>
          <View className="flex flex-row mt-2 items-center">
            <View className="">
              <Text className="font-medium">CHU treichville</Text>
            </View>
            <Ionicons
              name="location-outline"
              color={"#000"}
              className=""
              size={15}
            ></Ionicons>
          </View>
        </View>

        <View className="px-2 bg-amber-100 ml-5 flex items-center flex-row p-1 w-[50px] h-[20px] rounded">
          <Ionicons name="star" color={"#FBBF24"} className="mr-1"></Ionicons>
          <View className="ml-1">
            <Text className="font-medium">4.8</Text>
          </View>
        </View>
      </View>

      <View className="h-[1px] mx-3 mt-5 bg-slate-200"></View>

      <View className="mt-5 mx-5">
        <Text className="text-2xl font-bold mb-2">Description</Text>
        <Text className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum
          autem totam placeat, illo nulla aut assumenda delectus suscipit
          deserunt facere natus? Reiciendis nam repudiandae quo officiis magnam.
          Quibusdam, dicta?
        </Text>
      </View>

      <View className="mt-5 mx-5">
        <Text className="text-2xl font-bold mb-2">Tarifs</Text>
        <View className="flex-row items-center">
          <Text className="text-base">Consultation : </Text>
          <View className=" bg-slate-200 p-2 rounded-md">
            <Text>5000 FCFA</Text>
          </View>
        </View>
      </View>

      <View className="h-[1px] mx-3 mt-5 bg-slate-200"></View>

      <View className="mt-5 mx-5">
        <Text className="text-2xl font-bold mb-2">Statut</Text>
        <View className="px-3 py-2 border border-green-500 bg-green-100 ">
          <Text className="text-base text-green-500">Disponible</Text>
        </View>
      </View>

      <View className="h-[1px] mx-3 mt-5 bg-slate-200"></View>

      <View className="mt-5 mx-5">
        <Text className="text-2xl font-bold mb-2">Disponibilité</Text>
        <FlatList
          className=" my-2  rounded-lg"
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={({ highlighted }) => (
            <View
              className="w-[10px]"
              style={[highlighted && { marginLeft: 0 }]}
            />
          )}
          horizontal
          data={dataDisponibilité}
          renderItem={({ item }) => {
            return (
              <View className="rounded-lg p-5 min-w-[80px] bg-blue-500 items-center">
                <View className="">
                  <Text className="text-3xl text-white">{item.numJour}</Text>
                </View>
                <View>
                  <Text className="text-sm text-white">{item.jour}</Text>
                </View>
                <View>
                  <Text className="text-sm text-white">{item.mois}</Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
      <View className="h-[1px] mx-3 mt-5 bg-slate-200"></View>

      <View className="flex-row mt-5 mx-5 justify-around mb-[100px]">
        <TouchableOpacity onPress={()=>router.push('(stack)/PaiementRDV')} className="px-3 py-3 border rounded border-blue-500 ">
          <Text className="text-lg text-blue-500">Prendre Rendez-vous</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>router.push("(stack)/Paiement")} className="px-5 py-3 rounded  bg-blue-500">
          <Text className="text-lg text-white">consulter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const dataDisponibilité = [
  {
    jour: "samedi",
    numJour: "18",
    mois: "mai",
  },
  {
    jour: "lundi",
    numJour: "20",
    mois: "mai",
  },
  {
    jour: "mardi",
    numJour: "29",
    mois: "mai",
  },
  {
    jour: "mercredi",
    numJour: "30",
    mois: "mai",
  },
];
