import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SearchDoctor from "../../components/SearchDoctor";
import { SafeAreaView } from "react-native";

export default function ListTopMedecin() {

  const renderItem = ({ item }) => (
    <SearchDoctor
      lieu={item.lieu}
      nom={item.nom}
      note={item.note}
      specialite={item.specialite}
      prenom={item.prenom}
      urlImg={item.urlImg}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
      ListFooterComponent={<View className="mb-[150px]"></View>}
        data={dataMedecin}
        renderItem={renderItem}
        keyExtractor={item => item.nom}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10 }}
        ListHeaderComponent={
          <View className="flex flex-row mb-5 items-center">
            <View className="basis-1/4">
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons size={30} name="arrow-back" />
              </TouchableOpacity>
            </View>

            <View className="basis-1/2">
              <Text className="text-xl text-center font-bold">Top Docteur</Text>
            </View>

            <View className="basis-1/4"></View>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const dataMedecin = [
  {
    urlImg: require("../../assets/images/topDoctor/top1.png"),
    nom: "Akou",
    prenom: "Serge",
    specialite: "Généraliste",
    note: "4.9",
    lieu: "CHU cocody",
  },
  {
    urlImg: require("../../assets/images/topDoctor/top2.png"),
    nom: "Akichi",
    prenom: "Sylsvestre",
    specialite: "Dentiste",
    note: "4.8",
    lieu: "CHU treichville",
  },
  {
    urlImg: require("../../assets/images/topDoctor/top3.png"),
    nom: "Kouassi",
    prenom: "Esther",
    specialite: "Dermatologue",
    note: "4.7",
    lieu: "PMI plateau",
  },
  {
    urlImg: require("../../assets/images/topDoctor/top4.png"),
    nom: "Kacou",
    prenom: "Myriam",
    specialite: "Cardiologue",
    note: "4.1",
    lieu: "PMI marcory",
  },
  {
    urlImg: require("../../assets/images/topDoctor/top5.png"),
    nom: "Akouba",
    prenom: "Cerise",
    specialite: "ORL",
    note: "4.0",
    lieu: "hopital koummassi",
  },
];
