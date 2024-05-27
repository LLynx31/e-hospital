import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import Chat from "../../components/Chat";
import { Dimensions } from "react-native";
import { useEffect } from "react";

export default function RoomConsultation() {
  const listChat = dataMessage.map((item) => (
    <Chat key={item.id} user={item?.user} message={item.message}></Chat>
  ));

  const { height, width } = Dimensions.get("window");

  useEffect(() => console.log(height));

  return [
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: () => (
            <View className="flex-row items-center gap-5">
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={25} />
              </TouchableOpacity>
              <Image
                className="w-[35px] h-[35px] rounded-full"
                source={require("../../assets/images/topDoctor/top5.png")}
              />
              <Text className="text-base font-medium">Dr. Attoh Syntiche</Text>
            </View>
          ),
          headerRight: () => (
            <View className="flex-row gap-5">
              <TouchableOpacity>
                <Ionicons name="call" color={"#3b82f6"} size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="videocam" color={"#3b82f6"} size={25} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" && "padding"}
        keyboardVerticalOffset={Platform.OS === "ios" && 90}
      >
        <View style={{ flex: 1 }}>
          <FlatList
            className="px-5"
            data={dataMessage}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Chat key={item.id} user={item.user} message={item.message} />
            )}
            contentContainerStyle={{ paddingHorizontal: 5 }}
            showsVerticalScrollIndicator={false}
          />
          <View className="flex-row border-t py-2 px-2 justify-between bg-white border-t-gray-300">
            <TextInput
              multiline
              placeholder="Entrez quelque chose "
              className="w-[270px] rounded-lg border border-zinc-200 bg-zinc-100 h-[40px] px-5"
            />
            <TouchableOpacity>
              <Ionicons
                name="send"
                size={30}
                color={"#3b82f6"}
                style={{ marginTop: 6 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="camera"
                size={30}
                color={"#3b82f6"}
                style={{ marginTop: 6 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>,
  ];
}

const dataMessage = [
  {
    id: "1",
    user: {
      nom: "Attoh",
      prenom: "Syntiche",
      photo: require("../../assets/images/topDoctor/top5.png"),
    },
    message: {
      text: "Bonjour comment puis je vous aidez ?",
      heure: "11:15",
    },
  },

  {
    id: "2",
    message: {
      text: "Bonjour Docteur j'ai de grave maux de tete",
      heure: "11:15",
    },
  },

  {
    id: "3",
    user: {
      nom: "Attoh",
      prenom: "Syntiche",
      photo: require("../../assets/images/topDoctor/top5.png"),
    },
    message: {
      text: "Cela a commencé quand ",
      heure: "11:16",
    },
  },

  {
    id: "4",
    message: {
      text: "Depuis hier",
      heure: "11:15",
    },
  },
];
