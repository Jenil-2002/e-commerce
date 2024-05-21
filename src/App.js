import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Globalstate } from "./context/context";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Favorite from "./pages/favorite";
import Details from "./pages/details";
import Cart from "./pages/cart";


function App() {
  return (
    <BrowserRouter>
      <Globalstate>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<Details />} />
        </Routes>
      </div>
      </Globalstate>
    </BrowserRouter>
  );
}

export default App;
