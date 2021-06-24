import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";

import { RootStackParamList } from "../types";

const ProductDetailScreen = ({
  navigation,
  route: {
    params: { item },
  },
}: StackScreenProps<RootStackParamList, "ProductDetail">) => (
  <View style={styles.container}>
    <Text>Product Detail Screen</Text>
  </View>
);

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "flex-start",
    backgroundColor: "#F2F2F2",
    justifyContent: "flex-start",
  },
  text: {
    padding: 25,
    fontSize: 34,
  },
  about: {
    fontFamily: "InterSemiBold",
    fontSize: 18,
    marginTop: 32,
  },
  desc: {
    fontFamily: "Inter",
    marginTop: 8,
    fontSize: 14,
  },
  title: {
    fontFamily: "InterSemiBold",
    fontSize: 40,
  },
  priceWrapper: {
    flexDirection: "row",
    paddingLeft: 2,
    paddingTop: 4,
  },
  price: {
    fontSize: 20,
    fontFamily: "InterSemiBold",
  },
  addToCart: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginTop: 20,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    fontFamily: "InterSemiBold",
  },
  addToCartText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  weight: {
    fontSize: 16,
    fontFamily: "Inter",
    paddingTop: 4,
  },
  box: {
    width: "50%",
    resizeMode: "center",
    aspectRatio: 1,
    display: "flex",
    alignSelf: "center",
    marginTop: 24,
    marginBottom: 48,
    maxWidth: "100%",
  },
});
