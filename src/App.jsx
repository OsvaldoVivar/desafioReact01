import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/components/Pizza";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import { useCart } from "./context/CartContext";

function App() {
  const { token } = useCart();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/pizza/:id" element={<Pizza />}></Route>
          <Route
            path="/profile"
            element={token ? <Profile></Profile> : <Login></Login>}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
