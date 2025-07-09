import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
  
const Orders = lazy(() => import("../pages/Orders"))
const Purchase = lazy(() => import("../components/Purchase"))
const Products = lazy(() => import("../pages/Products"))
const Login = lazy(() => import("../pages/Login"))
const Register = lazy(() => import("../pages/Register"))
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"))
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"))
const UpdateProduct = lazy(() => import("../components/UpdateProduct"))
const UserProfile = lazy(() => import("../pages/user/UserProfile"))
const EditProfile = lazy(() => import("../pages/user/EditProfile"))
const PageNotFound = lazy(() => import("../pages/PageNotFound"))
const AuthWrapper = lazy(() => import("./AuthWrapper"))
const GuestWrapper = lazy(() => import("./GuestWrapper"))
const Cart = lazy(() => import("../pages/Cart"))


const MainRoutes = () => {

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Products />} />

      {/* Protected Routes - so that users can't access them after logging in  */}
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
      <Route
        path="/orders"
        element={
          <AuthWrapper>
            <Orders />
          </AuthWrapper>
        }
      />
      <Route
        path="/order-successfull"
        element={
          <AuthWrapper>
            <Purchase />
          </AuthWrapper>
        }
      />

      {/* Fallback for all other routes */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
