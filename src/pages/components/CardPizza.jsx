import React from "react";
import { formatCurr } from "../../utils/formatCurr.js";
import { useCart } from "../../context/CartContext"; // Importa el contexto del carrito
import { useNavigate } from "react-router-dom";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart(); // Obtiene la función para agregar al carrito
  const navigate = useNavigate();
  const verDetalle = () => {
    navigate(`/pizza/${pizza.id}`);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-full" src={pizza.img} alt={pizza.name} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {pizza.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {pizza.ingredients.join(", ")}
        </p>
        <p className="mb-3 font-bold text-center text-gray-700 dark:text-gray-400">
          Precio: {formatCurr(pizza.price)}
        </p>
        <div className="flex justify-between">
          <button
            className="px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => verDetalle()}
          >
            Ver Detalle
          </button>
          <button
            className="px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={() => addToCart(pizza)} // Agrega la pizza al carrito
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
