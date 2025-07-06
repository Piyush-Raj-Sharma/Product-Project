import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncUpdateProduct } from "../store/actions/productActions";

const UpdateProduct = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const productData = useSelector((state) => state.productReducer.productData);
  const product = productData.find((p) => p.id == id);

  const closeModal = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);

  const updateProductHandler = (updatedProduct) => {
    dispatch(asyncUpdateProduct(updatedProduct));
    navigate(`/product/${updatedProduct.id}`);
    reset();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <form
        onSubmit={handleSubmit(updateProductHandler)}
        className="w-full max-w-md bg-slate-800 p-8 rounded-xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-blue-400 text-center mb-4">
          Update Product
        </h2>

        {/* Title */}
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-sm">
            Title
          </label>
          <input
            {...register("title", { required: "Product title is required" })}
            type="text"
            id="title"
            placeholder="iPhone 16 Pro"
            autoComplete="off"
            className="p-2 rounded bg-slate-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>

        {/* Price */}
        <div className="flex flex-col gap-1">
          <label htmlFor="price" className="text-sm">
            Price
          </label>
          <input
            {...register("price", { required: "Product price is required" })}
            type="number"
            id="price"
            placeholder="49999"
            autoComplete="off"
            className="p-2 rounded bg-slate-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.price && (
            <span className="text-red-500 text-sm">{errors.price.message}</span>
          )}
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1">
          <label htmlFor="category" className="text-sm">
            Category
          </label>
          <input
            {...register("category", { required: "Category is required" })}
            type="text"
            id="category"
            placeholder="Mobile Phone"
            autoComplete="off"
            className="p-2 rounded bg-slate-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.category && (
            <span className="text-red-500 text-sm">
              {errors.category.message}
            </span>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-sm">
            Description
          </label>
          <textarea
            {...register("description")}
            id="description"
            rows={3}
            placeholder="Enter product description..."
            autoComplete="off"
            className="p-2 rounded bg-slate-700 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          ></textarea>
        </div>

        {/* Image URL */}
        <div className="flex flex-col gap-1">
          <label htmlFor="image" className="text-sm">
            Image URL
          </label>
          <input
            {...register("image")}
            type="url"
            id="image"
            placeholder="https://example.com/image.jpg"
            autoComplete="off"
            className="p-2 rounded bg-slate-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition duration-200"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
