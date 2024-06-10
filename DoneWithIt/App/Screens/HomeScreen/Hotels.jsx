import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import Heading from "../../components/Heading";
import React, { useEffect, useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

export default function Events() {
  const [event, setEvent] = useState();
  useEffect(() => {
    getEvents();
  }, []);
  const getEvents = async () => {
    try {
      const response = await fetch("http://192.168.2.247:3000/allEvents");
      const data = await response.json();
      setEvent(data);
    } catch (error) {
      console.error("Error fetching Events:", error);
    }
  };
  return (
    <View>
      <Heading text={"Events"} isViewAll={true} />
      <FlatList
        horizontal
        data={event}
        renderItem={({ item, index }) => (
          <View style={styles.hotelsImage}>
            <Image
              source={{ uri: item?.event_image }}
              style={{ width: "100%", height: "60%" }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ fontFamily: "RobotaSlab-Bold", fontSize: 14 }}>
                {item?.event_name}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome6 name="location-dot" size={18} color="black" />
                <Text style={{ fontFamily: "RobotaSlab-Light", fontSize: 14 }}>
                  {" "}
                  {item.city.city}
                </Text>
              </View>
              <View style={styles.cont}>
                <Text style={styles.price}>Price: ₹{item?.starting_price}</Text>
                <Text style={{ color: Colors.PRIMARY }}>Details</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  hotelsImage: {
    backgroundColor: Colors.WHITE,
    marginLeft: 12,
    borderRadius: 10,
    width: 200,
    height: 260,
    overflow: "hidden",
  },
  cont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    alignItems: "center",
  },
  price: {
    fontSize: 14,
    backgroundColor: Colors.SECONDARY,
    color: Colors.WHITE,
    width: 90,
    padding: 3,
    borderRadius: 5,
  },
});
