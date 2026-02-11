
import { useParams, Link } from "react-router-dom";
import Catogoryinformation from "../Data/catogorystuff";
import { useEffect, useState } from "react";

const CategoryDetail = () => {
    const { path } = useParams();
    const item = Catogoryinformation.find((i) => i.path === path);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        quantity: 1,
    });

    const [subEmail, setSubEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice",
            { cache: "no-cache" }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log("API DATA:", data);
                setQuote(data.slip);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Quote API error:", err);
                setLoading(false);
            })
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking submitted:", formData);
        setSubmitted(true);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log("Subscription email:", subEmail);
        setSubscribed(true);
    };

    if (!item) {
        return <p className="p-20">Category Not found please wait</p>;
    };

    return (
        <div className="bg-white/80 p-6 rounded-xl shadow-lg max-w-3xl mx-auto mt-20 mb-20 ">
            <section className="p-8 rounded-xl bg-yellow-200 shadow-2xl">
                <h3 className="text-xl font-semibold mb-2 ">
                    🌱 Sustainability Quote
                </h3>

                {loading && <p>Loading quote...</p>}

                {quote && (
                    <>
                        <p className="text-lg italic">"{quote.advice}"</p>
                        <p className="text-right text-sm">- Life tips / Call it sustainability tips</p>
                    </>
                )}

                {!loading && !quote && (
                    <p>Could not load quote.</p>
                )}

            </section>



            <section className="p-10 mt-6 border-t border-gray-200">
                <h1 className="text-5xl mb-6">
                    {item.title}
                </h1>

                <img
                    src={item.heroimage}
                    alt={item.title}
                    className="mb-6 rounded-xl w-full object-cover h-64"
                />
                <p className="text-lg">{item.description}</p>
            </section>

            {/* Product UI section */}
            {item.type === "Product" && (
                <section className="mt-10 bg-white p-10 rounded-xl shadow-lg">
                    <h2 className="text-3xl helvetica mb-6">
                        Book Submission
                    </h2>
                    {submitted ? (
                        <p className="font-bold text-green-600">
                            Booking submitted successfully!
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border p-3 rounded"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border p-3 rounded"
                            />

                            <input
                                type="number"
                                name="quantity"
                                min={1}
                                value={formData.quantity}
                                onChange={handleChange}
                                className="w-full border p-3 rounded"
                            />

                            <button
                                type="submit"
                                className="px-6 py-3  text-white rounded hover:bg-gray-800 transition "
                            >
                                Book now
                            </button>
                        </form>
                    )}
                </section>
            )}

            {/* SUBSCRIPTION CATEGORY CTA */}
            {item.type === "Subscription" && (
                <section className="bg-white p-10 rounded-xl shadow-lg mt-10 text-center">
                    <h2 className="text-3xl mb-4">
                        Join Our Subscription Program
                    </h2>

                    <p className="mb-6 text-gray-700">
                        Subscribe to receive monthly eco boxes, sustainability tips,
                        and community updates.
                    </p>

                    <Link
                        to="/subscribe"
                        className="inline-block px-10 py-4 bg-oreyelo text-white rounded-xl
                       hover:scale-105 transition-all duration-300"
                    >
                        Subscribe Now
                    </Link>
                </section>
            )}
        </div>
    );
};

export default CategoryDetail;