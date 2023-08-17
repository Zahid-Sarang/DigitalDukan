import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductList from "./pages/productlist/ProductList";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import CartDetails from "./pages/cart/CartDetails";
import Checkout from "./pages/checkout/Checkout";
import ProductDetailsPage from "./pages/productDetails/ProductDetailsPage";
import Protected from "./components/authentication/Protected";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync } from "./state/cart/cartSlice";
import { selectLoggedInUser } from "./state/auth/authSlice";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  console.log(user)

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch,user]);

  return (
    <div className="font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/cart"
            element={
              // <Protected>
              <CartDetails />
              // {/* </Protected> */}
            }
          />
          <Route
            path="/checkout"
            element={
              // <Protected>
              <Checkout />
              // {/* </Protected> */}
            }
          />
          <Route
            path="/productdetails/:id"
            element={
              <Protected>
                <ProductDetailsPage />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
