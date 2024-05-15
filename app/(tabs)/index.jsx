import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Campagne from "../../components/Campagne";

export default function Index() {
  const [isConnected, setConneted] = useState(true);
  const user = "../../assets/images/user.png";
  return (
    <SafeAreaView>
      <ScrollView className="w-screen h-screen px-5 pt-3">
        {isConnected && (
          <View className="flex flex-row justify-between">
            <View>
              <Text className="text-base">Bonjour, Brou</Text>
            </View>

            {!user ? (
              <Image
                className=" w-[50px] h-[50px] rounded-md"
                source={require(user)}
              ></Image>
            ) : (
              <Pressable onPress={() => Alert.alert("pressed")}>
                <Ionicons name="person-circle" size={35}></Ionicons>
              </Pressable>
            )}
          </View>
        )}

        <View>
          <Text className="font-bold tracking-wider text-2xl">
            continuez de {"\n"}prendre soin de votre santé
          </Text>
        </View>

        <View className="mt-5 px-3 flex w-full flex-row bg-slate-200 rounded-md py-2">
          <View className="mr-2">
            <Ionicons
              name="search-outline"
              color={"#a1a1aa"}
              size={25}
            ></Ionicons>
          </View>
          <TextInput
            className="w-full"
            placeholder="entre le nom ou le prenom d'un medecin"
          ></TextInput>
        </View>
        <Campagne image="../../assets/images/campagne/campagne1.png"></Campagne>
      </ScrollView>
    </SafeAreaView>
  );
}
