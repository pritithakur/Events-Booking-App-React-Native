import { View, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.headContainer}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            {/* <Text style={styles.text}>Welcome</Text> */}
          </View>
        </View>
        <View style={styles.search}>
          <TextInput placeholder="Search" style={styles.searchBar} />
          <FontAwesome5
            name="search"
            style={styles.searchBtn}
            size={24}
            color="black"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headContainer: {
    // backgroundColor: Colors.PURPLE,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: Colors.WHITE,
  },
  text: {
    color: Colors.WHITE,
    fontFamily: "PlayfairDisplay-medium",
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 90,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchBar: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 10,
    width: "87%",
  },
  searchBtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 10,
  },
});
