import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let updated = [...products];

    // Search filter
    if (searchTerm) {
      updated = updated.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorting
    if (sortOrder === "low") {
      updated.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "high") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updated);
  }, [searchTerm, sortOrder, products]);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched products:", data);
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Data is not an array:", data);
          setError("Invalid data format received");
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-20 text-center text-xl">Loading products...</p>;
  if (error) return <p className="p-20 text-center text-xl text-red-500">Error: {error}</p>;

  return (
    <section className="p-20">
      <h1 className="text-5xl mb-10 text-center border p-6 m-10 ">Our Products</h1>

      {/* Search and Sort UI */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 px-10">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border-2 border-black rounded-lg w-full md:w-1/3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-3 border-2 border-black rounded-lg w-full md:w-1/4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all bg-white"
        >
          <option value="">Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-xl">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded p- shadow-lg hover:shadow-2xl transition bg-oreyelo h-[50vh] "
            >
              <img
                src={product.image || "https://placehold.co/400x300"}
                alt={product.name}
                className="w-full h-[30vh] object-cover mb-4 rounded shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-black"
              />
              <section className="p-8 m-10 rounded bg-black/80">
                <div className="flex justify-between items-start mb-2 ">
                  <h2 className="text-2xl font-bold p-2 ">{product.name}</h2>
                  <span className="text-xl font-semibold bg-green-100 px-3 py-1 rounded text-chelsea-cucumber">
                    £{product.price}
                  </span>
                </div>

                <p className="mb-6 text-white">{product.description}</p>

                <Link
                  to={`/products/${product.id}`}
                  className="inline-block border-2 rounded-3xl text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                >
                  View Details
                </Link>
              </section>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;
