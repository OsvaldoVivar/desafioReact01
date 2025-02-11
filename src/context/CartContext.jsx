// import { createContext, useContext, useState } from "react";
// import { pizzaCart } from "../data/pizzas";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(pizzaCart);

//   const increaseCount = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, count: item.count + 1 } : item
//       )
//     );
//   };

//   const decreaseCount = (id) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === id && item.count > 0
//             ? { ...item, count: item.count - 1 }
//             : item
//         )
//         .filter((item) => item.count > 0)
//     );
//   };

//   const calculateTotal = () =>
//     cart.reduce((total, item) => total + item.price * item.count, 0);

//   return (
//     <CartContext.Provider
//       value={{ cart, increaseCount, decreaseCount, calculateTotal }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
// import { createContext, useContext, useState } from "react";
// import { pizzaCart } from "../data/pizzas";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(pizzaCart);

//   // Agregar una pizza al carrito
//   const addToCart = (pizza) => {
//     setCart((prevCart) => {
//       const existingPizza = prevCart.find((item) => item.id === pizza.id);
//       if (existingPizza) {
//         // Si ya está en el carrito, aumentar la cantidad
//         return prevCart.map((item) =>
//           item.id === pizza.id ? { ...item, count: item.count + 1 } : item
//         );
//       } else {
//         // Si no está, agregarla con count: 1
//         return [...prevCart, { ...pizza, count: 1 }];
//       }
//     });
//   };

//   // Aumentar cantidad de una pizza en el carrito
//   const increaseCount = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, count: item.count + 1 } : item
//       )
//     );
//   };

//   // Disminuir cantidad de una pizza en el carrito
//   const decreaseCount = (id) => {
//     setCart(
//       (prevCart) =>
//         prevCart
//           .map((item) =>
//             item.id === id && item.count > 1
//               ? { ...item, count: item.count - 1 }
//               : item
//           )
//           .filter((item) => item.count > 0) // Eliminar si count llega a 0
//     );
//   };

//   // Calcular total del carrito
//   const calculateTotal = () =>
//     cart.reduce((total, item) => total + item.price * item.count, 0);

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, increaseCount, decreaseCount, calculateTotal }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
import { createContext, useContext, useState } from "react";
import { pizzaCart } from "../data/pizzas";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(pizzaCart);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState();
  console.log(token);
  //const token = true;

  //metodo parfa registrar usuario//////////////////////////////////////////////////////////////
  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        alert("Usuario registrado con éxito");
      } else {
        const error = await response.json();
        alert("Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };
  //metodo para logear usuario
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        alert("login excitoso");
      } else {
        const error = await response.json();
        alert("Error al hacer login");
      }
    } catch (error) {
      console.error("Error al hacer login:", error);
    }
  };
  // metodo para extrae el token
  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setEmail(data.email);
      } else {
        const error = await response.json();
        alert("error", error);
      }
    } catch (error) {
      console.error("Error al hacer login:", error);
    }
  };

  /////////////////////
  const handleCheckout = async () => {
    if (!token) {
      alert("Debes iniciar sesión para realizar la compra.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (response.ok) {
        alert("Compra realizada con éxito.");
      } else {
        const errorData = await response.json();
        alert(`Error en la compra: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error al procesar la compra:", error);
      alert("Hubo un problema al procesar la compra. Inténtalo nuevamente.");
    }
  };

  // Agregar una pizza al carrito
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.id === pizza.id);
      if (existingPizza) {
        // Si ya está en el carrito, aumentar la cantidad
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        // Si no está, agregarla con count: 1
        return [...prevCart, { ...pizza, count: 1 }];
      }
    });
  };

  // Aumentar cantidad de una pizza en el carrito
  const increaseCount = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Disminuir cantidad de una pizza en el carrito y eliminarla si count llega a 0
  const decreaseCount = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === id && item.count > 0
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0); // Filtra las pizzas con count <= 0
      return updatedCart;
    });
  };

  // Calcular total del carrito
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseCount,
        decreaseCount,
        calculateTotal,
        token,
        setToken,
        register,
        login,
        userData,
        getProfile,
        email,
        handleCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
