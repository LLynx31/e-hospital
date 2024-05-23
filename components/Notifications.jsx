import React from "react";
import { View, Text } from "react-native";
import { styled } from "nativewind";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const NotificationItem = ({ message }) => {
  return (
    <View className="flex-row  gap-1 p-1 my-2 bg-blue-100 rounded-lg">
      <View className="w-6 h-6 pt-1">
        <Ionicons color={"#3b82f6"} size={20} name="notifications"></Ionicons>
      </View>

      <Text className="text-base text-blue-500">{message}</Text>
    </View>
  );
};

export default NotificationItem;
