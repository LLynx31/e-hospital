import { router } from "expo-router";
import { Text, Image, View, TouchableOpacity } from "react-native";

export default function Disscussion({
  nomDoctor,
  prenomDoctor,
  photoDoctor,
  lastMessage,
  lastMessagehours,
  newMessage,
}) {
  return (
    <TouchableOpacity onPress={()=>router.push('(stack)/RoomConsultation')} className=" h-[80px] border-b overflow-hidden flex-row  p-2 border-b-zinc-300 bg-white">
      <Image
        className="w-[60px] h-[60px] mr-2 rounded-full"
        source={photoDoctor}
      ></Image>
      <View className=" w-[250px] overflow-hidden ">
        <Text className="text-base font-semibold">
          Dr. {nomDoctor} {prenomDoctor}
        </Text>
        <Text className="text-sm font-light">{lastMessage}</Text>
      </View>

      <View className="justify-between">
        <Text className="text-zinc-400">{lastMessagehours}</Text>
        {newMessage && (
          <View className="self-center mb-3 p-1 w-[25px] h-[25px] items-center justify-center rounded-full bg-blue-500">
            <Text className="text-sm text-white">{newMessage}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
