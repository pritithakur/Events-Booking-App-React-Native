import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading";

export default function City() {
  const [city, setCity] = useState([]);

  useEffect(() => {
    getCity();
  }, []);

  const getCity = async () => {
    try {
      const response = await fetch("http://192.168.2.247:3000/getCity");
      const data = await response.json();
      console.log("Response of city", data);
      setCity(data);
    } catch (error) {
      console.error("Error fetching city:", error);
    }
  };

  return (
    <View>
      <Heading text={"Popular Destinations"} />
      <FlatList
        horizontal
        data={city}
        keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
        renderItem={({ item }) => (
          <View style={styles.cityCont}>
            <View style={styles.cityImage}>
              <Image source={{ uri: item?.image }} style={styles.image} />
            </View>
            {/* <Text style={styles.cityName}>{item.city}</Text> */}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cityCont: {
    margin: 5,
  },
  cityImage: {
    borderRadius: 9,
    overflow: "hidden", // Ensure the image is contained within the border radius
  },
  image: {
    width: 100,
    height: 80,
  },
  cityName: {
    textAlign: "center",
    marginTop: 5,
  },
});
