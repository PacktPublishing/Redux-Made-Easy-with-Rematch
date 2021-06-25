import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  FlatList,
  Pressable,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Dispatch, RootState, ProductType } from "@amazhop/logic";
import { store } from "../App";
import CartCard from "../components/CartCard";
import { number } from "../utils/formatters";
import { RootStackParamList } from "../types";

type CartType = {
  navigation: StackNavigationProp<RootStackParamList, "Cart">;
};

const CartScreen = ({ navigation }: CartType) => {
  const windowHeight = Dimensions.get("window").height;
  const dispatch = useDispatch<Dispatch>();
  const quantityById = useSelector(
    (rootState: RootState) => rootState.cart.quantityById
  );
  const cartProducts = useSelector(store.select.cart.getCartProducts);
  const totalPrice = useSelector(store.select.cart.total);

  return (
    <View style={{ ...styles.container, minHeight: windowHeight }}>
      {cartProducts.length ? (
        <View style={{ maxHeight: windowHeight - 200 }}>
          <FlatList
            data={cartProducts as ProductType[]}
            keyExtractor={(i) => i.id}
            renderItem={({ item }) => (
              <View>
                <CartCard
                  data={item}
                  quantity={quantityById[item.id] || 0}
                  key={item.id}
                />
              </View>
            )}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total</Text>
            <View style={styles.flex}>
              <Text style={styles.totalPriceText}>{number(totalPrice)}</Text>
            </View>
          </View>
          <Pressable
            onPress={() => {
              dispatch.cart.RESTORE_CART();
              navigation.navigate("Shop");
            }}
            style={styles.placeOrderTouchable}
          >
            <Text style={styles.placeOrderText}>PLACE ORDER</Text>
          </Pressable>
        </View>
      ) : (
        <Text style={styles.emptyCartText}>Empty cart</Text>
      )}
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
    backgroundColor: "black",
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
