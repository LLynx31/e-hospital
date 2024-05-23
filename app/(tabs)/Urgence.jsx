import { SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import ItemsUrgence from "../../components/ItemsUrgence";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { router } from "expo-router";

const { height, width } = Dimensions. get("window")
export default function Urgence() {
  const listUrgences = dataUrgence.map((item) => (
    <ItemsUrgence
      date={item.date}
      message={item.message}
      user={item.user}
      key={item.id}
    ></ItemsUrgence>
  ));


  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} className="px-5 pt-3 h-screen w-screen">
        <View className="flex flex-row  justify-center items-center">
          <View className="">
            <Text className="text-xl text-red-500 text-center font-bold">
              {" "}
              Urgences{" "}
            </Text>
          </View>
        </View>

        <View className="my-6 w-[250px] ">
          <Text className="text-lg font-medium text-gray-500">Urgence</Text>
          <Text className="text-base text-gray-500">
            <View className="gap-3"></View>
            Retrouvez ici les personnes qui ont une situation assez urgentes
          </Text>
        </View>
        {listUrgences}

        <View className="h-[150px]"></View>
      </ScrollView>
      <TouchableOpacity
          style={styles.fab}
          onPress={() => router.push('(stack)/MakeUrgence')}
        >
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const dataUrgence = [
  {
    id: "1",
    message:
      "Besoin en urgence d'une poche de sang du groupe 0+ pour yamoussoukro Contact  0707070707",
    user: true,
    date: "25/03/2024",
  },
  {
    id: "2",
    message:
      "Besoin en urgence d'une poche de sang du groupe 0+ pour yamoussoukro Contact  0707070707",
    user: false,
    date: "25/03/2024",
  },
  {
    id: "3",
    message:
      "Besoin en urgence d'une poche de sang du groupe 0+ pour yamoussoukro Contact  0707070707",
    user: false,
    date: "25/03/2024",
  },

  {
    id: "4",
    message:
      "Besoin en urgence d'une poche de sang du groupe 0+ pour yamoussoukro Contact  0707070707",
    user: false,
    date: "25/03/2024",
  },

  {
    id: "5",
    message:
      "Besoin en urgence d'une poche de sang du groupe 0+ pour yamoussoukro Contact  0707070707",
    user: false,
    date: "25/03/2024",
  },
];

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    top: height - 150,
    backgroundColor: "#3b82f6",
    borderRadius: 28,
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
});
