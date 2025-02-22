import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext"; // Ensure the correct path
import productsData from "../data/products"; // Replace with actual API if needed

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, cart } = useContext(CartContext);

  const product = productsData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-red-500">Product not found!</div>;
  }

  const isInCart = cart.some((cartItem) => cartItem.id === product.id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex gap-6">
        <img src={product.image} alt={product.title} className="w-1/3 rounded-lg" />
        <div>
          <h2 className="text-2xl font-semibold">{product.title}</h2>
          <p className="text-gray-600 my-2">{product.description}</p>
          <p className="text-xl font-bold text-green-600">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className={`mt-4 px-6 py-2 text-white rounded ${
              isInCart ? "bg-red-500" : "bg-blue-500"
            }`}
          >
            {isInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
