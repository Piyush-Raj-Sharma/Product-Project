import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products.jsx";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/admin/ProductDetails";
import UpdateProduct from "../components/UpdateProduct";
import UserProfile from "../pages/user/UserProfile";
import EditProfile from "../pages/user/EditProfile";
import PageNotFound from "../pages/PageNotFound";
import AuthWrapper from "./AuthWrapper";
import GuestWrapper from './GuestWrapper';
import Cart from "../pages/Cart";

const MainRoutes = () => {

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Products />} />

      {/* Protected Routes - so that users can access them after logging in  */}
      <Route
        path="/login"
        element={
          <GuestWrapper>
            <Login />
          </GuestWrapper>
        }
      />
      <Route
        path="/register"
        element={
          <GuestWrapper>
            <Register />
          </GuestWrapper>
        }
      />

      {/* Protected Routes - so that user cannot access these routes without login*/}
      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="/product/:id"
        element={
          <AuthWrapper>
            <ProductDetails />
          </AuthWrapper>
        }
      />
      <Route
        path="/product/update/:id"
        element={
          <AuthWrapper>
            <UpdateProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        }
      />
      <Route
        path="/user-profile"
        element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper>
        }
      />
      <Route
        path="/edit-profile"
        element={
          <AuthWrapper>
            <EditProfile />
          </AuthWrapper>
        }
      />

      {/* Fallback for all other routes */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
