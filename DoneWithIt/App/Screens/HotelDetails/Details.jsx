import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  FontAwesome6,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Utils/Colors";
import Heading from "../../components/Heading";
import MapView, { Marker } from "react-native-maps";
import Hotels from "../HomeScreen/Events";
import Entypo from "@expo/vector-icons/Entypo";

export default function Details() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const event = params?.event;
  const [isReadmore, setisReadmore] = useState(false);
  const [guest, setGuest] = useState("");
  const handleguest = (text) => {
    setGuest(text);
  };
  const ratingsData = [
    { stars: 5, count: 89 },
    { stars: 4, count: 30 },
    { stars: 3, count: 15 },
    { stars: 2, count: 7 },
    { stars: 1, count: 4 },
  ];
  const totalRatings = ratingsData.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color="black"
            style={{ backgroundColor: "white", borderRadius: 99 }}
          />
        </TouchableOpacity>
        <ScrollView style={styles.detailCont}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: event.event_image }} style={styles.image} />
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.6)"]}
              style={styles.gradientOverlay}
            />
            <View style={styles.item}>
              <Text style={styles.name}>{event.event_name}</Text>
              <View style={styles.banner}>
                <Text style={{ color: Colors.WHITE, fontSize: 12, width: 320 }}>
                  Price: {event.starting_price}
                </Text>
                <View style={styles.location}>
                  <FontAwesome6
                    name="location-dot"
                    size={18}
                    style={{ paddingRight: 5, color: Colors.PRIMARY }}
                    color="black"
                  />
                  <Text style={{ color: Colors.WHITE }}>{event.city.city}</Text>
                </View>
              </View>
              <View style={styles.starContainer}>
                <AntDesign name="star" size={16} color="orange" />
                <AntDesign name="star" size={16} color="orange" />
                <AntDesign name="star" size={16} color="orange" />
              </View>
            </View>
          </View>
          {/* Facilities Section
          <View style={{ backgroundColor: Colors.WHITE }}>
            <Heading text="Facilities" />
            <View style={styles.service}>
              {hotel?.facilities.map((facility, index) => (
                <View key={index} style={styles.facilityItem}>
                  <Image
                    source={{ uri: facility.icon?.url }}
                    style={{ width: 20, height: 20, marginRight: 5 }}
                  />
                  <Text
                    style={{
                      color: Colors.SECONDARY,
                      fontFamily: "RobotaSlab-Bold",
                    }}
                  >
                    {facility.fname}
                  </Text>
                </View>
              ))}
            </View>
          </View> */}
          {/* About Section */}

          <View style={styles.scrollContainer}>
            <View style={styles.aboutContent}>
              <Heading text="About" />

              <Text
                style={{
                  color: Colors.LIGHT_GREY,
                  textAlign: "justify",
                  fontSize: 12,
                  paddingLeft: 20,
                  paddingRight: 20,
                  lineHeight: 21,
                }}
                numberOfLines={isReadmore ? 20 : 4}
              >
                {event.event_description}
              </Text>
              <TouchableOpacity onPress={() => setisReadmore(!isReadmore)}>
                <Text
                  style={{
                    fontSize: 12,
                    paddingLeft: 20,
                    paddingRight: 20,
                    color: Colors.SECONDARY,
                  }}
                >
                  {isReadmore ? "Read Less" : "Read More...."}
                </Text>
              </TouchableOpacity>
            </View>
            {/**/}
            <View style={styles.booking}>
              <View style={styles.ColumnCont}>
                <View style={[styles.column1, styles.separator]}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: Colors.GRAY,
                      paddingLeft: 20,
                      paddingTop: 10,
                    }}
                  >
                    CheckIn & CheckOut
                  </Text>
                  <View style={styles.ColumnCont}>
                    <View style={styles.column1}>
                      <Heading text="May4-May5" />
                    </View>
                    <View style={styles.column2}>
                      <Text
                        style={{
                          fontSize: 12,
                          color: Colors.GRAY,
                          textAlign: "right",
                          padding: 10,
                        }}
                      >
                        1Night
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.column2}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: Colors.GRAY,
                      paddingLeft: 20,
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
                    Rooms & Guest
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <View style={{ flex: 1, alignItems: "center" }}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <MaterialIcons
                          name="meeting-room"
                          size={20}
                          color={Colors.SECONDARY}
                          style={{ marginRight: 5 }}
                        />
                        <Text
                          style={{
                            fontFamily: "RobotaSlab-Bold",
                            fontSize: 15,
                          }}
                        >
                          1
                        </Text>
                      </View>
                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Entypo
                          name="user"
                          size={17}
                          color={Colors.SECONDARY}
                          style={{ marginRight: 5 }}
                        />
                        <Text
                          style={{
                            fontFamily: "RobotaSlab-Bold",
                            fontSize: 15,
                          }}
                        >
                          2
                        </Text>
                      </View>
                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <FontAwesome5
                          name="child"
                          size={17}
                          color={Colors.SECONDARY}
                          style={{ marginRight: 5 }}
                        />
                        <Text
                          style={{
                            fontFamily: "RobotaSlab-Bold",
                            fontSize: 15,
                          }}
                        >
                          0
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* Map Integration*/}

            <View style={{ height: 200, backgroundColor: Colors.WHITE }}>
              <Heading text="Landmark" />
              <MapView
                style={{ flex: 1 }}
                initialRegion={{
                  latitude: 28.48818365,
                  longitude: 77.1111102,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                scrollEnabled={false} // Disable scroll gesture
              >
                <Marker
                  coordinate={{
                    latitude: 28.48818365,
                    longitude: 77.1111102,
                  }}
                  title="Marker Title"
                  description="Marker Description"
                />
              </MapView>
            </View>
            <View style={styles.ratingsContainer}>
              <Heading text="Ratings & Reviews" />
              <View style={styles.ColumnCont}>
                <View style={styles.column3}>
                  <Text
                    style={{
                      color: Colors.WHITE,
                      fontSize: 24,
                      fontWeight: 400,
                      fontFamily: "Mukta-Bold",
                    }}
                  >
                    4.1/5
                  </Text>
                  <Text style={{ color: Colors.WHITE }}>145 Ratings</Text>
                  <Text style={{ color: Colors.WHITE }}>34 Reviews</Text>
                </View>
                <View style={styles.column4}>
                  {ratingsData.map((item, index) => (
                    <View key={index} style={styles.ratingBarContainer}>
                      <Text style={styles.ratingBarText}>
                        {item.stars}
                        <AntDesign name="star" size={13} color="orange" />
                      </Text>

                      <View style={styles.ratingBar}>
                        <View
                          style={[
                            styles.ratingFill,
                            { width: `${(item.count / totalRatings) * 100}%` },
                          ]}
                        />
                      </View>
                      <Text
                        style={{
                          paddingLeft: 10,
                          color: Colors.GRAY,
                          fontSize: 12,
                          textAlign: "justify",
                        }}
                      >
                        {item.count}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
              {/* Adding Review Bars */}
            </View>
            <View style={{ marginBottom: 70 }}>
              <Hotels />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 2,
  },
  detailCont: {
    flex: 1,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 300,
  },
  item: {
    zIndex: 2,
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  name: {
    fontFamily: "RobotaSlab-Bold",
    fontSize: 20,
    color: Colors.WHITE,
  },
  banner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    alignItems: "center",
  },
  location: {
    flexDirection: "row",
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  aboutContent: {
    backgroundColor: Colors.WHITE,
    marginBottom: 10,
  },
  starContainer: {
    display: "flex",
    flexDirection: "row",
  },
  scrollContainer: {
    flex: 1,
  },
  bookButton: {
    position: "absolute",
    bottom: 1,
    left: 20,
    right: 20,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
  },
  bookButtonText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: "bold",
  },
  service: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  facilityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingBottom: 10,

    width: "30%", // Set a fixed width for each column
  },
  ratingsContainer: {
    backgroundColor: Colors.WHITE,
  },
  booking: {
    marginLeft: 6,
    marginRight: 10,
    backgroundColor: Colors.WHITE,
    shadowColor: "yellow",
    marginBottom: 10,
    borderRadius: 20,
    borderColor: "#ccc", // Grayish border color
    borderWidth: 1, // Highlighted border width
    borderStyle: "solid",
  },
  ColumnCont: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column1: {
    flex: 1.7,
  },
  column2: {
    flex: 1,
    alignItems: "left",
  },
  column3: {
    backgroundColor: "#1DB954",
    paddingLeft: 10,
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    flex: 0.7,
    alignItems: "center",
  },
  column4: {
    padding: 10,
    flex: 2,
  },
  ratingBarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingBar: {
    backgroundColor: "#f0f0f0",
    height: 5,
    width: "75%", // Equal width for all bars
    borderRadius: 5,
    overflow: "hidden", // Clip the overflowing part
  },
  ratingFill: {
    height: "100%",
    borderRadius: 5,
    backgroundColor: "#00cc00", // Default color for filled part of the bar
  },
  ratingBarText: {
    paddingRight: 10,
    fontWeight: "500",
  },
  separator: {
    borderRightWidth: 1, // Width of the vertical line
    borderRightColor: Colors.LIGHT_GREY, // Color of the vertical line
  },
});
