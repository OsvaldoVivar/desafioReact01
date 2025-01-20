import React from "react";

const Header = () => {
  return (
    <div
      className="mt-8 relative bg-cover bg-center h-72"
      style={{ backgroundImage: "url(public/Header.jpg)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">¡Pizzería Mamma Mia!</h1>
        <p className="text-lg md:text-xl mt-2">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
        <hr className="w-32 mt-6 border-t-2 border-gray-300" />
      </div>
    </div>
  );
};

export default Header;
