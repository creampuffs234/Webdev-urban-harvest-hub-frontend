import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Product not found");
                }
                return res.json();
            })
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);


    if (loading) {
        return <p className="p-20">Loading...</p>
    }

    else if (!product) {
        return <p className="p-20">product not found</p>
    }

    const handleBooking = (e) => {
        e.preventDefault();
        fetch(`${import.meta.env.VITE_API_URL}/api/bookings`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                name,
                product_id: product.id,

            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setMessage(data.message || "Booking successful!");
                setEmail("");
                setName("");
            })
            .catch(err => {
                console.error("Booking error:", err);
                setMessage("Error submitting booking");
            });




    };

    return (
        <div className="p-10">
            <section className="mt-20 border p-10 bg-gray-600 rounded-lg shadow-2xl">
                <h1 className="text-5xl text-white font-bold mb-6">
                    {product.name}
                </h1>


                <p className="text-xl text-white mb-4">
                    {product.description}
                </p>

                <p className="text-2xl font-semibold mb-8">
                    £{product.price}
                </p>

                <p className="text-red-400">
                    these items can only be purchused once to keep the community active
                </p>

                {/* Booking form placeholder */}
                <div className="mt-10 p-8 border rounded-xl shadow bg-white/20">
                    <h2 className="text-3xl mb-4">
                        Book this product
                    </h2>

                    {message && <p className="mb-4 text-green-300 font-bold">{message}</p>}

                    <form onSubmit={handleBooking} className="space-y-4">
                        <input
                            type="text"
                            placeholder="your name"
                            className="w-full p-2 border"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />

                        <input
                            type="email"
                            placeholder="your email"
                            className="w-full p-2 border"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />

                        <button type="submit" className="w-full p-2 border bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                            Book this product
                        </button>

                    </form>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail;