import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Library = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Library</Text>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141414",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
});
