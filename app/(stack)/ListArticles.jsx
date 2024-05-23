import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native";
import Article from "../../components/Article";

export default function ListArticles() {

  const renderItem = ({ item }) => (
    <Article
      key={item.id}
      date={item.date}
      titre={item.titre}
      tempsLecture={item.tempsLecteure}
      urlImg={item.urlImg}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={dataArticle}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10 }}
        ListHeaderComponent={
          <>
            <View className="flex flex-row mb-5 justify-between items-center">
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons size={30} name="arrow-back" />
              </TouchableOpacity>

              <View>
                <Text className="text-xl text-center font-bold"> Articles </Text>
              </View>

              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons size={30} name="filter" />
              </TouchableOpacity>
            </View>

            <View className="mt-3 px-3 flex w-full flex-row bg-slate-200 rounded-md py-2">
              <View className="mr-2">
                <Ionicons
                  onPress={() => router.push("(stack)/ListSearchMedecin")}
                  name="search-outline"
                  color={"#a1a1aa"}
                  size={25}
                />
              </View>
              <TextInput
                className="w-full"
                placeholder="entrez le nom ou le prénom d'un médecin"
              />
            </View>

            <View>
              <Text className="text-xl font-semibold mt-5">Derniers ajouts</Text>
              <FlatList
                className="my-2 rounded-lg"
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={({ highlighted }) => (
                  <View
                    className="w-[10px]"
                    style={[highlighted && { marginLeft: 0 }]}
                  />
                )}
                horizontal
                data={dataArticle}
                renderItem={({ item }) => (
                  <View className="rounded-lg">
                    <Article
                      date={item.date}
                      tempsLecture={item.tempsLecteure}
                      titre={item.titre}
                      key={item.id}
                      urlImg={item.urlImg}
                      vertical={true}
                    />
                  </View>
                )}
              />
            </View>

            <View>
              <Text className="text-xl font-semibold mt-5">Articles</Text>
            </View>
          </>
        }
      />
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
    titre: "Beauty Tips For Face: 10 Dos and Don'ts for Naturally Beautiful Skin",
    tempsLecteure: "9min",
    date: "1 mai, 2024",
    id: "3",
  },
];
