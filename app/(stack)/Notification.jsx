import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import NotificationItem from "../../components/Notifications";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Notification() {
  const notifications = [
    { id: "1", message: "Votre commande vient d'arriver au point de retrait" },
    { id: "2", message: "Votre commande vient d'arriver au point de retrait" },
    { id: "3", message: "Votre commande vient d'arriver au point de retrait" },
    { id: "4", message: "Votre commande vient d'arriver au point de retrait" },
    { id: "5", message: "Votre commande vient d'arriver au point de retrait" },
  ];

  const renderItem = ({ item }) => (
    <NotificationItem key={item.id} message={item.message} />
  );

  return (
    <SafeAreaView>
      <FlatList
        className="h-screen px-5 pt-5"
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        data={notifications}
        renderItem={renderItem}
        ListHeaderComponent={
          <View className="flex flex-row mb-5  items-center">
            <TouchableOpacity
              className="basis-1/4"
              onPress={() => router.back()}
            >
              <Ionicons size={30} name="arrow-back" />
            </TouchableOpacity>

            <View className="basis-1/2">
              <Text className="text-xl text-center text-blue-500 font-bold">
                Mes notifications
              </Text>
            </View>

            <View className="wbasis-1/4" />
          </View>
        }
      ></FlatList>
      <View className="h-[150px]"></View>
    </SafeAreaView>
  );
}
