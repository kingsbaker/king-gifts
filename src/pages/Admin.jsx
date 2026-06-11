import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [dashboard, setDashboard] = useState(null);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    originalPrice: 0,
    category: "flowers",
    description: "",
    tags: "",
    isEggless: false,
    images: [],
  });
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  useEffect(() => {
    const auth = sessionStorage.getItem("adminAuth");
    if (auth) setIsAuthenticated(true);
    else if (!password) setIsAuthenticated(false);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "kingadmin2026") {
      sessionStorage.setItem("adminAuth", "true");
      setIsAuthenticated(true);
      setPassword("");
    } else {
      alert("Invalid password");
    }
  };

  const fetchDashboard = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const res = await fetch(`${API_URL}/orders/dashboard`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setDashboard(data.dashboard);
      }
    } catch (error) {
      console.error("Error fetching dashboard:", error);
    }
  };

  const fetchOrders = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const res = await fetch(`${API_URL}/orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders || []);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("token");
      const res = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...newProduct,
          tags: newProduct.tags.split(",").map((t) => t.trim()),
        }),
      });
      if (res.ok) {
        alert("Product created successfully");
        setNewProduct({
          name: "",
          price: 0,
          originalPrice: 0,
          category: "flowers",
          description: "",
          tags: "",
          isEggless: false,
          images: [],
        });
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      const token = sessionStorage.getItem("token");
      const res = await fetch(`${API_URL}/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ orderStatus: newStatus }),
      });
      if (res.ok) {
        alert("Order status updated");
        fetchOrders();
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#8f270e] to-[#6b1f0a] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8">
          <h1 className="text-3xl font-bold text-[#8f270e] mb-2 text-center">👑 King Gifts</h1>
          <p className="text-center text-gray-600 mb-8">Admin Panel</p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-[#8f270e]"
            />
            <button
              type="submit"
              className="w-full bg-[#8f270e] text-white py-2 rounded-lg font-semibold hover:bg-[#6b1f0a] transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#8f270e]">👑 King Gifts Admin</h1>
          <button
            onClick={() => {
              sessionStorage.removeItem("adminAuth");
              setIsAuthenticated(false);
            }}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4 px-4 py-6 border-b bg-white">
          {["dashboard", "orders", "product", "bulk", "banners"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                if (tab === "dashboard") fetchDashboard();
                if (tab === "orders") fetchOrders();
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                activeTab === tab
                  ? "bg-[#8f270e] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="p-6">
            {dashboard && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-600 text-sm">Today Orders</p>
                  <p className="text-3xl font-bold text-[#8f270e]">{dashboard.todayOrders}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-600 text-sm">Today Revenue</p>
                  <p className="text-3xl font-bold text-green-600">₹{dashboard.todayRevenue.toLocaleString()}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-600 text-sm">Pending Orders</p>
                  <p className="text-3xl font-bold text-orange-600">{dashboard.pendingOrders}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-600 text-sm">Total Products</p>
                  <p className="text-3xl font-bold text-blue-600">{dashboard.totalProducts}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-600 text-sm">Week Orders</p>
                  <p className="text-3xl font-bold text-purple-600">{dashboard.weekOrders}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-600 text-sm">Week Revenue</p>
                  <p className="text-3xl font-bold text-indigo-600">₹{dashboard.weekRevenue.toLocaleString()}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="p-6">
            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Order #</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Customer</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-3 text-sm">{order.orderNumber}</td>
                      <td className="px-6 py-3 text-sm">{order.shippingAddress?.name}</td>
                      <td className="px-6 py-3 text-sm">₹{order.totalAmount}</td>
                      <td className="px-6 py-3 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.orderStatus === "delivered"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {order.orderStatus}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-sm">
                        <select
                          onChange={(e) => handleStatusUpdate(order._id, e.target.value)}
                          className="px-2 py-1 border border-[#8f270e] rounded text-sm"
                        >
                          <option>Update Status</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="processing">Processing</option>
                          <option value="shipped">Shipped</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Product Tab */}
        {activeTab === "product" && (
          <div className="p-6">
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>
              <form onSubmit={handleCreateProduct} className="space-y-4">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
                <input
                  type="number"
                  placeholder="Original Price"
                  value={newProduct.originalPrice}
                  onChange={(e) => setNewProduct({ ...newProduct, originalPrice: parseFloat(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="flowers">Flowers</option>
                  <option value="cakes">Cakes</option>
                  <option value="gifts">Gifts</option>
                </select>
                <textarea
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows="3"
                />
                <input
                  type="text"
                  placeholder="Tags (comma separated)"
                  value={newProduct.tags}
                  onChange={(e) => setNewProduct({ ...newProduct, tags: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newProduct.isEggless}
                    onChange={(e) => setNewProduct({ ...newProduct, isEggless: e.target.checked })}
                    className="mr-2"
                  />
                  <span>Is Eggless?</span>
                </label>
                <button
                  type="submit"
                  className="w-full bg-[#8f270e] text-white py-2 rounded-lg font-semibold hover:bg-[#6b1f0a] transition"
                >
                  Create Product
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Bulk Upload Tab */}
        {activeTab === "bulk" && (
          <div className="p-6">
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Bulk Upload</h2>
              <p className="text-gray-600 mb-6">Upload Excel file with product data. Coming in next update.</p>
              <button disabled className="bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed">
                Upload File (Disabled)
              </button>
            </div>
          </div>
        )}

        {/* Banners Tab */}
        {activeTab === "banners" && (
          <div className="p-6">
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Banners</h2>
              <p className="text-gray-600">Banner management coming in next update.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
