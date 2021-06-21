import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";

import { Dispatch } from "../../store";
import { number } from "../../utils/formatters";
import type { ProductType } from "../../types";

type ProductCardType = {
  data: ProductType
  navigation: any
  quantity: number
}

export default function ProductCard({ data, navigation, quantity }: ProductCardType) {
  const { id, productName, price, stock, image_url, favorite } = data;
  const dispatch = useDispatch<Dispatch>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ItemDetail", { item: data });
        }}
      >
        <Image style={styles.photo} source={{ uri: image_url }} />
      </TouchableOpacity>
      <View style={styles.content}>
        <View>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{number(price)}</Text>
          </View>
          <Text style={styles.title}>{productName}</Text>
          <Text style={styles.stock}>{stock > 0 ? 'In stock' : 'No stock'}</Text>
        </View>
        <View style={styles.actions}>
          <View style={{ padding: 4 }}>
            <Text style={styles.count}>
              {quantity}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              disabled={stock < 0}
              style={styles.countIcon}
              onPress={() => dispatch.cart.ADD_TO_CART({ id })}
            >
              <FontAwesome5 name="plus" size={12} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.countIcon, marginTop: 4 }}
              onPress={() => dispatch.cart.REMOVE_FROM_CART({ id })}
            >
              <FontAwesome5 name="minus" size={12} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => dispatch.shop.setToFavorite({ id })}>
            <FontAwesome5 name="heart" size={24} color="red" solid={favorite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 16,
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
    fontFamily: "Montserrat-SemiBold",
  },
  photo: {
    width: "100%",
    resizeMode: "center",
    marginBottom: 10,
    borderRadius: 12,
    height: undefined,
    aspectRatio: 1
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 22,
    color: "#424242",
    fontFamily: "Montserrat-SemiBold",
  },
  title: {
    fontSize: 12,
    color: "#424242",
    fontFamily: "Montserrat-SemiBold",
  },
  stock: {
    fontSize: 10,
    color: "#424242",
    fontFamily: "Montserrat-Regular",
  },
  countIcon: {
    backgroundColor: "black",
    borderRadius: 4,
    paddingLeft: 6,
    paddingRight: 6,
    padding: 4,
  },
});
