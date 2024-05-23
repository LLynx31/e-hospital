import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import TextArea from "./../../components/TextArea";
import { TextInput } from "react-native-paper";

export default function MakeUrgence() {
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 5 : 0}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          className="px-5 w-screen mt-1 h-screen"
        >
          <View className="flex flex-row mb-5  items-center">
            <TouchableOpacity
              className="basis-1/4"
              onPress={() => router.back()}
            >
              <Ionicons size={30} name="arrow-back" />
            </TouchableOpacity>

            <View className="basis-1/2">
              <Text className="text-xl text-center text-red-500 font-bold">
                Urgence
              </Text>
            </View>

            <View className="wbasis-1/4" />
          </View>

          <View className="mt-3">
            <Text className="text-base text-center text-gray-500">
              Veuillez décrire votre situation et entrer un numéro de contact
              afin que nous puissions vous aider rapidement.
            </Text>
          </View>

          <View className="my-8">
            <Text className="text-base font-medium text-red-500">
              Decrivez votre urgence
            </Text>
            <TextArea></TextArea>
          </View>

          <View className="w-full p-1">
            <Text className="text-base font-medium text-red-500">
              Numéro à contacter
            </Text>
            <View className="flex-row w-full">
              <TextInput
                mode="outlined"
                outlineColor="#fff"
                activeOutlineColor="#fff"
                className="w-full my-3 bg-white border rounded-md border-gray-300"
              ></TextInput>
            </View>
          </View>

          <TouchableOpacity>
            <View className="py-3 my-5 bg-red-500 rounded-lg">
              <Text className="text-center text-base text-white">Envoyer</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
