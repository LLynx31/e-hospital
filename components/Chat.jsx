import { Text, View } from "react-native";
import { Image } from "react-native";

export default function Chat({ user, message, }) {
  if (user) {
    return (
      <View className="mt-5">
        <View className="flex-row items-center gap-2">
          <Image
            className="w-[50px] h-[50px] rounded-full"
            source={user.photo}
          ></Image>
          <Text className="text-base font-medium">
            {user.nom} {user.prenom}
          </Text>
        </View>
        <View className="flex-row mt-3">
          <View className="px-2 gap-1 min-w-[100px] rounded-md py-2 bg-white">
            <Text className="text-base">{message.text}</Text>
            <Text className="text-zinc-400 text-sm">{message.heure}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-row mt-5 justify-end">
      <View className="px-2 gap-1 min-w-[100px] rounded-md py-2 bg-blue-500">
        <Text className="text-base text-white">{message.text}</Text>
        <Text className="text-white text-sm">{message.heure}</Text>
      </View>
    </View>
  );
}
