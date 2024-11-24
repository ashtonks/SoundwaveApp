import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { useRouter } from "expo-router";
  
  const Register = () => {
    const router = useRouter();
  
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Register</Text>
        <View style={styles.card}>
            <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#aaa"
            />
        </View>
        <View style={styles.card}>
            <TextInput
            style={styles.textInput}
            placeholder="Username"
            placeholderTextColor="#aaa"
            secureTextEntry={true}
            />
        </View>
        <View style={styles.card}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
        />
        </View>
        <View style={styles.card}>
            <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            placeholderTextColor="#aaa"
            secureTextEntry={true}
            />
        </View>
        <View>
            <TouchableOpacity
            style={styles.button}
            >
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>
      
    );
  };
  
  export default Register;
  
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
        marginBottom: 40,
        marginTop: -40,
    },
    card: {
        width: "70%",
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
        margin: 10,
    },
    textInput: {
        width: "100%",
        height: 40, 
        color: "#fff",
        fontSize: 23, 
        textAlign: "left",
        paddingLeft: 10,
    },
    button: {
        backgroundColor: "#7700FF",
        borderRadius: 30,
        padding: 20,
        paddingHorizontal: 40,
        alignItems: "center",
        marginVertical: 17,
        paddingVertical: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    footerText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    footer: {
        position: "absolute",
        bottom: 20,
        left: 20,
        alignItems: "flex-start",
    },
    signupText: {
        color: "#7700FF",
        fontSize: 20,
        marginTop: 10,
    }
});
  