import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import { asyncCurrentUser } from "./store/actions/userActions";
import { asyncLoadProducts } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.userData);
  const products = useSelector((state) => state.productReducer.productData);

  useEffect(() => {
    !users && dispatch(asyncCurrentUser());
  }, [users]);

  useEffect(() => {
    products.length == 0 && dispatch(asyncLoadProducts());
  }, [products]);

  return (
    <div className="bg-gray-800 text-white min-h-screen overflow-x-hidden">
      <div className="pt-16">
        {" "}
        <Navbar />
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
