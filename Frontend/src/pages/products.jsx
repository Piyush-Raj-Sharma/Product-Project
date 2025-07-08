import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import CategoryBar from "../components/CategoryBar";
import axiosInstance from "../api/axiosconfig";
import { Boxes } from "lucide-react";
import InfiniteScroll from "react-infinite-scroll-component";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Load more products for infinite scroll
  const fetchProducts = async () => {
    try {
      const query = `/products?_start=${products.length}&_limit=10${
        category !== "All" ? `&category=${encodeURIComponent(category)}` : ""
      }${searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ""}`;

      console.log("Fetching more:", query);

      const { data } = await axiosInstance.get(query);
      if (data.length === 0 || data.length < 10) setHasMore(false);

      setProducts((prev) => [...prev, ...data]);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // Reset when category or search changes
  useEffect(() => {
    const loadInitial = async () => {
      try {
        const query = `/products?_start=0&_limit=10${
          category !== "All" ? `&category=${encodeURIComponent(category)}` : ""
        }${searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ""}`;

        console.log("Initial fetch:", query);

        const { data } = await axiosInstance.get(query);
        setProducts(data);
        setHasMore(data.length === 10);
      } catch (error) {
        console.error("Initial load error:", error);
      }
    };

    loadInitial();
  }, [category, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">
          Discover Top Quality Products
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Browse premium electronics, fashion, home essentials and more — all in
          one place.
        </p>
      </div>

      {/* Layout: Sidebar + Product List */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-6 px-4 pb-16">
        {/* Sidebar */}
        <div className="w-full sm:w-60">
          <CategoryBar
            selectedCategory={category}
            onSelectCategory={setCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Product List */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6">
            <Boxes size={24} className="text-blue-400" />
            <h2 className="text-xl font-bold text-blue-400">All Products</h2>
          </div>

          {products.length > 0 ? (
            <InfiniteScroll
              dataLength={products.length}
              next={fetchProducts}
              hasMore={hasMore}
              loader={
                <h4 className="text-center text-slate-400">Loading...</h4>
              }
              endMessage={
                <p className="text-center text-slate-400 mt-4">
                  <b>Yay! You have seen it all 🎉</b>
                </p>
              }
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id || product._id}
                    product={product}
                  />
                ))}
              </div>
            </InfiniteScroll>
          ) : (
            <div className="h-[60vh] flex justify-center items-center">
              <h1 className="text-2xl text-slate-400">No products found</h1>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Piyush Store — Crafted with 💙
      </div>
    </div>
  );
};

export default Products;
