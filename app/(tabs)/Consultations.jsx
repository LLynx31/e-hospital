import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Disscussion from "../../components/Discussion";

export default function Consultation() {
  const listConsultation = dataConsultation.map((item) => (
    <Disscussion key={item.id}
      lastMessage={item.lastMessage}
      newMessage={item.newMessage}
      nomDoctor={item.nomDoctor}
      prenomDoctor={item.prenomDoctor}
      photoDoctor={item.photoDoctor}
      lastMessagehours={item.lastMessageHours}
    ></Disscussion>
  ));

  return (
    <SafeAreaView>
      <View className="my-5 mx-5">
        <Text className="text-2xl font-bold text-center text-blue-500">
          Mes Consultation
        </Text>
      </View>
      <View className="w-full h-[0.1px] "></View>
      <ScrollView className="h-screen w-screen">
        {/*<View className=" px-3 flex w-[310px] mb-8 mx-auto flex-row bg-slate-200 rounded-md py-2">
          <View className="mr-2">
            <Ionicons
              onPress={() => router.push("(stack)/ListSearchMedecin")}
              name="search-outline"
              color={"#a1a1aa"}
              size={25}
            ></Ionicons>
          </View>
          <TextInput
            className="w-[250px]"
            placeholder="entre le nom ou le prenom d'un medecin"
          ></TextInput>
  </View>*/}
        {listConsultation}
      </ScrollView>
    </SafeAreaView>
  );
}

const dataConsultation = [
  {
    id:'1',
    nomDoctor: "Attoh",
    prenomDoctor: "Syntiche",
    photoDoctor: require("../../assets/images/topDoctor/top4.png"),
    lastMessage: "Merci beau à la prochaine",
    lastMessageHours: "11:52",
    newMessage: "1",
  },

];
