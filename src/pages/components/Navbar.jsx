// import React from "react";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaPizzaSlice } from "react-icons/fa";
// import { PiLockKeyFill } from "react-icons/pi";
// import { PiLockKeyOpenFill } from "react-icons/pi";
// import { formatCurr } from "../../utils/formatCurr";
// import { Link } from "react-router-dom";
// import { useCart } from "../../context/CartContext";

// const total = 25000;

// const Navbar = () => {
//   const { calculateTotal, token, setToken } = useCart();
//   return (
//     <nav className="bg-white dark:bg-gray-900 fixed w-full z-10 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <Link to="/cart">
//             <button
//               type="button"
//               className="flex items-center  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               <FaCartShopping />$ {formatCurr(calculateTotal())}
//             </button>
//           </Link>
//         </div>
//         <div
//           className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//           id="navbar-sticky"
//         >
//           <ul className="flex items-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li className="text-white text-lg">Pizzería Mamma Mia!</li>
//             <Link to="/">
//               <li className=" items-center flex text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
//                 <FaPizzaSlice />
//                 Home
//               </li>
//             </Link>
//             {token ? (
//               <>
//                 <Link to="/login">
//                   <li className="items-center flex text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
//                     <PiLockKeyFill />
//                     Login
//                   </li>
//                 </Link>
//                 <Link to="/register">
//                   <li className="items-center flex text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
//                     <PiLockKeyFill />
//                     Register
//                   </li>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link to="/profile">
//                   <li className="items-center flex text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
//                     <PiLockKeyOpenFill />
//                     Profile
//                   </li>
//                 </Link>
//                 <Link to="/logout">
//                   <li className="items-center flex text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
//                     <PiLockKeyFill />
//                     Logout
//                   </li>
//                 </Link>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa";
import { PiLockKeyFill, PiLockKeyOpenFill } from "react-icons/pi";
import { formatCurr } from "../../utils/formatCurr";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { calculateTotal, token, setToken } = useCart();
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-10 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/cart">
            <button
              type="button"
              className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FaCartShopping /> $ {formatCurr(calculateTotal())}
            </button>
          </Link>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex items-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="text-white text-lg">Pizzería Mamma Mia!</li>
            <Link to="/">
              <li className="items-center flex text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
                <FaPizzaSlice /> Home
              </li>
            </Link>
            {token ? (
              <>
                <Link to="/profile">
                  <li className="items-center flex text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
                    <PiLockKeyOpenFill /> Profile
                  </li>
                </Link>
                <button
                  onClick={() => setToken(false)}
                  className="items-center flex text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                >
                  <PiLockKeyFill /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li className="items-center flex text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
                    <PiLockKeyFill /> Login
                  </li>
                </Link>
                <Link to="/register">
                  <li className="items-center flex text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
                    <PiLockKeyFill /> Register
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
