/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import ShopScreen from "../screens/ShopScreen";
import CartScreen from "../screens/CartScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Shop"
      backBehavior="order"
    >
      <BottomTab.Screen
        name="Shop"
        component={ShopScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="cash" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="cart" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon({
  name,
  color,
}: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return (
    <Ionicons
      size={30}
      style={{ marginBottom: -3 }}
      color={color}
      name={name}
    />
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function ShopScreenNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen name="Shop" component={ShopScreen} />
      <TabOneStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function CartScreenNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen name="Cart" component={CartScreen} />
      <TabOneStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
      />
    </TabTwoStack.Navigator>
  );
}
