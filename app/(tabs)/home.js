import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Name</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    padding: 50,
    alignItems: "center",
    backgroundColor: "#141414",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
});
