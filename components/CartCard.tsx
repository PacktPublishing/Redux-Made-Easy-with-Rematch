import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Image, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { number } from "../utils/formatters";
import type { ProductType, RootStackParamList } from "../types";

type CartCardType = {
  data: ProductType;
  quantity: number;
};
export default function CartCard({ data, quantity }: CartCardType) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { id, productName, image_url, price } = data;

  return (
    <View style={styles.cartCard}>
      <Text>Cart Card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    padding: 8,
    borderRadius: 24,
  },
  photo: {
    height: 40,
    width: 40,
  },
  name: {
    fontSize: 16,
    paddingBottom: 4,
    maxWidth: 160,
    fontFamily: "InterSemiBold",
  },
  count: {
    fontSize: 12,
    paddingLeft: 8,
    paddingRight: 8,
    fontFamily: "InterSemiBold",
  },
  weight: {
    paddingLeft: 16,
    color: "#7a7a7a",
    fontFamily: "Inter",
  },
  priceBox: {
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  price: {
    minWidth: 24,
    paddingRight: 12,
    fontFamily: "InterSemiBold",
  },
  cartCard: {
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 16,
    borderRadius: 16,
    minWidth: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  countIconBox: {
    paddingBottom: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  countIcon: {
    backgroundColor: "#424242",
    borderRadius: 4,
    paddingLeft: 5,
    paddingRight: 5,
    padding: 3,
  },
});
