import React from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";


const Products = () => {
  const products = useSelector((state) => state.productReducer.productData);
  console.log("Products:", products);

  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 py-8">
      {products && products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        
        <div className="flex items-center justify-center h-[60vh]">
          <h1 className="text-2xl text-slate-400">No products found</h1>
        </div>
      )}
    </div>
  );
};

export default Products;
