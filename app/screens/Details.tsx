import { View, Text } from "react-native";
import React from "react";
import { DetailsPageProps } from "../navigation/RootStack";

const Details = ({ navigation, route }: DetailsPageProps) => {
  const { id } = route.params;
  return (
    <View>
      <Text> Details Page ID: {id} </Text>
    </View>
  );
};

export default Details;
