import React from "react";
import { useCart } from "../context/CartContext";

const Profile = ({ email, onLogout }) => {
  const { setToken, token } = useCart();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-3xl p-6 w-full max-w-sm text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Perfil"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800">Perfil</h2>
        <p className="text-lg text-gray-700 mt-2">osvaldo.vivar.v@gmail.com</p>
        <button
          onClick={() => setToken(false)}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
