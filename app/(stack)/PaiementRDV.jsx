import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SearchDoctor from "../../components/SearchDoctor";
import {
  MultipleSelectList,
  SelectList,
} from "react-native-dropdown-select-list";
import { useState } from "react";
import CheckBox from "react-native-check-box";
import { Alert } from "react-native";

export default function PaiementRDV() {
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "jeudi 15 mai 8h-9h" },
    { key: "2", value: "jeudi 15 mai 9h-10h" },
    { key: "3", value: "jeudi 15 mai 10h-11h" },
  ];
  return (
    <ScrollView className="px-5 my-5">
      <Text className="font-bold text-lg mb-3 text-center text-blue-500">PRENDRE UN RENDEZ-VOUS</Text>
      <SearchDoctor
        lieu={"CHU treichville"}
        nom={"Akou"}
        prenom={"Serge"}
        note={"4.8"}
        specialite={"Cardiologue"}
        urlImg={require("../../assets/images/topDoctor/top2.png")}
      ></SearchDoctor>
      <View className="mt-5">
        <Text className="font-bold text-lg">Date</Text>
        <Text className="font text-base text-slate-400">Lundi 20 mai 2024</Text>
      </View>
      <View className="mt-5">
        <Text className="font-bold text-lg mb-3">Selectionner le jour de rendez-vous</Text>
        <MultipleSelectList
          inputStyles={{ fontSize: "16px" }}
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
        />
      </View>
      <View className="mt-5">
        <Text className="font-bold text-lg">Cout du rendez-vous</Text>
        <Text className="font text-base text-blue-400 font-bold">
          5000 FCFA
        </Text>
      </View>
      <View className="mt-5">
        <Text className="font-bold text-lg">Paiement</Text>
        <Text className="font text-base text-slate-400">
          Choisissez le mode de paiement
        </Text>
      </View>

      <TouchableOpacity className="flex-row p-2 bg-white rounded-md mt-3 justify-between items-center">
        <View className="flex-row items-center">
          <Image
            className="w-[80px] h-[80px] rounded-md "
            source={require("../../assets/images/wave.png")}
          ></Image>
          <Text className="ml-5 text-lg font-semibold">Wave</Text>
        </View>

        <CheckBox
          checkBoxColor="#3b82f6"
          checkedCheckBoxColor="#3b82f6"
          isChecked={false}
          onClick={() => Alert.alert("clicked")}
        ></CheckBox>
      </TouchableOpacity>

      <TouchableOpacity className="flex-row p-2 bg-white rounded-md mt-3 justify-between items-center">
        <View className="flex-row items-center">
          <Image
            className="w-[80px] h-[80px] rounded-md "
            source={require("../../assets/images/OM.png")}
          ></Image>
          <Text className="ml-5 text-lg font-semibold">Orange Money</Text>
        </View>

        <CheckBox
          checkBoxColor="#3b82f6"
          checkedCheckBoxColor="#3b82f6"
          isChecked={false}
          onClick={() => Alert.alert("clicked")}
        ></CheckBox>
      </TouchableOpacity>

      <TouchableOpacity className="flex-row p-2 bg-white rounded-md mt-3 justify-between items-center">
        <View className="flex-row items-center">
          <Image
            className="w-[80px] h-[80px] rounded-md "
            source={require("../../assets/images/mtn.png")}
          ></Image>
          <Text className="ml-5 text-lg font-semibold">MTN Money</Text>
        </View>

        <CheckBox
          checkBoxColor="#3b82f6"
          checkedCheckBoxColor="#3b82f6"
          isChecked={false}
          onClick={() => Alert.alert("clicked")}
        ></CheckBox>
      </TouchableOpacity>

      <TouchableOpacity className="flex-row p-2 bg-white rounded-md mt-3 justify-between items-center">
        <View className="flex-row items-center">
          <Image
            className="w-[80px] h-[80px] rounded-md "
            source={require("../../assets/images/momo.png")}
          ></Image>
          <Text className="ml-5 text-lg font-semibold">Moov Money</Text>
        </View>

        <CheckBox
          checkBoxColor="#3b82f6"
          checkedCheckBoxColor="#3b82f6"
          isChecked={false}
          onClick={() => Alert.alert("clicked")}
        ></CheckBox>
      </TouchableOpacity>

      <View className="py-3 bg-blue-500 rounded-md my-5">
        <Text className="text-white text-base font-semibold text-center">
          Terminer
        </Text>
      </View>
    </ScrollView>
  );
}
