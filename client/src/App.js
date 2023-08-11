import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductList from "./pages/productlist/ProductList";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import CartDetails from "./pages/cart/CartDetails";
import Checkout from "./pages/checkout/Checkout";
import ProductDetailsPage from "./pages/productDetails/ProductDetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productdetails" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
