import "./App.css";
import Cart from "./components/home/Cart";
import Products from "./components/home/Products";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/home/Signin";
import Registration from "./components/home/Registration";
import { useState } from "react";

function App() {
  const [searchCategory, setsearchCategory] = useState("all");
  return (
    <div className="font-bodyFont bg-gray-100">
      <Routes>
        <Route
          path="/"
          element={
            <Products
              searchCategory={searchCategory}
              setsearchCategory={setsearchCategory}
              className="w-full -mt-32"
            />
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/cart"
          element={
            <Cart
              searchCategory={searchCategory}
              setsearchCategory={setsearchCategory}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
