import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.length === 0 ? (
        <p className="text-center col-span-4">Loading products...</p>
      ) : (
        products.map((product) => {
          const inCart = cart.some((item) => item.id === product.id);

          return (
            <div key={product.id} className="border p-4 rounded shadow">
              <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
              <button
                className={`mt-2 px-4 py-2 rounded ${
                  inCart ? "bg-red-500" : "bg-green-500"
                } text-white w-full`}
                onClick={() => (inCart ? removeFromCart(product.id) : addToCart(product))}
              >
                {inCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
