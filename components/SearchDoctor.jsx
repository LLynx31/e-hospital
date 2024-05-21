import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function SearchDoctor({
  urlImg,
  nom,
  prenom,
  note,
  specialite,
  lieu,
}) {
  return (
    <TouchableOpacity onPress={()=>router.push("(stack)/Doctor")}>
      <View className="w-full min-h-[110px] my-2 flex justify-between flex-row bg-white p-2 rounded-lg">
        <View className="flex flex-row">
          <Image
            className="h-full w-[100px] mr-3 rounded-lg"
            source={urlImg}
          ></Image>
          <View className="flex gap-1 ">
            <View>
              <Text className="text-base capitalize font-semibold">
                {nom} {prenom}
              </Text>
            </View>
            <View>
              <Text className="text-base">{specialite}</Text>
            </View>
            <View className="flex flex-row items-center">
              <Ionicons
                name="location-outline"
                color={"#000"}
                className=""
                size={15}
              ></Ionicons>
              <View className="ml-1">
                <Text className="font-medium">{lieu}</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="px-2 bg-amber-100 ml-5 flex items-center flex-row p-1 w-[50px] h-[20px] rounded">
          <Ionicons name="star" color={"#FBBF24"} className="mr-1"></Ionicons>
          <View className="ml-1">
            <Text className="font-medium">{note}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
