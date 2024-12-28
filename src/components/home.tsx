import * as React from "react";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "@/lib/CartContext";
import { supabase } from "@/lib/supabase";
import type { Database } from "@/types/supabase";

type Product = Database["public"]["Tables"]["products"]["Row"];

interface HomePageProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filter: string) => void;
}

const HomePage = ({
  onSearch = () => console.log("Search triggered"),
  onFilterChange = () => console.log("Filter changed"),
}: HomePageProps) => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const { itemCount } = useCart();
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [currentFilter, setCurrentFilter] = React.useState("");

  React.useEffect(() => {
    const fetchProducts = async () => {
      let query = supabase
        .from("products")
        .select(
          `
          id,
          name,
          description,
          price,
          image_url,
          is_available,
          category_id
        `,
        )
        .eq("is_available", true);

      if (searchQuery) {
        query = query.ilike("name", `%${searchQuery}%`);
      }

      switch (currentFilter) {
        case "price-low":
          query = query.order("price", { ascending: true });
          break;
        case "price-high":
          query = query.order("price", { ascending: false });
          break;
        case "newest":
          query = query.order("created_at", { ascending: false });
          break;
        default:
          query = query.order("name", { ascending: true });
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error fetching products:", error);
        return;
      }

      setProducts(data || []);
      setLoading(false);
    };

    fetchProducts();
  }, [searchQuery, currentFilter]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
  };

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={itemCount}
      />
      <main className="pt-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Promotional Products
          </h1>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
            </div>
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </main>
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default HomePage;
