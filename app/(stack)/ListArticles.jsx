import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SearchDoctor from "../../components/SearchDoctor";
import { SafeAreaView } from "react-native-safe-area-context";
import Article from "../../components/Article";

export default function ListArticles() {
  
  const listArticle = dataArticle.map( items => <Article key={items.id} date={items.date} titre={items.titre} tempsLecture={items.tempsLecteure} urlImg={items.urlImg} ></Article>)
  return (
    <SafeAreaView>
      <ScrollView className="px-5 w-screen mt-1 h-screen ">
        <View className="flex flex-row mb-5 justify-between items-center">
          <TouchableOpacity className="" onPress={() => router.back()}>
            <Ionicons size={30} name="arrow-back"></Ionicons>
          </TouchableOpacity>

          <View className="">
            <Text className="text-xl text-center font-bold"> Articles </Text>
          </View>

          <TouchableOpacity className="" onPress={() => router.back()}>
            <Ionicons size={30} name="filter"></Ionicons>
          </TouchableOpacity>
        </View>
        <View className="mt-3 px-3 flex w-full flex-row bg-slate-200 rounded-md py-2">
          <View className="mr-2">
            <Ionicons
              onPress={() => router.push("(stack)/ListSearchMedecin")}
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

        <View>
          <Text className="text-xl font-semibold mt-5">Derniers ajouts</Text>
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
            data={dataArticle}
            renderItem={({ item }) => {
              return (
                <View className="rounded-lg">
                  <Article
                    date={item.date}
                    tempsLecture={item.tempsLecteure}
                    titre={item.titre}
                    key={item.id}
                    urlImg={item.urlImg}
                    vertical={true}
                  ></Article>
                </View>
              );
            }}
          ></FlatList>
        </View>

        <View>
          <Text className="text-xl font-semibold mt-5">Articles</Text>
        </View>

        <View className="mt-5 mb-[100px]">
         
          {listArticle}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const dataArticle = [
  {
    urlImg: require("../../assets/images/article/article1.png"),
    titre: "The 25 Healthiest Fruits You Can Eat, According to a Nutritionist",
    tempsLecteure: "5min",
    date: "12 mai, 2024",
    id: "1",
  },

  {
    urlImg: require("../../assets/images/article/article2.png"),
    titre: "Traditional Herbal Medicine Treatments for COVID-19",
    tempsLecteure: "10min",
    date: "10 mai, 2024",
    id: "2",
  },

  {
    urlImg: require("../../assets/images/article/article3.png"),
    titre:
      "Beauty Tips For Face: 10 Dos and Don'ts for Naturally Beautiful Skin",
    tempsLecteure: "9min",
    date: "1 mai, 2024",
    id: "3",
  },
];
