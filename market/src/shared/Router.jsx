import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../components/pages/Login/Signin";
import Signout from "../components/pages/Login/Signout";
import Signup from "../components/pages/Login/Signup";
import MainPage from "../components/pages/Main/MainPage";
import ProductRegistration from "../components/pages/Product/ProductRegistration";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main */}
        <Route path={"/"} element={<MainPage />} />
        {/* Login */}
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/signout"} element={<Signout />} />
        <Route path={"/signup"} element={<Signup />} />
        {/* Product */}
        <Route
          path={"/product-registration"}
          element={<ProductRegistration />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
