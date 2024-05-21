import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Article({ urlImg, titre, tempsLecture, date,  vertical}) {
  

  return (
    <TouchableOpacity onPress={()=>router.push("(stack)/Article")} className={!vertical ? "flex flex-row bg-white my-1 rounded-xl p-2 w-ful min-h-[100px]" : "flex-col w-[220px] min-h-[250px] bg-white my-1 rounded-xl p-2"}>
      <Image className={!vertical ? "w-[100px] h-full mr-2 rounded-lg" :"h-[150px] w-full mr-2 rounded-lg mb-1"} source={urlImg}></Image>
      <View className="flex w-[200px] justify-between">
        <Text className="text-lg">{titre}</Text>
        <View className="flex flex-row items-center">
            <Text className="text-sm text-slate-400"> {date} </Text>
            <View className="w-[5px] h-[5px] rounded-full bg-slate-300"></View>
            <Text className="text-blue-500"> {tempsLecture} </Text>
        </View>
        {/*<Ionicons color={"#60a5fa"} name="bookmarks"></Ionicons>*/}
      </View>
    </TouchableOpacity>
  );
}

