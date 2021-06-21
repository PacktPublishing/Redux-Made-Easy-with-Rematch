/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import ShopScreen from "../screens/ShopScreen";
import CartScreen from "../screens/CartScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Shop">
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
      <TabOneStack.Screen
        name="Shop"
        component={ShopScreen}
        options={{ headerTitle: "Shop" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function CartScreenNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerTitle: "Cart" }}
      />
    </TabTwoStack.Navigator>
  );
}
