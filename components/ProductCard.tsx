import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { number } from "../utils/formatters";
import type { ProductType } from "../types";

type ProductCardType = {
  data: ProductType;
  quantity: number;
};

const ProductCard = ({ data, quantity }: ProductCardType) => {
  const { id, productName, price, stock, image_url, favorite } = data;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Product card</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 12,
    paddingBottom: 2,
    borderRadius: 12,
    alignSelf: "stretch",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  content: {
    minWidth: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actions: {
    padding: 5,
    marginTop: 10,
    borderRadius: 6,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    justifyContent: "flex-end",
  },
  count: {
    fontSize: 16,
    minWidth: 16,
    paddingRight: 4,
    color: "#424242",
    fontFamily: "InterSemiBold",
  },
  photo: {
    width: "100%",
    resizeMode: "center",
    marginBottom: 10,
    borderRadius: 12,
    height: undefined,
    aspectRatio: 1,
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 22,
    color: "#424242",
    fontFamily: "InterSemiBold",
  },
  title: {
    fontSize: 12,
    color: "#424242",
    fontFamily: "InterSemiBold",
  },
  stock: {
    fontSize: 10,
    color: "#424242",
    fontFamily: "Inter",
  },
  nostock: {
    fontSize: 10,
    color: "red",
    fontFamily: "Inter",
  },
  countIcon: {
    backgroundColor: "black",
    borderRadius: 4,
    paddingLeft: 6,
    paddingRight: 6,
    padding: 4,
  },
  disabledCountIcon: {
    backgroundColor: "grey",
    borderRadius: 4,
    paddingLeft: 6,
    paddingRight: 6,
    padding: 4,
  },
});
