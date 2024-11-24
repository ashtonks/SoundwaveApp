import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter(); // Use the router for navigation

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Soundwave</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor="#aaa"
        />
      </View>
      <View style={styles.card}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/home")} // Correct navigation
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141414",
  },
  textHeader: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 100,
    marginTop: -100,
  },
  card: {
    width: "60%",
    backgroundColor: "#505050",
    borderRadius: 40,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  textInput: {
    width: "100%",
    height: 50,
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#7700FF",
    borderRadius: 8,
    padding: 20,
    paddingHorizontal: 50,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
