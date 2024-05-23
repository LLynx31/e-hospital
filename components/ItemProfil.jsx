import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { TouchableHighlight } from "react-native";
import { Text, View } from "react-native";

export default function ItemProfil({ nameIcon, libelle, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex-row border-b justify-between items-center border-b-gray-300 w-full py-2 px1 ">
        <View className="flex-row items-center">
          <View className="w-[60px]  items-center justify-center bg-slate-100 rounded-lg h-[60px] ">
            <Ionicons size={30} color={"#3b82f6"} name={nameIcon}></Ionicons>
          </View>

          <View className="ml-5">
            <Text className="text-base font-medium">{libelle}</Text>
          </View>
        </View>

        <View className="mr-5">
            <FontAwesome size={30} name="angle-right"></FontAwesome>
        </View>
      </View>
    </TouchableOpacity>
  );
}
