import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView, StyleSheet, Dimensions, View, Text } from "react-native";

import CartCard from "../components/Cart/CartCard";
import { Dispatch, store, RootState } from "../store"
import { number } from "../utils/formatters"

function Cart({ navigation }: any) {
  const dispatch = useDispatch<Dispatch>();
  const quantityById = useSelector(
    (rootState: RootState) => rootState.cart.quantityById
  );
  const cartProducts = useSelector(store.select.cart.getCartProducts);
  const totalPrice = useSelector(store.select.cart.total);

  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={{ ...styles.container, minHeight: windowHeight }}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5
            style={{ margin: 12 }}
            name="chevron-left"
            color="#424242"
            size={24}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Cart</Text>
        <View style={{ width: 45 }}></View>
      </View>
      <ScrollView>
        {cartProducts.length ? (
          <View style={{ marginTop: 8, paddingBottom: 96 }}>
            {cartProducts.map((item) => (
              <CartCard
                data={item}
                quantity={quantityById[item.id] || 0}
                key={item.id}
                navigation={navigation}
              />
            ))}
            <View
              style={{
                padding: 16,
                paddingVertical: 24,
                minWidth: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: "#424242",
                  fontFamily: "Montserrat-Regular",
                }}
              >
                Total
              </Text>
              <View style={{ flexDirection: "row", alignContent: "center" }}>
                <Text
                  style={{
                    fontSize: 24,
                    color: "#424242",
                    fontFamily: "Montserrat-SemiBold",
                  }}
                >
                  {number(totalPrice)}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                dispatch.cart.RESTORE_CART();
                navigation.navigate('Shop')
              }}
              style={{
                backgroundColor: "#424242",
                borderRadius: 16,
                padding: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontFamily: "Montserrat-SemiBold",
                }}
              >
                PLACE ORDER
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text>
            No Items in cart
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F2F2F2",
  },
  topBar: {
    minWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 24,
    color: "#424242",
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
  },
});

export default Cart;