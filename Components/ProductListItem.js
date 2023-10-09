import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";

const ProductListItem = ({ product, onAddToCart }) => {
  return (
    <TouchableOpacity style={styles.productItem}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <View style={styles.productInfo}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.rating}>Rating: {product.rating}</Text>
        <Button title="Add to Cart" onPress={() => onAddToCart(product)} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: "green",
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
});

export default ProductListItem;
