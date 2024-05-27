import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Article() {
  return (
    <View className="relative h-screen w-screen ">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="h-screen w-screen"
      >
        <TouchableOpacity
          className="absolute z-10 top-[40px] left-[15px]"
          onPress={() => router.back()}
        >
          <Ionicons size={30} name="arrow-back"></Ionicons>
        </TouchableOpacity>
        <View className="w-full h-[400px]">
          <Image
            className="w-full h-full"
            source={require("../../assets/images/article/article3.png")}
          ></Image>
        </View>
        <View className="mt-5 mx-5">
          <Text className="text-2xl font-bold">
            The 25 Healthiest Fruits You Can Eat, According to a Nutritionist
          </Text>

          <Text className="text-base mt-3 text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum eum
            libero officiis eligendi maxime beatae laborum atque doloremque quo,
            mollitia assumenda itaque corrupti in voluptatibus veritatis at cum
            natus dicta.{"\n\n"}
            Pariatur officiis aliquam sint asperiores debitis voluptatum
            repellendus assumenda maiores earum ipsum, non, molestiae ipsam
            dolorum tenetur, laboriosam ex enim deleniti. Nisi minus enim amet
            perferendis id error quia. Perferendis? Ea vero nostrum quam
            officiis quod earum id corrupti laudantium eligendi repellat sint
            impedit veniam aliquid dolor a culpa, animi dolores! Dolor eos sed
            voluptate, accusantium doloremque beatae possimus natus.
            {"\n\n"}
            Eum porro optio commodi inventore tempore aliquid quia quasi
            recusandae, praesentium cum eligendi, placeat doloribus deleniti
            consectetur ipsa? Facere animi, eos facilis distinctio neque
            necessitatibus officia. Sint nostrum ipsam at. Mollitia fugit,
            nostrum numquam explicabo aperiam, reprehenderit debitis quo
            perspiciatis dolorem fugiat sint placeat maxime quos asperiores
            necessitatibus tempora molestiae distinctio, sed nisi! Tempore,
            vitae! Vitae quidem enim accusamus atque. Animi vel, repellendus, at
            est facere in necessitatibus tempora sapiente, laudantium enim
            aliquam molestiae ratione minima sequi! Ullam, tempora suscipit
            omnis facere corrupti, enim, distinctio neque dolorum placeat
            officia quisquam? Optio aliquid laborum, beatae ullam incidunt earum
            iusto iste aperiam voluptatem, deserunt in commodi illo quasi!
            Voluptatem at accusamus sit tempore impedit neque, delectus
            blanditiis ex error earum officia libero!
            {"\n\n"}
            Corporis necessitatibus maxime sapiente laudantium. Eaque in
            recusandae dolor nemo labore nam, soluta illo aperiam, tempora,
            beatae consequatur. Maxime debitis soluta inventore ducimus totam
            ullam quibusdam numquam eligendi cupiditate sequi.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolue",
          bottom: 70,
          right: -300,
          backgroundColor: "#3b82f6",
          width: 50,
          height: 50,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          elevation: 5, // Ombre pour l'effet flottant
        }}
        onPress={() => router.push("(stack)/Commentaire")}
      >
        <Ionicons name="chatbubble-ellipses-outline" size={30} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
}
