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
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cityCont}>
            <View style={styles.cityImageContainer}>
              <Image
                source={{ uri: item?.image }}
                style={styles.cityImage}
                resizeMode="cover"
              />
              <View style={styles.overlay} />
              <Text style={styles.cityName}>{item.city}</Text>
            </View>
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
  cityImageContainer: {
    width: 100,
    height: 80,
    borderRadius: 9,
    overflow: "hidden",
    position: 'relative',
  },
  cityImage: {
    flex: 1,
    borderRadius: 9,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity as needed
    borderRadius: 9,
  },
  cityName: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
