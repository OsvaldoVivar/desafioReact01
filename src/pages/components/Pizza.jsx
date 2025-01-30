import React, { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener la pizza:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-center text-gray-600 text-xl">Cargando pizza...</p>
      </div>
    );
  }

  if (!pizza) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-center text-red-500 text-xl">
          No se encontró la pizza.
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-3xl p-6 w-full max-w-md md:max-w-3xl lg:max-w-5xl flex flex-col md:flex-row items-center md:items-start">
        {/* Imagen de la Pizza */}
        <img
          src={pizza.img || "https://via.placeholder.com/400"}
          alt={pizza.name}
          className="w-full md:w-1/2 h-48 md:h-72 lg:h-96 object-cover rounded-2xl"
        />

        {/* Información de la Pizza */}
        <div className="p-4 flex flex-col justify-center md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {pizza.name}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-2">
            <span className="font-semibold">Precio:</span> ${pizza.price}
          </p>
          <p className="text-md md:text-lg text-gray-600 mt-1">
            <span className="font-semibold">Ingredientes:</span>{" "}
            {pizza.ingredients}
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-500 mt-2">
            {pizza.description}
          </p>

          {/* Botón de Ordenar */}
          <button className="mt-6 w-full md:w-auto bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold">
            Ordenar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
