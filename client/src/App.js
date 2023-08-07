import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Home from "./pages/home/Home";
import ProductList from "./pages/productlist/ProductList";

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
