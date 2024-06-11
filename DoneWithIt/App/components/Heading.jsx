import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";

export default function Heading({ text, isViewAll = false }) {
  return (
    <View style={styles.container}>
      <View style={styles.SliderHead}>
        <Text style={{ fontFamily: "Mukta-Bold", fontSize: 15 , color: Colors.PURPLE}}>
          {text}
        </Text>
      </View>
      {isViewAll && <Text style={{color: Colors.PURPLE}}>View All</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 13,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
