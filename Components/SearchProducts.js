import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const SearchProducts = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search for a product"
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
  },
});

export default SearchProducts;
