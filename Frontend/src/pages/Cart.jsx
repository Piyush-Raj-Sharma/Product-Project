import { useSelector } from "react-redux";
import CartProductCard from "../components/CartProductCard";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const user = useSelector((state) => state.userReducer.userData);
  const userCart = user.cart;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex justify-center items-center px-4 py-10">
      <div className="relative bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 w-full max-w-4xl p-8 text-white transition-all duration-300 hover:shadow-blue-500/20 hover:-translate-y-1">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <ShoppingCart size={28} className="text-blue-400" />
          <h2 className="text-2xl font-bold text-blue-400 tracking-tight">Your Cart</h2>
        </div>

        {/* Cart Items */}
        {userCart.length === 0 ? (
          <p className="text-center text-slate-400">Your cart is empty 🛒</p>
        ) : (
          <div className="space-y-6">
            {userCart.map((cartItem, index) => (
              <CartProductCard key={index} cartItem={cartItem} index={index} />
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-10 border-t border-slate-700 pt-4 text-center text-xs text-slate-400">
          Total items: {userCart.length}
        </div>
      </div>
    </div>
  );
};

export default Cart;
