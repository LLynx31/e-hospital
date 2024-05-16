import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Text, View } from "react-native";

export default function TopDoctor ({ urlImg, nom, prenom, categorie, note }) {
  return (
    <View className="p-3 w-[150px] rounded-lg bg-white">
      <Image className="rounded-lg w-full h-[150px] " source={urlImg}></Image>
      <View className="px-2 bg-amber-100 flex items-center flex-row my-2 p-1 w-[50px] rounded">
        <Ionicons name="star" color={"#FBBF24"}></Ionicons>
        <View className="ml-1">
          <Text className="font-medium">{note}</Text>
        </View>
      </View>
      <View>
        <Text className="font-bold text-base capitalizee">
          Dr. {nom}
        </Text>
      </View>
      <View>
        <Text className="text-base">{categorie}</Text>
      </View>
    </View>
  );
}
