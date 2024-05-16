import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function ServiceCategorie({ urlImg = "", nom }) {
  return (
    <Link href={"/(stack)/ListMedecinCategorie"} asChild>
      <TouchableOpacity>
        <View className="flex items-center rounded-lg justify-center w-[80px] h-[80px] bg-slate-200">
          <Image width={50} height={50} source={{ uri: urlImg }}></Image>
          <Text className="text-sm">{nom}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
