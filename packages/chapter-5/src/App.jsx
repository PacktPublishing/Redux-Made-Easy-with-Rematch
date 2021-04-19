import React from "react";
import { Header } from "./components/Header";
import { List } from "./components/ProductList";
import { Cart } from "./components/Cart";

const App = () => (
  <div className="w-full max-w-8xl mx-auto min-h-screen">
    <Header />
    <div className="grid sm:grid-cols-1 md:grid-cols-0/5 grid-rows-1 min-h-screen">
      <List />
      <Cart />
    </div>
  </div>
);

export default App;
