import { Stack } from "expo-router";

export default function StackLayout(){
    return(
        <Stack screenOptions={{ tabBarActiveTintColor: 'blue', headerShown:false, tabBarShowLabel: false, 
        }}>

        </Stack>
    )
}