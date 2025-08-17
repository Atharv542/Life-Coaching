import { useState } from "react";
import { Mail, Check, AlertCircle } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": import.meta.env.VITE_BREVO_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          listIds: [2],
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Welcome to our community! 🎉");
        setIsSuccess(true);
        setEmail("");
      } else {
        setMessage(data.message || "Subscription failed. Please try again.");
        setIsSuccess(false);
      }
    } catch (err) {
      setMessage("Something went wrong. Please try again later.");
      setIsSuccess(false);
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4 shadow-lg">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-green-700 bg-clip-text text-transparent mb-3">
          Stay in the Loop
        </h2>
        <p className="text-gray-600 text-lg font-medium max-w-md mx-auto">
          Get exclusive updates, tips & insights delivered to your inbox
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-6 py-4 border-2 border-emerald-200 rounded-xl 
                       focus:outline-none focus:border-emerald-500 transition-all duration-300
                       placeholder-gray-400 text-gray-900 text-lg font-medium
                       shadow-lg focus:shadow-emerald-500/20 focus:shadow-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 
                   hover:from-emerald-700 hover:via-teal-700 hover:to-green-700
                   text-white py-4 px-8 rounded-xl font-bold text-lg
                   transform hover:scale-[1.02] transition-all duration-300
                   shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                   focus:outline-none focus:ring-4 focus:ring-emerald-500/30
                   whitespace-nowrap"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Subscribing...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-3">
              <span>Join Newsletter</span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="w-3 h-3" />
              </div>
            </div>
          )}
        </button>
      </form>

      {/* Message */}
      {message && (
        <div
          className={`mb-6 p-4 rounded-xl flex items-center space-x-3 transition-all duration-300 transform animate-in slide-in-from-bottom-4
          ${isSuccess 
            ? 'bg-emerald-100 border border-emerald-200 text-emerald-800' 
            : 'bg-red-50 border border-red-200 text-red-700'
          }`}
        >
          {isSuccess ? (
            <Check className="w-5 h-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          )}
          <p className="font-medium text-base">{message}</p>
        </div>
      )}

      {/* Trust indicators */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
            <span>Unsubscribe anytime</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>Weekly updates</span>
          </div>
        </div>
      </div>
    </div>
  );
}
