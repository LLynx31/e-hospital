import { Text } from "react-native";
import { View } from "react-native";

export default function ItemsUrgence({ message, user, date }) {
  return (
    <View className={`w-full ${user ? 'bg-blue-500' : 'bg-white'} p-2 my-2 rounded-md`}>
      <Text className={`text-base ${user && 'text-white'}`}> 
        {message}
      </Text>
      <Text className={`text-base ${user && 'text-white'} text-right mt-2`}>{date}</Text>
    </View>
  );
}
