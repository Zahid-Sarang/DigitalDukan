import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductList from "./pages/productlist/ProductList";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import CartDetails from "./pages/cart/CartDetails";
import Checkout from "./pages/checkout/Checkout";
import ProductDetailsPage from "./pages/productDetails/ProductDetailsPage";
import PageNotFound from "./pages/404";
import Protected from "./utils/Protected";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync } from "./state/cart/cartSlice";
import { selectLoggedInUser } from "./state/auth/authSlice";
import OrderSuccess from "./pages/SuccessPage";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);

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
              <Protected>
                <CartDetails />
              </Protected>
            }
          />
          <Route
            path="/checkout"
            element={
              <Protected>
                <Checkout />
              </Protected>
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
          <Route path="*" element={<PageNotFound />}></Route>
          <Route
            path="/order-success/:id"
            element={
              <Protected>
                <OrderSuccess />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
