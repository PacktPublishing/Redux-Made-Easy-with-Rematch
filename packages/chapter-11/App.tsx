import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { lazyStore } from "@amazhop/logic";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

export const store = lazyStore();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation />
        <StatusBar />
      </Provider>
    </SafeAreaProvider>
  );
}
