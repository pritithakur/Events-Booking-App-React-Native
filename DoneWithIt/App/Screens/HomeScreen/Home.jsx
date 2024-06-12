import { ScrollView, Text, View, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Category from "./Category";
import Hotels from "./Hotels";
import City from "./City";
import HotelList from "./HotelList";
import TabNavigation from "../../Navigation/TabNavigation";
import Featured from "./Featured";
import Dance from "./Dance";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Header />
        <Slider />
        <Category />
        <Featured />
        <City />
        <Dance />
        <Hotels />
        <HotelList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515", // Set the background color here
  },
  scrollViewContent: {
    padding: 10, // Add padding if necessary
  },
});
