import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

const TextArea = (props) => {
  const [charCount, setCharCount] = useState(props.defaultCharCount || 0);

  const onChangeText = (text) => {
    const { onChangeText } = props;
    setCharCount(text.length);

    if (onChangeText) onChangeText(text);
  };

  const renderCharCount = () => {
    const { maxCharLimit, charCountColor, exceedCharCountColor } = props;

    if (!maxCharLimit) return null;

    return (
      <Text
        className={`text-right mt-2 ${
          charCount > maxCharLimit ? "text-red-500" : "text-gray-500"
        }`}
      >{`${charCount}/${maxCharLimit}`}</Text>
    );
  };


  return (
    <View  className="pt-2 rounded-md">
      <TextInput
        multiline
        textAlignVertical="top"
        placeholder="Ecrivez ici..."
        className="h-44 bg-white p-2 border border-gray-300 rounded-md text- text-base"
        onChangeText={onChangeText}
      />
      {renderCharCount()}
    </View>
  );
};

export default TextArea;
