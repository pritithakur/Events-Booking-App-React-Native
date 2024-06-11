import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../Utils/Colors";
import Heading from "../../components/Heading";

export default function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await fetch("http://192.168.2.247:3000/getCategory");
      const data = await response.json();
      console.log("Response of categories", data);
      setCategory(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <View>
      <View>
        <Heading text={"Categories"} isViewAll={true} />
      </View>
      <FlatList
        // numColumns={4}
        horizontal
        data={category}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <View style={styles.catImage}>
              <Image source={{ uri: item.icon }} style={styles.image} />
            </View>
            <Text style={{ fontSize: 10 }}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  catImage: {
    backgroundColor: Colors.GREY,
    borderRadius: 99,
    width: 70, // Adjust container width to accommodate circular border
    height: 70, // Adjust container height to accommodate circular border
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 99,
    resizeMode: "cover", // Ensure image covers entire container
  },
  category: {
    flex: 1,
    alignItems: "center",
    padding:10
  },
});
