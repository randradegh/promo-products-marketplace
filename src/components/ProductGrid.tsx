import React from "react";
import ProductCard from "./ProductCard";
import type { Database } from "@/types/supabase";

type Product = Database["public"]["Tables"]["products"]["Row"];

interface ProductGridProps {
  products?: Product[];
}

const ProductGrid = ({ products = [] }: ProductGridProps) => {
  return (
    <div className="w-full min-h-[850px] bg-gray-50 p-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={
                product.image_url ||
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60"
              }
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
