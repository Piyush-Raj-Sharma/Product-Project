import { useSelector } from "react-redux";
import CartProductCard from "../components/CartProductCard";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.userReducer.userData);
  const userCart = user.cart || [];
  const navigate = useNavigate();

  const totalItems = userCart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = userCart
    .reduce((acc, item) => acc + item.quantity * item.product.price, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-12 text-white">
      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg p-6 sm:p-10">

        {/* 🛒 Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-700 pb-5 mb-6 gap-4">
          <div className="flex items-center gap-3">
            <ShoppingCart size={28} className="text-blue-400" />
            <h2 className="text-2xl font-bold text-blue-400">Your Shopping Cart</h2>
          </div>
          <span className="text-sm text-slate-400">
            {totalItems} item{totalItems !== 1 ? "s" : ""}
          </span>
        </div>

        {/* 🧺 Cart Content */}
        {userCart.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <ShoppingCart className="mx-auto mb-4" size={40} />
            <p className="text-lg">Your cart is currently empty.</p>
            <p className="text-sm text-slate-500 mt-2">
              Start adding your favorite items now!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product List */}
            <div className="md:col-span-2 space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {userCart.map((cartItem, index) => (
                <CartProductCard key={index} cartItem={cartItem} index={index} />
              ))}
            </div>

            {/* 💳 Summary Section */}
            <div className="bg-gray-800 rounded-xl p-6 border border-slate-700 h-fit sticky top-24 shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Order Summary</h3>
              <div className="flex justify-between mb-2 text-sm">
                <span>Items:</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Subtotal:</span>
                <span>₹ {totalPrice}</span>
              </div>
              <div className="border-t border-slate-600 my-3" />
              <div className="flex justify-between font-bold text-blue-400 text-sm">
                <span>Total:</span>
                <span>₹ {totalPrice}</span>
              </div>
              <button 
                onClick={() => navigate("/order-successfull")}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md font-medium transition-all duration-200"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
