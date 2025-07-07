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

  const addCartHandler = (id) => {
    const copyUser = {...user, cart: [...user.cart]};
    const isProductInCart = copyUser.cart.findIndex((c) => c.productId == id); // if product not present in cart -> returns -1
    if(isProductInCart == -1){
      copyUser.cart.push({productId: id, quantity: 1});
    }
    else{
      copyUser.cart[isProductInCart] = {
        productId: id,
        quantity: copyUser.cart[isProductInCart].quantity + 1,
      };
    }
    dispatch(asyncUpdateUser(copyUser, copyUser.id));
    // console.log(user);
  }

  

  return (
    <div
      className="
        bg-slate-800/90 backdrop-blur-sm text-white
        w-full max-w-[230px] rounded-xl p-3
        border border-slate-700 shadow-md
        transition-all duration-300 group 
        hover:scale-[1.03] 
        hover:shadow-[0_8px_20px_rgba(59,130,246,0.25)] 
        hover:border-blue-500/60
        relative overflow-hidden
      "
    >
      {/* Badge */}
      <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide shadow-md z-1">
        New
      </div>

      {/* Product Image */}
      <div 
      onClick={handleCardClick}
      className="relative w-full h-36 overflow-hidden rounded-md mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300 rounded-md" />
      </div>

      {/* Product Info */}
      <h2 className="text-sm font-semibold truncate text-slate-100">
        {product.title}
      </h2>

      <p className="text-xs text-slate-400 mb-2 line-clamp-2">
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

      {/* Price + Add to Cart */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-blue-400 font-semibold text-sm">
          <IndianRupee size={14} />
          {product.price}
        </div>

        <button
        onClick={() => addCartHandler(product.id)}
          className="
            flex items-center gap-1 bg-blue-600 hover:bg-blue-700
            px-3 py-1 rounded-md text-xs font-medium
            transition duration-150 active:scale-95
          "
        >
          <ShoppingCart size={14} />
          Add
        </button>
      </div>
    </div>
  );
};
