import { ScrollView, Text, View } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Category from "./Category";
import Hotels from "./Hotels";
import City from "./City";
import HotelList from "./HotelList";
import TabNavigation from "../../Navigation/TabNavigation";
export default function Home() {
  return (
    <ScrollView>
      <Header />
      <Slider />
      <Category />
      <City />
      <Hotels />
      <HotelList />
    </ScrollView>
  );
}
