import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = () => {
    if (phone.length !== 10) {
      alert("10 digit phone number dalो!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      alert("OTP sent! (Demo: use 1234)");
    }, 1500);
  };

  const handleVerifyOTP = () => {
    if (otp === "1234") {
      alert("Login successful! 🎉");
      navigate("/");
    } else {
      alert("Wrong OTP! Try 1234");
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">

        <div className="text-center mb-6">
          <div className="text-5xl mb-3">🎁</div>
          <h1 className="text-2xl font-bold text-gray-800">King Gifts</h1>
          <p className="text-gray-500 text-sm mt-1">Login to track your orders</p>
        </div>

        {step === 1 ? (
          <div>
            <p className="font-semibold text-gray-700 mb-3">📱 Phone Number</p>
            <div className="flex border-2 rounded-xl overflow-hidden mb-4 focus-within:border-pink-400">
              <span className="bg-gray-100 px-3 flex items-center text-gray-600 font-semibold">+91</span>
              <input
                type="tel" maxLength={10}
                placeholder="10 digit number"
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, ""))}
                className="flex-1 p-3 focus:outline-none text-lg"
              />
            </div>
            <button onClick={handleSendOTP}
              disabled={loading}
              className="w-full bg-pink-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-pink-700 disabled:opacity-50">
              {loading ? "Sending OTP..." : "Send OTP →"}
            </button>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 text-sm mb-4 text-center">
              OTP sent to +91-{phone}
              <button onClick={() => setStep(1)} className="text-pink-600 font-semibold ml-2">
                Change
              </button>
            </p>
            <p className="font-semibold text-gray-700 mb-3">🔢 Enter OTP</p>
            <input
              type="tel" maxLength={4}
              placeholder="4-digit OTP"
              value={otp}
              onChange={e => setOtp(e.target.value.replace(/\D/g, ""))}
              className="w-full border-2 rounded-xl p-3 text-center text-2xl font-bold tracking-widest mb-4 focus:outline-none focus:border-pink-400"
            />
            <button onClick={handleVerifyOTP}
              className="w-full bg-pink-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-pink-700">
              Verify OTP ✅
            </button>
            <button className="w-full text-pink-600 font-semibold mt-3 text-sm">
              Resend OTP
            </button>
          </div>
        )}

        <p className="text-center text-xs text-gray-400 mt-6">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}
export default Login;