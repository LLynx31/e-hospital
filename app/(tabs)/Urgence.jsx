import { SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import ItemsUrgence from "../../components/ItemsUrgence";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { router } from "expo-router";
import { FlatList } from "react-native";

const { height, width } = Dimensions.get("window");
export default function Urgence() {
  const renderItem = ({ item }) => (
    <ItemsUrgence
      date={item.date}
      message={item.message}
      user={item.user}
      key={item.id}
    ></ItemsUrgence>
  );

  return (
    <SafeAreaView>
      
        <FlatList
          className="h-screen px-5 pt-5"
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          data={dataUrgence}
          renderItem={renderItem}
          ListFooterComponent={<View className="mb-[150px]"></View>}
          ListHeaderComponent={
            <View className="flex flex-row mb-5  items-center">
              <TouchableOpacity
                className="basis-1/4"
                onPress={() => router.back()}
              >
                <Ionicons size={30} name="arrow-back" />
              </TouchableOpacity>

              <View className="basis-1/2">
                <Text className="text-xl text-center text-red-500 font-bold">
                  Urgences
                </Text>
              </View>

              <View className="wbasis-1/4" />
            </View>
          }
        >
          
        </FlatList>
        


      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("(stack)/MakeUrgence")}
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
