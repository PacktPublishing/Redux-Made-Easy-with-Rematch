import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Image, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";

import { Dispatch } from "../../store";
import { number } from "../../utils/formatters";
import type { ProductType } from "../../types";

type CartCardType = {
 navigation: any;
 data: ProductType;
 quantity: number;
}
export default function CartCard({ navigation, data, quantity }: CartCardType) {
  const dispatch = useDispatch<Dispatch>();
  const { id, productName, image_url, price } = data;

  return (
    <View style={styles.cartCard}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={{ ...styles.photoContainer }}
          onPress={() => navigation.push("Detail", { item: data })}
        >
          <Image style={styles.photo} resizeMode="contain" source={{ uri: image_url }} />
        </TouchableOpacity>
        <View style={{ padding: 8, paddingLeft: 16 }}>
          <Text style={styles.name}>{productName}</Text>
          <View style={styles.countIconBox}>
            <TouchableOpacity
              style={styles.countIcon}
              onPress={() => dispatch.cart.ADD_TO_CART({ id })}
            >
              <FontAwesome5 name="plus" size={12} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.count}>{quantity}</Text>
            <TouchableOpacity
              style={styles.countIcon}
              onPress={() => dispatch.cart.REMOVE_FROM_CART({ id })}
            >
              <FontAwesome5 name="minus" size={12} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.priceBox}>
        <Text style={styles.price}>{number(price * quantity)}</Text>
      </View>
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
    fontFamily: "Montserrat-SemiBold",
  },
  count: {
    fontSize: 12,
    paddingLeft: 8,
    paddingRight: 8,
    fontFamily: "Montserrat-SemiBold",
  },
  weight: {
    paddingLeft: 16,
    color: "#7a7a7a",
    fontFamily: "Montserrat-Regular",
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
    fontFamily: "Montserrat-SemiBold",
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