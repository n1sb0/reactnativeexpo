import { View, Text } from "react-native";
import React from "react";

type PersonepProps = {
  name: string;
};
const Person = (props: PersonepProps) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default Person;
