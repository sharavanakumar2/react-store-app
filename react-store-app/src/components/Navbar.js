import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-xl font-bold">Store</Link>
      <Link to="/cart" className="text-white flex items-center">
        <FaShoppingCart size={24} />
        <span className="ml-2">Cart ({cart.length})</span>
      </Link>
    </nav>
  );
};

export default Navbar;
