import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "./ProductList";
import CartPage from "./Cart";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ title: "Products" }}
        />
        <Stack.Screen
          name="CartPage"
          component={CartPage}
          options={{ title: "Cart" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
