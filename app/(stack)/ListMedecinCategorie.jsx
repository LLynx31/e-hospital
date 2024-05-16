import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SearchDoctor from "../../components/SearchDoctor";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListMedecinspecialite() {

    const listMedecin = dataMedecin.map(item => <SearchDoctor lieu={item.lieu} key={item.nom} nom={item.nom} note={item.note} specialite={item.specialite} prenom={item.prenom} urlImg={item.urlImg}></SearchDoctor>)

  return (
    <SafeAreaView>
      <ScrollView className="px-5 w-screen mt-1 h-screen">
        <View className="flex flex-row mb-5 justify-between items-center">
          <TouchableOpacity className="" onPress={() => router.back()}>
            <Ionicons size={30} name="arrow-back"></Ionicons>
          </TouchableOpacity>

          <View className="">
            <Text className="text-xl text-center font-bold"> Généraliste </Text>
          </View>

          <TouchableOpacity className="" onPress={() => router.back()}>
            <Ionicons size={30} name="filter"></Ionicons>
          </TouchableOpacity>
        </View>
        {listMedecin}
      </ScrollView>
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
    lieu:'CHU cocody',
  },
  {
    urlImg: require("../../assets/images/topDoctor/top2.png"),
    nom: "Akichi",
    prenom: "Sylsvestre",
    specialite: "Dentiste",
    note: "4.8",
    lieu:'CHU treichville',
  },
  {
    urlImg: require("../../assets/images/topDoctor/top3.png"),
    nom: "Kouassi",
    prenom: "Esther",
    specialite: "Dermatologue",
    note: "4.7",
    lieu:'PMI plateau',
  },
  {
    urlImg: require("../../assets/images/topDoctor/top4.png"),
    nom: "Kacou",
    prenom: "Myriam",
    specialite: "Cardiologue",
    note: "4.1",
    lieu:'PMI marcory',
  },
  {
    urlImg: require("../../assets/images/topDoctor/top5.png"),
    nom: "Akouba",
    prenom: "Cerise",
    specialite: "ORL",
    note: "4.0",
    lieu:'hopital koummassi',
  },
];
