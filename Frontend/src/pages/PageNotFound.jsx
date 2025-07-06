import React from "react";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex justify-center items-center px-6 py-12">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 max-w-lg w-full p-12 text-center text-white select-none animate-fadeIn">
        <h1 className="text-7xl font-extrabold mb-6 tracking-tight text-blue-400 animate-pulse">
          404
        </h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-slate-300 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => window.location.href = "/"}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition transform hover:scale-105 active:scale-95 shadow-lg"
        >
          Go to Home
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(20px);}
          to {opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease forwards;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default PageNotFound;
