import { Image, Text, View } from "react-native";


export default function Campagne({image=""}){
    return(
        <Image className="w-full h-[150px] rounded-lg" source={require("../assets/images/campagne/campagne1.png")}></Image>
    )
}