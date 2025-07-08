import { Search, X } from "lucide-react";

const CategoryBar = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  const categories = [
    "All",
    "Laptops",
    "PC",
    "Light",
    "Gaming",
    "Keyboard",
    "Monitors",
    "Smartphones",
    "Accessories",
    "Speakers",
    "Cameras",
  ];

  return (
    <aside className="fixed left-20 top-16 h-[92%] w-full sm:w-64 bg-gray-900 border-r border-gray-800 px-5 py-6 z-30">
      {/* 🔍 Search */}
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm text-slate-400 mb-1">
          Search Products
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            id="search"
            type="text"
            placeholder="Type to search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* 🏷️ Categories */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-md font-semibold text-blue-400">Categories</h2>
        {selectedCategory !== "All" && (
          <button
            onClick={() => onSelectCategory("All")}
            className="text-xs text-red-400 hover:text-red-500 flex items-center gap-1"
          >
            <X size={14} /> Clear
          </button>
        )}
      </div>

      <ul className="space-y-2 overflow-y-auto h-[calc(100vh-220px)] pr-1 custom-scrollbar">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onSelectCategory(category)}
              className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-800 text-slate-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} Piyush Store
      </div>
    </aside>
  );
};

export default CategoryBar;
