import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { useCart } from "@/lib/CartContext";

interface ProductCardProps {
  id: string;
  image?: string;
  name?: string;
  description?: string;
  price?: number;
}

const ProductCard = ({
  id = "1",
  image = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60",
  name = "Classic T-Shirt",
  description = "Comfortable cotton t-shirt perfect for any occasion",
  price = 29.99,
}: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <Card className="w-[320px] h-[400px] transition-all duration-300 hover:shadow-lg bg-white">
      <CardHeader className="p-0 h-[250px] overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 pt-0">
        <span className="text-lg font-bold text-gray-900">
          ${price.toFixed(2)}
        </span>
        <Button
          variant="outline"
          size="sm"
          className="hover:bg-gray-100"
          onClick={() => addItem({ id, image, name, price })}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
