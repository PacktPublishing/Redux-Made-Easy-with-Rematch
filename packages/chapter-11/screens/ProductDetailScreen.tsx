import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";

import { number } from "../utils/formatters"
import { Dispatch } from "../store"
import { RootStackParamList } from "../types";

const ProductDetailScreen = ({
  navigation,
  route: {
    params: { item },
  },
}: StackScreenProps<RootStackParamList, 'ProductDetail'>) => {
  const dispatch = useDispatch<Dispatch>();
  const { id, productName, price, image_url, stock, productDescription } = item;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5
          style={{ marginTop: 30 }}
          name="chevron-left"
          color="#424242"
          size={24}
        />
      </TouchableOpacity>
      <Image style={styles.box} source={{ uri: image_url }} resizeMode="contain" />
      <View style={{ padding: 8 }}>
        <Text style={styles.title}>{productName}</Text>
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>{number(price)}</Text>
        </View>

        <Text style={styles.weight}>{stock > 0 ? 'In stock': 'No stock'}</Text>
        <Text style={styles.about}>About this product</Text>
        <Text style={styles.desc}>
          {productDescription}
        </Text>
        <Pressable style={styles.addToCart} onPress={() => {
           dispatch.cart.ADD_TO_CART({ id });
           navigation.navigate('Shop')
        }}>
          <Text style={styles.addToCartText}>
            Add to cart
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

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
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    marginTop: 32,
  },
  desc: {
    fontFamily: "Montserrat-Regular",
    marginTop: 8,
    fontSize: 14,
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 40,
  },
  priceWrapper: {
    flexDirection: "row",
    paddingLeft: 2,
    paddingTop: 4,
  },
  price: {
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
  },
  addToCart: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 20,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    fontFamily: "Montserrat-SemiBold",
  },
  addToCartText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  weight: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
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
