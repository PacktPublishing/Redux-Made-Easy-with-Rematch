import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";

import TextField from "../components/TextField";
import ProductCard from "../components/ProductCard";
import { RootStackParamList } from "../types";

const ShopScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Shop">) => (
  <View style={styles.container}>
    <Text>Shop Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F2F2F2",
  },
  topBar: {
    paddingTop: 8,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 24,
    minWidth: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartCount: {
    fontSize: 10,
    width: "auto",
    color: "white",
    fontFamily: "InterSemiBold",
  },
  badge: {
    top: -10,
    left: -10,
    width: 18,
    height: 18,
    color: "red",
    borderRadius: 20,
    alignItems: "center",
    position: "absolute",
    backgroundColor: "red",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    color: "#424242",
    textAlign: "center",
    fontFamily: "InterSemiBold",
  },
});

export default ShopScreen;
