import { ShoppingCart, IndianRupee, Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.userData);

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const addCartHandler = (product, e) => {
    e.stopPropagation(); // prevent card click
    const cart = [...user.cart];
    const index = cart.findIndex((item) => item.product?.id === product.id);

    if (index !== -1) {
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
    <div
      onClick={handleCardClick}
      className="
        bg-gray-800/90 text-white border border-gray-700 
        rounded-xl shadow-sm p-3 transition-transform duration-200 
        hover:shadow-lg hover:scale-[1.015] cursor-pointer 
        max-w-[230px] mx-auto flex flex-col justify-between
      "
    >
      {/* Badge */}
      <div className="absolute top-2 right-2 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide z-10">
        New
      </div>

      {/* Product Image */}
      <div className="relative h-36 mb-3 rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <h2 className="text-sm font-semibold truncate text-slate-100 mb-1">
        {product.title}
      </h2>
      <p className="text-xs text-slate-400 mb-3 line-clamp-2">
        {product.description?.slice(0, 60)}...
      </p>

      {/* Rating */}
      <div className="flex items-center text-yellow-400 text-xs mb-2">
        {[...Array(4)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" stroke="currentColor" />
        ))}
        <Star size={14} />
        <span className="ml-1 text-slate-400">(123)</span>
      </div>

      {/* Price + Add */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-blue-400 font-bold text-sm">
          <IndianRupee size={14} />
          {product.price}
        </div>
        <button
          onClick={(e) => addCartHandler(product, e)}
          className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-xs font-medium transition active:scale-95"
        >
          <ShoppingCart size={14} />
          <span className="hidden sm:inline">Add</span>
        </button>
      </div>
    </div>
  );
};
