import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView, StyleSheet, Dimensions, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import CartCard from "../components/CartCard";
import { number } from "../utils/formatters";
import { RootStackParamList } from "../types";

type CartType = {
  navigation: StackNavigationProp<RootStackParamList, "Cart">;
};

const CartScreen = ({ navigation }: CartType) => {
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={{ ...styles.container, minHeight: windowHeight }}>
      <Text>Cart Screen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F2F2F2",
  },
  topBar: {
    minWidth: "100%",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 24,
    color: "#424242",
    textAlign: "center",
    fontFamily: "InterSemiBold",
  },
  totalContainer: {
    padding: 16,
    paddingVertical: 24,
    minWidth: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 24,
    color: "#424242",
    fontFamily: "Inter",
  },
  flex: {
    flexDirection: "row",
    alignContent: "center",
  },
  totalPriceText: {
    fontSize: 24,
    color: "#424242",
    fontFamily: "InterSemiBold",
  },
  placeOrderTouchable: {
    backgroundColor: "#424242",
    borderRadius: 16,
    padding: 16,
  },
  placeOrderText: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "InterSemiBold",
  },
  emptyCartText: {
    fontSize: 18,
    color: "#424242",
    textAlign: "center",
    fontFamily: "InterSemiBold",
  },
});
