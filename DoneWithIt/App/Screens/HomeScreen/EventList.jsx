import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Colors from "../../Utils/Colors";
import { FontAwesome6, FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Heading from "../../components/Heading";
import { useNavigation } from "@react-navigation/native";

export default function EventList({ event }) {
  const [eventlist, setEvent] = useState();
  const navigation = useNavigation();

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
      <Heading text={"Explore New Events"} />
      <FlatList
        data={eventlist}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.push("Details", {
                event: item,
              })
            }
            style={styles.listCont}
          >
            <Image
              source={{ uri: item?.event_image }}
              style={{
                width: 145,
                height: 140,
                borderRadius: 6,
                marginRight: 20,
              }}
            />
            <View style={styles.itemDetails}>
              <View style={styles.textAndStarsContainer}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "RobotaSlab-Bold",
                    paddingLeft: 5,
                    color:"white"
                  }}
                >
                  {item?.event_name}
                </Text>
                <View style={styles.starContainer}>
                  <AntDesign name="star" size={16} color="orange" />
                  <AntDesign name="star" size={16} color="orange" />
                  <AntDesign name="star" size={16} color="orange" />
                </View>
              </View>
              <View style={styles.Cont}>
                <FontAwesome6
                  name="location-dot"
                  size={18}
                  style={{ paddingRight: 5 }}
                  color="white"
                />
                <Text style={{color:"white"}}>{item.city.city}</Text>
              </View>
              <Text style={{color:"white"}}>25% off on Booking</Text>
              <Text
                style={{
                  color: Colors.PRIMARY,
                  fontFamily: "RobotaSlab-Bold",
                  marginBottom: 2,
                }}
              >
                Price: ₹{item?.starting_price}
              </Text>
              <Text style={styles.book}>Book Now</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  listCont: {
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    padding: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
  },
  itemDetails: {
    flex: 1,
  },
  textAndStarsContainer: {
    flexDirection: "row", // Arrange hotel name and stars in a row
    justifyContent: "space-between", // Align items at each end of the container
    alignItems: "center", // Align items vertically centered
    marginBottom: 5, // Add some space between hotel name/stars and other details
  },
  starContainer: {
    flexDirection: "row", // Ensure stars are laid out in a row
  },
  Cont: {
    flexDirection: "row",
  },
  book: {
    fontSize: 14,
    backgroundColor: Colors.SECONDARY,
    color: Colors.WHITE,
    width: 90,
    padding: 3,
    borderRadius: 5,
  },
});
