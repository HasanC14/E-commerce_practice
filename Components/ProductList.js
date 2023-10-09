import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SearchProducts from "./SearchProducts";
import ProductListItem from "./ProductListItem";
import Cart from "./Cart";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);
  const [cart, setCart] = useState([]);

  const handleSearch = (query) => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((response) => response.json())
      .then((data) => setResults(data.products))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error:", error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const handleRemoveResult = (product) => {
    setResults(results.filter((item) => item.id !== product.id));
  };
  const handleClearResults = () => {
    setResults([]); // Clears the search results
  };

  return (
    <View style={styles.container}>
      <SearchProducts onSearch={handleSearch} />

      {results.length > 0 && ( // Only show if there are results
        <TouchableOpacity onPress={handleClearResults}>
          <Text style={styles.clearButton}>Clear Results</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.heading}>Search Results</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductListItem product={item} onAddToCart={addToCart} />
        )}
      />

      <Text style={styles.heading}>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductListItem product={item} onAddToCart={addToCart} />
        )}
      />

      <Cart cart={cart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  clearButton: {
    color: "blue",
    fontSize: 16,
    marginVertical: 8,
  },
});

export default ProductList;
