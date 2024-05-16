import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import ServiceCategorie from "../../components/ServiceCategorie";
import TopDoctor from "../../components/TopDoctor";
import Article from "../../components/Article";
import { router } from "expo-router";

export default function Index() {
  const [isConnected, setConneted] = useState(true);
  const user = "../../assets/images/user.png";


  const listArticle = dataArticle.map( items => <Article key={items.id} date={items.date} titre={items.titre} tempsLecture={items.tempsLecteure} urlImg={items.urlImg} ></Article>)

  const inset = useSafeAreaInsets()

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-screen h-screen px-5 pt-3"
      >
        {isConnected && (
          <View className="flex flex-row justify-between">
            <View>
              <Text className="text-base">Bonjour, <Text className="text-blue-500 font-medium">Brou</Text></Text>
            </View>

            {user ? (
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
            continuez de {"\n"}prendre soin de votre <Text className="text-blue-500 font-medium">santé</Text>
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

        <Text className="text-xl font-bold tracking-wider  mt-5">
          <Text className="text-blue-500">Service</Text> de santé
        </Text>

        <FlatList
          className="h-[100 px]  my-2 rounded-lg"
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={({ highlighted }) => (
            <View
              className="w-[10px]"
              style={[highlighted && { marginLeft: 0 }]}
            />
          )}
          horizontal
          data={dataServiceCategorie}
          renderItem={({ item }) => {
            return (
              <View className="my-auto ">
                <ServiceCategorie
                  nom={item.nom}
                  urlImg={item.urlImg}
                ></ServiceCategorie>
              </View>
            );
          }}
        ></FlatList>

        <Text className="text-xl font-bold mt-5 tracking-wider">
        <Text className="text-blue-500">Campagne </Text>
           de santé
        </Text>

        <FlatList
          className="h-[200px] my-2  rounded-lg"
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={({ highlighted }) => (
            <View
              className="w-[10px]"
              style={[highlighted && { marginLeft: 0 }]}
            />
          )}
          horizontal
          data={dataCampagne}
          renderItem={({ item }) => {
            return (
              <View className="rounded-lg">
                <Image
                  className="w-[275px] my-auto h-[200px] rounded-lg"
                  source={item.image}
                ></Image>
              </View>
            );
          }}
        ></FlatList>

        <View className="flex flex-row items-center justify-between mt-5">
          
          <Text className="text-xl font-bold">Top  <Text className="text-blue-500">Docteur</Text></Text>
          <TouchableOpacity onPress={()=>router.push("(stack)/ListTopMedecin")}>
            <Text className="text-sm text-blue-500">voir plus</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          className=" my-2  rounded-lg"
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={({ highlighted }) => (
            <View
              className="w-[10px]"
              style={[highlighted && { marginLeft: 0 }]}
            />
          )}
          horizontal
          data={dataTopDoctor}
          renderItem={({ item }) => {
            return (
              <View className="rounded-lg">
                <TopDoctor
                  nom={item.nom}
                  prenom={item.prenom}
                  categorie={item.categorie}
                  note={item.note}
                  urlImg={item.urlImg}
                ></TopDoctor>
              </View>
            );
          }}
        ></FlatList>

        <View className="mt-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-bold mb-2">Recents  <Text className="text-blue-500">Articles</Text></Text>
            <TouchableOpacity>
              <Text className="text-sm text-blue-500">voir plus</Text>
            </TouchableOpacity>
          </View>
          {listArticle}
        </View>

        <View className="h-[150px] w-full"></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const dataCampagne = [
  { image: require("../../assets/images/campagne/campagne1.png") },
  { image: require("../../assets/images/campagne/campagne2.jpg") },
  { image: require("../../assets/images/campagne/campagne3.jpg") },
  { image: require("../../assets/images/campagne/campagne4.jpg") },
];

const dataServiceCategorie = [
  {
    urlImg: "https://cdn-icons-png.flaticon.com/128/13515/13515135.png",
    nom: "généraliste",
  },
  {
    urlImg: "https://cdn-icons-png.flaticon.com/128/13515/13515135.png",
    nom: "généraliste",
  },
  {
    urlImg: "https://cdn-icons-png.flaticon.com/128/13515/13515135.png",
    nom: "généraliste",
  },
  {
    urlImg: "https://cdn-icons-png.flaticon.com/128/13515/13515135.png",
    nom: "généraliste",
  },
  {
    urlImg: "https://cdn-icons-png.flaticon.com/128/13515/13515135.png",
    nom: "généraliste",
  },
  {
    urlImg: "https://cdn-icons-png.flaticon.com/128/13515/13515135.png",
    nom: "généraliste",
  },
];

const dataTopDoctor = [
  {
    urlImg: require("../../assets/images/topDoctor/top1.png"),
    nom: "Akou",
    prenom: "Serge",
    categorie: "généraliste",
    note: "4.9",
  },
  {
    urlImg: require("../../assets/images/topDoctor/top2.png"),
    nom: "Akichi",
    prenom: "Sylsvestre",
    categorie: "Dentiste",
    note: "4.8",
  },
  {
    urlImg: require("../../assets/images/topDoctor/top3.png"),
    nom: "Kouassi",
    prenom: "Esther",
    categorie: "Dermatologue",
    note: "4.7",
  },
  {
    urlImg: require("../../assets/images/topDoctor/top4.png"),
    nom: "Kacou",
    prenom: "Myriam",
    categorie: "Cardiologue",
    note: "4.1",
  },
  {
    urlImg: require("../../assets/images/topDoctor/top5.png"),
    nom: "Akouba",
    prenom: "Cerise",
    categorie: "ORL",
    note: "4.0",
  },
];

const dataArticle = [
  {
    urlImg:require("../../assets/images/article/article1.png"),
    titre:"The 25 Healthiest Fruits You Can Eat, According to a Nutritionist",
    tempsLecteure:"5min",
    date:"12 mai, 2024",
    id:"1"
  },

  {
    urlImg:require("../../assets/images/article/article2.png"),
    titre:"Traditional Herbal Medicine Treatments for COVID-19",
    tempsLecteure:"10min",
    date:"10 mai, 2024",
    id:"2"
  },

  {
    urlImg:require("../../assets/images/article/article3.png"),
    titre:"Beauty Tips For Face: 10 Dos and Don'ts for Naturally Beautiful Skin",
    tempsLecteure:"9min",
    date:"1 mai, 2024",
    id:"3"
  },
]