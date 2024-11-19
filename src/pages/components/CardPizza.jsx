import React from "react";
import { formatCurr } from "../../utils/formatCurr";

const CardPizza = ({ img, name, price, ingredients }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {ingredients}
        </p>
        <p className="mb-3 font-bold text-center text-gray-700 dark:text-gray-400">
          Precio:$ {formatCurr(price)}
        </p>
        <div className="justify-between flex">
          <a
            href="#"
            className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ver Mas
          </a>
          <a
            href="#"
            className="  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ver Añadir
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
