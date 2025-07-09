import React from "react";
import { PackageCheck, CalendarDays, IndianRupee } from "lucide-react";

const Orders = () => {
  const mockOrders = [
    {
      id: "ORD123456",
      date: "2025-07-01",
      total: 2599,
      items: 3,
      status: "Delivered",
    },
    {
      id: "ORD123457",
      date: "2025-06-25",
      total: 1499,
      items: 2,
      status: "Shipped",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-10 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <PackageCheck size={28} className="text-blue-400" />
          <h2 className="text-2xl font-bold text-blue-400">Your Orders</h2>
        </div>

        {/* Orders List */}
        {mockOrders.length === 0 ? (
          <p className="text-slate-400 text-center mt-12 text-sm">
            You haven't placed any orders yet 🛒
          </p>
        ) : (
          <div className="space-y-6">
            {mockOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white/5 p-6 rounded-xl border border-white/10 shadow hover:shadow-blue-500/10 transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* Left */}
                  <div>
                    <p className="text-lg font-semibold text-white">
                      Order #{order.id}
                    </p>
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                      <CalendarDays size={14} /> {order.date}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col sm:items-end gap-1">
                    <p className="text-blue-400 text-sm font-medium flex items-center gap-1">
                      <IndianRupee size={14} />
                      {order.total}
                    </p>
                    <p className="text-slate-300 text-sm">
                      {order.items} item{order.items > 1 && "s"} |{" "}
                      <span className="text-green-400">{order.status}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
