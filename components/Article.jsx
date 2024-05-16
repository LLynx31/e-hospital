import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

export default function Article({ urlImg, titre, tempsLecture, date }) {
  return (
    <View className="flex flex-row bg-white my-1 rounded-xl p-2 w-full">
      <Image className="w-[100px] h-full mr-2 rounded-lg" source={urlImg}></Image>
      <View className="flex w-[200px]">
        <Text className="text-lg  ">{titre}</Text>
        <View className="flex flex-row items-center">
            <Text className="text-sm text-slate-400"> {date} </Text>
            <View className="w-[5px] h-[5px] rounded-full bg-slate-300"></View>
            <Text className="text-blue-500"> {tempsLecture} </Text>
        </View>
        {/*<Ionicons color={"#60a5fa"} name="bookmarks"></Ionicons>*/}
      </View>
    </View>
  );
}
