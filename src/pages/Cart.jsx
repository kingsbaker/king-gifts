import { useState } from "react";
import { Link } from "react-router-dom";

const sampleCart = [
  { id: 1, name: "Red Roses Bouquet", price: 499, emoji: "🌹", qty: 1 },
  { id: 2, name: "Chocolate Truffle", price: 699, emoji: "🎂", qty: 1 },
];

function Cart() {
  const [cart, setCart] = useState(sampleCart);

  const updateQty = (id, change) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, qty: Math.max(1, item.qty + change) }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Cart khali hai!</h2>
        <Link to="/">
          <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-bold">
            Shopping Shuru Karo
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-600">
        🛒 Mera Cart
      </h1>

      {cart.map(item => (
        <div key={item.id} className="bg-white rounded-2xl shadow-md p-4 mb-4 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="text-5xl">{item.emoji}</div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-800 truncate">{item.name}</h3>
            <p className="text-pink-600 font-bold mt-2">₹{item.price}</p>
          </div>
          <div className="grid gap-2 text-right">
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => updateQty(item.id, -1)}
                className="bg-gray-200 w-9 h-9 rounded-full font-bold text-lg"
              >−</button>
              <span className="font-bold w-8 text-center">{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, 1)}
                className="bg-gray-200 w-9 h-9 rounded-full font-bold text-lg"
              >+</button>
            </div>
            <div>
              <p className="font-bold">₹{item.price * item.qty}</p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 text-sm mt-1"
              >Remove</button>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-pink-50 rounded-2xl p-6 mt-6">
        <div className="flex justify-between text-lg font-bold mb-4">
          <span>Total:</span>
          <span className="text-pink-600">₹{total}</span>
        </div>
        <Link to="/checkout">
          <button className="w-full bg-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-pink-700">
            Checkout Karo →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;