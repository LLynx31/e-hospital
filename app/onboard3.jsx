import { Button, Image, ImageBackground, Pressable, Text, View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

export default function Index() {
  const inset =  useSafeAreaInsets()
  return (
    <SafeAreaProvider>
      <View style={{paddingTop:inset.top}} className="flex flex-col h-screen  bg-blue-200">
        <View  className="w-full h-1/2 flex items-center ">
          <ImageBackground className="w-full h-full" source={require('@/assets/images/onboard3.png')}></ImageBackground>
        </View>

        <View className="h-1/2 flex flex-col bg-white rounded-t-2xl px-4 w-full">
          <View className="mt-5">
            <Text className="text-center text-2xl tracking-widest font-semibold">
              La santé proche {"\n"} de vous
            </Text>
            <Text className="text-center text-base mt-5 mb-5 text-slate-500">
              Votre bien etre, juste a coté {"\n"} Lorem ipsum dolor sit, amet
              consectetur.
            </Text>
          </View>

          <View className="flex items-center mt-[20%] justify-center">
            <View className="flex flex-row gap-1  justify-center ">
              <View className="w-[15px] rounded-md bg-slate-300 h-[10px]"></View>
              <View className="w-[15px] rounded-md bg-slate-300 h-[10px]"></View>
              <View className="w-[15px] rounded-md bg-blue-300 h-[10px]"></View>
            </View>

            <Link replace href={"/(tabs)"} asChild>
              <Pressable>
                <View className="rounded-md px-5 w-[300px] text-white mt-5 bg-blue-600 py-2">
                 <Text className="text-base text-center text-white">commencer</Text>
                </View>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
