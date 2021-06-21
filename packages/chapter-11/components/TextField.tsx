import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import type { Dispatch } from "@amazhop/logic";

export default function TextField({ value = "" }: { value: string | boolean }) {
  const dispatch = useDispatch<Dispatch>();
  return (
    <View style={styles.searchSection}>
      <View style={styles.searchContainer}>
        <FontAwesome5 name="search" size={18} color="#424242" />
        <TextInput
          value={!value ? "" : value.toString()}
          style={styles.input}
          placeholder="Query any product by their name"
          onChangeText={(text: string) => dispatch.shop.SET_QUERY(text)}
          underlineColorAndroid="transparent"
        />
        {!!value && (
          <TouchableOpacity onPress={() => dispatch.shop.SET_QUERY(false)}>
            <FontAwesome5 name="times" size={18} color="#655DB0" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    height: 48,
    borderRadius: 12,
    borderColor: "#f3f3f3",
    borderWidth: 2,
    margin: 4,
  },
  searchContainer: {
    padding: 4,
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 12,
    minWidth: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchIcon: {
    padding: 10,
    width: 36,
    height: 36,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 12,
    fontSize: 14,
    paddingTop: 8,
    borderRadius: 12,
    color: "#424242",
    paddingBottom: 10,
    alignSelf: "stretch",
    fontFamily: "Inter",
  },
});
