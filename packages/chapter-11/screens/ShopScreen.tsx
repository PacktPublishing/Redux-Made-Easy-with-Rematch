import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";

import TextField from "../components/TextField";
import ProductCard from "../components/Product/ProductCard";
import { Dispatch, RootState } from "../store";
import { filterByName } from "../store/models/shop";
import { RootStackParamList } from "../types";

const ShopScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Shop">) => {
  const dispatch = useDispatch<Dispatch>();
  const query = useSelector((rootState: RootState) => rootState.shop.query);
  const products = useSelector((rootState: RootState) =>
    query ? filterByName(rootState, query.toString()) : rootState.shop.products
  );
  const totalCartProducts = useSelector(
    (rootState: RootState) => rootState.cart.addedIds.length
  );
  const quantityById = useSelector(
    (rootState: RootState) => rootState.cart.quantityById
  );

  useEffect(() => {
    dispatch.shop.getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.heading}>Amazhop</Text>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <FontAwesome5 name="shopping-basket" size={24} color="#424242" />
          </TouchableOpacity>
          {totalCartProducts > 0 ? (
            <View style={styles.badge}>
              <Text style={styles.cartCount}>{totalCartProducts}</Text>
            </View>
          ) : null}
        </View>
      </View>
      <TextField value={query} />
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(i) => i.id}
        onEndReached={() => dispatch.shop.getProducts()}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
        renderItem={({ item }) => (
          <View
            style={{
              width: "50%",
            }}
          >
            <ProductCard data={item} quantity={quantityById[item.id] || 0} />
          </View>
        )}
      />
    </View>
  );
};

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
