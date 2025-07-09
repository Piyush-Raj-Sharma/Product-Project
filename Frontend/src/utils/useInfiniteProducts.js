import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../api/axiosconfig";


const useInfiniteProducts = (category, searchQuery, loadAction, lazyLoadAction) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.productData);
  const [hasMore, setHasMore] = useState(true);

  // ⏬ Fetch more for infinite scroll
  const fetchMore = async () => {
    try {
      console.log("🔁 Fetching more products...");
      const query = `/products?_start=${products.length}&_limit=10${
        category !== "All" ? `&category=${encodeURIComponent(category)}` : ""
      }${searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ""}`;

      const { data } = await axiosInstance.get(query);
      if (data.length < 10) setHasMore(false);
      dispatch(lazyLoadAction(data)); // append
    } catch (error) {
      console.error("Fetch more error:", error);
    }
  };

  // 🔁 Initial fetch on category/search change
  useEffect(() => {
    const loadInitial = async () => {
      try {
        console.log("📦 Initial load triggered");
        const query = `/products?_start=0&_limit=10${
          category !== "All" ? `&category=${encodeURIComponent(category)}` : ""
        }${searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ""}`;

        const { data } = await axiosInstance.get(query);
        setHasMore(data.length === 10);
        dispatch(loadAction(data)); // reset
      } catch (error) {
        console.error("Initial load error:", error);
      }
    };

    loadInitial();
  }, [category, searchQuery, dispatch, loadAction]);

  return { products, hasMore, fetchMore };
};

export default useInfiniteProducts;
