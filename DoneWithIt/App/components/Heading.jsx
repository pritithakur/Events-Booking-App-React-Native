import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";

export default function Heading({ text, isViewAll = false }) {
  return (
    <View style={styles.container}>
      <View style={styles.SliderHead}>
        <Text
          style={{
            fontFamily: "Mukta-Bold",
            fontSize: 18,
            color: Colors.ORANGE,
          }}
        >
          {text}
        </Text>
      </View>
      {isViewAll && <Text style={{ color: Colors.ORANGE }}>View All</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom:20,
    paddingTop:20,
    marginLeft: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
