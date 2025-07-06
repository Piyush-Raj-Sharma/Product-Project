import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, IndianRupee, Star } from "lucide-react";
import UpdateProduct from "../../components/UpdateProduct";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const products = useSelector((state) => state.productReducer.productData);

  const product = products?.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-300">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 ml-15 flex items-center gap-2 text-blue-400 hover:text-blue-500 transition"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-slate-800/60 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-slate-700">
        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-[400px] overflow-hidden rounded-lg shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Info */}
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

          {/* Price & CTA */}
          <div className="flex justify-between items-center pt-4 border-t border-slate-700 mt-4">
            <div className="flex items-center gap-1 text-blue-400 font-bold text-xl">
              <IndianRupee size={18} />
              {product.price}
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-semibold transition duration-150 active:scale-95 shadow-md">
              Add to Cart
            </button>
          </div>
          <button
            onClick={() => navigate(`/product/update/${product.id}`)}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-sm font-semibold transition duration-150 active:scale-95 shadow-md"
          >
            {" "}
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
