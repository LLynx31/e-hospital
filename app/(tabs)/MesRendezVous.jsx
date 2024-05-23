import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image } from "react-native";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} className="px-5 gap-5">
        <View className="flex flex-row  justify-center items-center">
          <View className="">
            <Text className="text-xl text-blue-500 text-center font-bold">
              {" "}
              Mes rendez-vous{" "}
            </Text>
          </View>
        </View>
        <View className="rounded bg-white p-4">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-base font-bold">Numero id: 5784654848</Text>
              <Text className="text-sm text-slate-400 ">
                Date emission: 10 mai 2024
              </Text>
            </View>

            <View className="flex-row items-center">
              <View className="mr-1">
                <Text className="text-sm text-amber-500">en attente</Text>
              </View>
              <Ionicons
                name="ellipsis-horizontal-circle"
                color={"#f59e0b"}
              ></Ionicons>
            </View>
          </View>

          <View className="flex-row py-2">
            <Image
              className="w-[80px] h-[80px] rounded-lg  mr-3"
              source={require("../../assets/images/topDoctor/top2.png")}
            ></Image>

            <View className="justify-between">
              <Text className="text-sm font-medium">Akou Serge</Text>
              <Text className="text-sm font-light">Cardiologue</Text>
              <View className="px-2 bg-amber-100 flex items-center flex-row my-2 p-1 w-[50px] rounded">
                <Ionicons name="star" color={"#FBBF24"}></Ionicons>
                <View className="ml-1">
                  <Text className="font-medium">4.8</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row mt-5 justify-around">
            {/*<TouchableOpacity
              onPress={() => router.push("(stack)/PaiementRDV")}
              className="px-3 py-3 border rounded border-blue-500 "
            >
              <Text className="text-lg text-blue-500">Prendre Rendez-vous</Text>
  </TouchableOpacity>*/}

            <TouchableOpacity
              onPress={() => router.push("(stack)/DetailsRDV")}
              className="px-5 py-3 rounded w-full bg-blue-500"
            >
              <Text className="text-lg text-center text-white">
                Voir les détails
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="rounded bg-white p-4">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-base font-bold">Numero id: 5784654848</Text>
              <Text className="text-sm text-slate-400 ">
                Date emission: 10 mai 2024
              </Text>
            </View>

            <View className="flex-row items-center">
              <View className="mr-1">
                <Text className="text-sm text-green-500">Completé</Text>
              </View>
              <FontAwesome name="check-circle" color={"#22c55e"}></FontAwesome>
            </View>
          </View>

          <View className="flex-row py-2">
            <Image
              className="w-[80px] h-[80px] rounded-lg  mr-3"
              source={require("../../assets/images/topDoctor/top2.png")}
            ></Image>

            <View className="justify-between">
              <Text className="text-sm font-medium">Akou Serge</Text>
              <Text className="text-sm font-light">Cardiologue</Text>
              <View className="px-2 bg-amber-100 flex items-center flex-row my-2 p-1 w-[50px] rounded">
                <Ionicons name="star" color={"#FBBF24"}></Ionicons>
                <View className="ml-1">
                  <Text className="font-medium">4.8</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row mt-5 justify-around">
            {/*<TouchableOpacity
              onPress={() => router.push("(stack)/PaiementRDV")}
              className="px-3 py-3 border rounded border-blue-500 "
            >
              <Text className="text-lg text-blue-500">Prendre Rendez-vous</Text>
  </TouchableOpacity>*/}

            <TouchableOpacity
              onPress={() => router.push("(stack)/DetailsRDV")}
              className="px-5 py-3 rounded w-full bg-blue-500"
            >
              <Text className="text-lg text-center text-white">
                Voir les détails
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
