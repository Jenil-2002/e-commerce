import Home from "./pages/home";
import Favorite from "./pages/favorite";
import Details from "./pages/details";
import Cart from "./pages/cart";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Layout from "./components/Layout";
import Authentication from "./Authentication";

function App() {
  return (
    //  <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          // <Authentication>
            <Layout />
          // </Authentication>
        }
      >
        <Route index element={<Home />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Details />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
