import React from "react";
import Header from "./components/Header";
import CardPizza from "./components/CardPizza";
import { pizzas } from "../data/pizzas.js";

const Home = () => {
  console.log(pizzas);
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 gap-6 mt-10 mb-16 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Home;
