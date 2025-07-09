import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Purchase = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-10 text-white">
      <div className="max-w-md w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 shadow-lg text-center">
        <CheckCircle size={48} className="mx-auto mb-4 text-green-400" />
        <h2 className="text-2xl font-bold text-blue-400 mb-2">Purchase Successful!</h2>
        <p className="text-sm text-slate-300 mb-6">
          Thank you for your order. We’ve emailed you the receipt. Your items
          will be shipped shortly.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate("/orders")}
            className="px-6 py-2 rounded-lg border border-slate-600 text-slate-300 hover:bg-gray-800 transition"
          >
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
