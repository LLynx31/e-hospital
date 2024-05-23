import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

export default function ItemsUrgence({ message, user, date }) {
  return (
    <View className={`w-full bg-red-500 p-2 my-2 rounded-md`}>
      <Text className={`text-base text-white`}>{message}</Text>

      <View className="items-end">
        <TouchableOpacity>
          <View className="flex-row p-2 rounded-md my-2 bg-white w-[100px] justify-center">
            <Text className={`text-base font-medium text-red-500 text-right `}>
              Contacter
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
