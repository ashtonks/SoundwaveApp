import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import * as AuthSession from 'expo-auth-session';
// import {requestToken, api} from "./spotifyApi";
import axios from "axios";



const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [requestToken, setRequestToken] = useState(false);
  const [token, setToken] = useState('');
  const [api, setApi] = useState(null);
  // const [disableLogin, setDisableLogin] = useState(true);
  const [loginStatus, setLoginStatus] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const router = useRouter();

  const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  };

  const clientPub = process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID;

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: clientPub,
      scopes: ['user-read-email', 'playlist-modify-public'],
      // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: AuthSession.makeRedirectUri({
        scheme: 'myapp',
      }),
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
    }
  }, [response]);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please fill in both fields");
      return;
    }
    
    router.push({ pathname: "/home", params: { username } });
  };

  //GetToken

  // useEffect(()=>{
  //   try{
  //     axios({
  //         method: 'post',
  //         url: "https://accounts.spotify.com/api/token",
  //         headers: 'Content-Type: application/x-www-form-urlencoded',
  //         data: {
  //             grant_type: 'client_credentials',
  //             client_id: `${process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID}`,
  //             client_secret: `${process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
  //         }
  //     }).then((data)=>(setToken(data.data.access_token),console.log(data)));
  //   }catch (e) {throw (e);}
  // }, [requestToken]);


  //Setup API
  //Not workin'

  // useEffect(()=> {
  //   setApi(axios.create({
  //     baseURL: process.env.EXPO_PUBLIC_SPOTIFY_BASE_URL,
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     },
  //   }));
  // },[token])

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Echo</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.card}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => (promptAsync())}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() =>(console.log(token))}>
          <Text style={styles.buttonText}>Get Token</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() =>(console.log(api))}>
          <Text style={styles.buttonText}>Get Api</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={styles.signupText}>Sign Up</Text>
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
    padding: 15,
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
    height: 50,
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
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
  },
});
