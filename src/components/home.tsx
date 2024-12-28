import * as React from "react";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "@/lib/CartContext";

interface HomePageProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filter: string) => void;
  products?: Array<{
    id: string;
    image: string;
    name: string;
    description: string;
    price: number;
  }>;
}

const HomePage = ({
  onSearch = () => console.log("Search triggered"),
  onFilterChange = () => console.log("Filter changed"),
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
  ],
}: HomePageProps) => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const { itemCount } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onSearch={onSearch}
        onFilterChange={onFilterChange}
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={itemCount}
      />
      <main className="pt-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Promotional Products
          </h1>
          <ProductGrid products={products} />
        </div>
      </main>
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default HomePage;
