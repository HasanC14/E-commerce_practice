import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

const CartPage = ({ cart }) => {
  return (
    <View style={styles.cartContainer}>
      <Text style={styles.cartHeading}>Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      />
      <Button
        title="Checkout"
        onPress={() => alert("Implement checkout logic here")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 16,
  },
  cartHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
});

export default CartPage;
