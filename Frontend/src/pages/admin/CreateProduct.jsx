import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/productActions";
import {
  PackagePlus,
  Tag,
  DollarSign,
  Type,
  ImagePlus,
  FileText,
} from "lucide-react";

const CreateProduct = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createProductHandler = (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProduct(product));
    reset();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <form
        onSubmit={handleSubmit(createProductHandler)}
        className="w-full max-w-xl bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-3xl shadow-2xl px-8 py-10 space-y-6"
      >
        <div className="flex items-center gap-3 justify-center mb-6">
          <PackagePlus size={24} className="text-blue-400" />
          <h2 className="text-2xl font-bold text-blue-400">Add New Product</h2>
        </div>
        {/* Title */}
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-sm flex items-center gap-2">
            <Tag size={16} /> Title
          </label>
          <input
            {...register("title", { required: "Product title is required" })}
            id="title"
            placeholder="iPhone 16 Pro"
            className="bg-slate-700 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>
        {/* Price */}
        <div className="flex flex-col gap-1">
          <label htmlFor="price" className="text-sm flex items-center gap-2">
            <DollarSign size={16} /> Price
          </label>
          <input
            {...register("price", { required: "Product price is required" })}
            id="price"
            type="number"
            placeholder="49999"
            className="bg-slate-700 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
          />
          {errors.price && (
            <span className="text-red-500 text-sm">{errors.price.message}</span>
          )}
        </div>
        {/* Category */}
        {/* Category */}
        <div className="flex flex-col gap-1">
          <label htmlFor="category" className="text-sm flex items-center gap-2">
            <Type size={16} /> Category
          </label>
          <select
            {...register("category", { required: "Category is required" })}
            id="category"
            className="bg-slate-700 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>
              -- Select Category --
            </option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Tablet">Tablet</option>
            <option value="Headphones">Headphones</option>
            <option value="Accessories">Accessories</option>
            <option value="Smartwatch">Smartwatch</option>
            <option value="Camera">Camera</option>
          </select>
          {errors.category && (
            <span className="text-red-500 text-sm">
              {errors.category.message}
            </span>
          )}
        </div>
        
        {/* Description */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="description"
            className="text-sm flex items-center gap-2"
          >
            <FileText size={16} /> Description
          </label>
          <textarea
            {...register("description")}
            id="description"
            placeholder="Enter product description..."
            rows={3}
            className="bg-slate-700 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            autoComplete="off"
          ></textarea>
        </div>
        {/* Image URL */}
        <div className="flex flex-col gap-1">
          <label htmlFor="image" className="text-sm flex items-center gap-2">
            <ImagePlus size={16} /> Image URL
          </label>
          <input
            {...register("image")}
            id="image"
            type="url"
            placeholder="https://example.com/image.jpg"
            className="bg-slate-700 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
          />
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold text-white transition shadow-md active:scale-95"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
