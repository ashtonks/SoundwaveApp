import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]); // Placeholder for future results
  const animatedHeight = useRef(new Animated.Value(100)).current;

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  const handleSearchSubmit = () => {
    // Placeholder logic: Simulate fetching data
    if (searchQuery.trim()) {
      setResults(["Song 1", "Song 2", "Song 3"]); // Placeholder results
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    // Animate the height of the results box
    Animated.timing(animatedHeight, {
      toValue: results.length > 0 ? 300 : 100, // Expand or shrink
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [results]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for songs..."
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
        <TouchableOpacity
          onPress={handleSearchSubmit}
          style={styles.searchIcon}
        >
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[styles.resultsContainer, { height: animatedHeight }]}
      >
        <ScrollView>
          {results.length > 0 ? (
            results.map((result, index) => (
              <Text key={index} style={styles.resultText}>
                {result}
              </Text>
            ))
          ) : (
            <Text style={styles.resultText}>
              Search results will appear here...
            </Text>
          )}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: "center",
    backgroundColor: "#141414",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#505050",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 18,
    paddingHorizontal: 10,
  },
  searchIcon: {
    padding: 5,
  },
  resultsContainer: {
    width: "100%",
    backgroundColor: "#505050",
    borderRadius: 10,
    padding: 15,
    overflow: "hidden",
  },
  resultText: {
    color: "#aaa",
    fontSize: 16,
    marginVertical: 5,
  },
});
