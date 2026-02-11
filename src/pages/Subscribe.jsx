import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/subscriptions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Subscription failed");
      }

      setSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 mb-20 bg-white p-10 rounded-xl shadow-lg">
      <h1 className="text-4xl mb-6 font-bold">
        Subscribe to Urban Harvest Hub
      </h1>

      <p className="mb-6 text-gray-700">
        Receive monthly eco-friendly product boxes, sustainability tips,
        and exclusive community updates.
      </p>

      {success ? (
        <p className="text-green-600 font-semibold text-lg">
          ✅ Subscription successful! Check your inbox soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-4 rounded"
          />

          {error && (
            <p className="text-red-600 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-oreyelo text-white py-3 rounded
                       hover:bg-chelsea-cucumber transition
                       disabled:opacity-50"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Subscribe;
