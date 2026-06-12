export function handlePaymentIntent(order) {
  // TODO: wire Razorpay or payment gateway integration here
  console.log("Payment handler stub:", order?.orderId || order?.id, order);
}

export function saveOrderToBackend(order) {
  // TODO: save order to backend or database service when APIs are available
  console.log("Order save stub:", order?.orderId || order?.id, order);
}

export function notifyWhatsApp(message) {
  // TODO: connect WhatsApp notify webhook or analytics tracking
  console.log("WhatsApp notify stub:", message);
}

export function getSameDayCountdown(cutoffHour = 18) {
  const now = new Date();
  const cutoff = new Date(now);
  cutoff.setHours(cutoffHour, 0, 0, 0);
  const diff = cutoff - now;

  if (diff <= 0) {
    return { hours: 0, minutes: 0, expired: true };
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return { hours, minutes, expired: false };
}

export function formatSameDayText() {
  const countdown = getSameDayCountdown();
  return countdown.expired
    ? "Order within 0h 00m for same-day delivery"
    : `Order within ${countdown.hours}h ${countdown.minutes}m for same-day delivery`;
}
