import { createContext, useContext, useState } from "react";

const OrderBookingContext = createContext(null);

export function OrderBookingProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [bookings, setBookings] = useState([]);

  const saveOrder = (order) => {
    setOrders((prev) => [order, ...prev]);
  };

  const saveBooking = (booking) => {
    setBookings((prev) => [booking, ...prev]);
  };

  return (
    <OrderBookingContext.Provider value={{ orders, bookings, saveOrder, saveBooking }}>
      {children}
    </OrderBookingContext.Provider>
  );
}

export function useOrderBooking() {
  const context = useContext(OrderBookingContext);
  if (!context) {
    throw new Error("useOrderBooking must be used within OrderBookingProvider");
  }
  return context;
}
