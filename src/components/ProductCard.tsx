import React from "react";
import { useCart } from "@/lib/CartContext";

interface ProductCardProps {
  id: string;
  image?: string | null;
  name: string;
  description: string;
  price: number;
}

const ProductCard = ({
  id,
  image = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60",
  name,
  description,
  price,
}: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div className="w-80 h-[400px] bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="h-[250px] overflow-hidden rounded-t-lg">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60"
          }
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
      <div className="px-4 pt-0 flex justify-between items-center">
        <span className="text-lg font-bold text-gray-900">
          ${price.toFixed(2)}
        </span>
        <button
          onClick={() => addItem({ id, image: image || "", name, price })}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
