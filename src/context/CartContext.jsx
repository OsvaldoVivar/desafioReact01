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
  const [token, setToken] = useState(false);
  //const token = true;

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
