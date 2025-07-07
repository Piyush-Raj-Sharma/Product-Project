import { Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userActions";

const CartProductCard = ({ cartItem, index }) => {
  const user = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();

  const decreaseQuantityHandler = () => {
    const copyUser = {
      ...user,
      cart: user.cart.map((item) => ({ ...item })),
    };

    if (copyUser.cart[index].quantity > 1) {
      copyUser.cart[index].quantity -= 1;
    } else {
      copyUser.cart.splice(index, 1);
    }

    dispatch(asyncUpdateUser(copyUser, copyUser.id));
  };

  const increaseQuantityHandler = () => {
    const copyUser = {
      ...user,
      cart: user.cart.map((item) => ({ ...item })),
    };

    copyUser.cart[index].quantity += 1;
    dispatch(asyncUpdateUser(copyUser, copyUser.id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-4 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-blue-500/10 transition">
      <div className="flex items-center justify-between gap-4">
        {/* Product Image */}
        <img
          src={cartItem.product.image}
          alt={cartItem.product.title}
          className="w-16 h-16 object-cover rounded-lg border border-white/10"
        />

        {/* Product Info */}
        <div className="flex-1">
          <h3 className="text-base font-semibold text-blue-400 leading-tight line-clamp-1">
            {cartItem.product.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1">{cartItem.product.category}</p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={decreaseQuantityHandler}
            className="w-8 h-8 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-full text-white transition"
          >
            <Minus size={14} />
          </button>
          <span className="text-base text-white">{cartItem.quantity}</span>
          <button
            onClick={increaseQuantityHandler}
            className="w-8 h-8 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-full text-white transition"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
