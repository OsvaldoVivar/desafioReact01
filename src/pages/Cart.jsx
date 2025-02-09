import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseCount, decreaseCount, calculateTotal } = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">
        Carrito de Compras
      </h1>

      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 border-b border-gray-200 rounded-md shadow-sm hover:bg-gray-100 transition-colors duration-300"
          >
            <div className="flex items-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 rounded-md mr-4"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-medium">{item.name}</h2>
                <p className="text-gray-500">Precio unitario: ${item.price}</p>
                <p className="text-gray-500">Cantidad: {item.count}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => decreaseCount(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                -
              </button>
              <span className="text-gray-700 font-medium">{item.count}</span>
              <button
                onClick={() => increaseCount(item.id)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <p className="text-lg font-bold">Total: $ {calculateTotal()}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;
