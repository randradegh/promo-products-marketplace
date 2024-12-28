import React from "react";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products?: Array<{
    id: string;
    image: string;
    name: string;
    description: string;
    price: number;
  }>;
}

const ProductGrid = ({
  products = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60",
      name: "Classic T-Shirt",
      description: "Comfortable cotton t-shirt perfect for any occasion",
      price: 29.99,
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60",
      name: "Premium Hoodie",
      description: "Warm and stylish hoodie for cold weather",
      price: 49.99,
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=60",
      name: "Baseball Cap",
      description: "Classic baseball cap with adjustable strap",
      price: 19.99,
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60",
      name: "Sports Jersey",
      description: "High-quality sports jersey for team spirit",
      price: 39.99,
    },
  ],
}: ProductGridProps) => {
  return (
    <div className="w-full min-h-[850px] bg-gray-50 p-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
