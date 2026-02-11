import { useEffect, useState } from "react";

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/products`)
            .then(res => res.json())
            .then(data => setProducts(data));

        fetch(`${import.meta.env.VITE_API_URL}/api/bookings`)
            .then(res => res.json())
            .then(data => setBookings(data));

        fetch(`${import.meta.env.VITE_API_URL}/api/subscriptions`)
            .then(res => res.json())
            .then(data => setSubscriptions(data));
    }, []);

    const handleAdd = async () => {
        await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, description, price })
        });

        window.location.reload();
    };

    const handleDelete = async (id) => {
        await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`, {
            method: "DELETE"
        });

        setProducts(products.filter(p => p.id !== id));
    };

    return (
        <div className="p-10 m-20 pt-32">
            <h1 className="text-3xl mb-6">Admin Panel</h1>

            {/* Add Form */}
            <div className="mb-6">
                <input
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button onClick={handleAdd} className="bg-oreyelo px-4 py-2 rounded">
                    Add Product
                </button>
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(product => (
                    <div key={product.id} className="border p-4 mb-2 rounded shadow-md bg-white">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-bold text-lg">{product.name}</h3>
                            <span className="text-green-600 font-bold">£{product.price}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <button
                            onClick={() => handleDelete(product.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {/* Bookings Table */}
            <h2 className="text-2xl mt-10 mb-4 font-bold border-b-2 border-chelsea-cucumber inline-block">Bookings</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b text-left">ID</th>
                            <th className="py-2 px-4 border-b text-left">Product ID</th>
                            <th className="py-2 px-4 border-b text-left">Name</th>
                            <th className="py-2 px-4 border-b text-left">Email</th>
                            <th className="py-2 px-4 border-b text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <tr key={booking.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{booking.id}</td>
                                <td className="py-2 px-4 border-b">{booking.product_id}</td>
                                <td className="py-2 px-4 border-b">{booking.name}</td>
                                <td className="py-2 px-4 border-b">{booking.email}</td>
                                <td className="py-2 px-4 border-b">{new Date(booking.date).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Subscriptions Table */}
            <h2 className="text-2xl mt-10 mb-4 font-bold border-b-2 border-chelsea-cucumber inline-block">Subscriptions</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b text-left">ID</th>
                            <th className="py-2 px-4 border-b text-left">Email</th>
                            <th className="py-2 px-4 border-b text-left">Plan</th>
                            <th className="py-2 px-4 border-b text-left">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscriptions.map(sub => (
                            <tr key={sub.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{sub.id}</td>
                                <td className="py-2 px-4 border-b">{sub.email}</td>
                                <td className="py-2 px-4 border-b">{sub.plan}</td>
                                <td className="py-2 px-4 border-b">{new Date(sub.created_at).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
