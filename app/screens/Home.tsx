import { View, Text, Button, TextInput, StyleSheet, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HomePageProps } from "../navigation/RootStack";
const Home = ({ navigation }: HomePageProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Check here! "
          onPress={() => {
            alert("Hello!");
          }}
        />
      ),
    });
  });
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button
        title="Feed"
        onPress={() => {
          navigation.push("Feed");
        }}
      />
      <Button
        title="Profile"
        onPress={() => {
          navigation.push("Profile");
        }}
      />
      <Button
        title="Detail Page"
        onPress={() => {
          navigation.push("Details", { id: 1 });
        }}
      />
      <Button
        title="open Drawer"
        onPress={() => {
          navigation.navigate("Drawer");
        }}
      />
      <Button
        title="open Modal"
        onPress={() => {
          navigation.navigate("Modal");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Home;
