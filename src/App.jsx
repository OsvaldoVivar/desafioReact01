import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Login from "./pages/Login";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Home />
          {/* <Register /> */}
          {/* <Login /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
