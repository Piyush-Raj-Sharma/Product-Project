import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, IndianRupee, Star } from "lucide-react";
import { asyncDeleteProduct } from "../../store/actions/productActions";
import { asyncUpdateUser } from "./../../store/actions/userActions";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.userData);
  const products = useSelector((state) => state.productReducer.productData);

  const product = products?.find((p) => String(p.id) === id);

  const deleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/");
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-300">
        Product not found.
      </div>
    );
  }

  const addCartHandler = (product) => {
    const cart = [...user.cart];
    const index = cart.findIndex((item) => item.product?.id === product.id);

    if (index !== -1) {
      // Update quantity
      cart[index] = {
        ...cart[index],
        quantity: cart[index].quantity + 1,
      };
    } else {
      cart.push({ product, quantity: 1 });
    }

    const updatedUser = { ...user, cart };
    dispatch(asyncUpdateUser(updatedUser, user.id));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 py-10">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition ml-2"
        >
          <ArrowLeft size={18} />
          Back
        </button>
      </div>

      {/* Product Card */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-slate-800/60 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-slate-700">
        {/* Product Image */}
        <div className="w-full md:w-1/2 h-64 md:h-[400px] overflow-hidden rounded-lg shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-blue-400">{product.title}</h1>
          <p className="text-sm text-slate-400 uppercase tracking-wide">
            Category: {product.category}
          </p>
          <p className="text-slate-300 leading-relaxed">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-400 mt-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            <Star size={16} />
            <span className="ml-2 text-sm text-slate-400">(123 reviews)</span>
          </div>

          {/* Price & Actions */}
          <div className="pt-6 border-t border-slate-700 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-1 text-blue-400 font-bold text-xl">
              <IndianRupee size={18} />
              {product.price}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => addCartHandler(product)}
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-semibold transition duration-150 active:scale-95 shadow-md"
              >
                Add to Cart
              </button>

              {user?.isAdmin && (
                <div className="flex gap-3">
                  <button
                    onClick={() => navigate(`/product/update/${product}`)}
                    className="bg-yellow-600 hover:bg-yellow-700 px-5 py-2 rounded-lg text-sm font-semibold transition duration-150 active:scale-95 shadow-md"
                  >
                    Update Product
                  </button>

                  <button
                    onClick={deleteHandler}
                    className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-sm font-semibold transition duration-150 active:scale-95 shadow-md"
                  >
                    Delete Product
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
