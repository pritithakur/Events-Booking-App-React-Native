import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Heading from "../../components/Heading";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Utils/Colors";

export default function Dance() {
  const [dance, setdance] = useState([]);

  useEffect(() => {
    getdance();
  }, []);

  const getdance = async () => {
    try {
      const response = await fetch(
        "http://192.168.2.247:3000/allevents?event_category=dance"
      );
      const data = await response.json();
      setdance(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  return (
    <View>
      <Heading text={"Parties & Fun"} isViewAll={true} />
      <FlatList
        horizontal
        data={dance}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.eventsImageContainer}>
            <ImageBackground
              source={{ uri: item?.event_image }}
              style={styles.imageBackground}
              imageStyle={styles.imageStyle}
            >
              <LinearGradient
                colors={["rgba(0,0,0,0.6)", "transparent"]}
                style={styles.topOverlay}
              />
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.6)"]}
                style={styles.bottomOverlay}
              />
              <View style={styles.textContainer}>
                <Text style={styles.eventName}>{item?.event_name}</Text>
                <View style={styles.locationContainer}>
                  <FontAwesome5 name="map-marker-alt" size={18} color="white" />
                  <Text style={styles.locationText}>{item.city.city}</Text>
                </View>
                <View style={styles.cont}>
                  <Text style={styles.price}>
                    Price: ₹{item?.starting_price}
                  </Text>
                  <Text style={styles.detailsText}>Details</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  eventsImageContainer: {
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  imageBackground: {
    width: 290,
    height: 260,
    justifyContent: "flex-end",
  },
  imageStyle: {
    borderRadius: 10,
  },
  topOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "10%",
  },
  bottomOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "60%",
  },
  textContainer: {
    padding: 10,
  },
  eventName: {
    fontFamily: "RobotaSlab-Bold",
    fontSize: 16,
    color: Colors.WHITE,
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  locationText: {
    fontFamily: "RobotoSlab-Light",
    fontSize: 14,
    color: Colors.WHITE,
    marginLeft: 5,
  },
  cont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 14,
    backgroundColor: Colors.SECONDARY,
    color: Colors.WHITE,
    padding: 3,
    borderRadius: 5,
  },
  detailsText: {
    color: Colors.PRIMARY,
  },
});
