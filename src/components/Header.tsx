import * as React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ShoppingCart, Search, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderProps {
  onSearch?: (query: string) => void;
  cartItemCount?: number;
  onCartClick?: () => void;
  onFilterChange?: (filter: string) => void;
}

const Header = ({
  onSearch = () => console.log("Search triggered"),
  cartItemCount = 0,
  onCartClick = () => console.log("Cart clicked"),
  onFilterChange = () => console.log("Filter changed"),
}: HeaderProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <header className="sticky top-0 z-50 w-full h-[72px] bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex-1 max-w-xl flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                onSearch(e.target.value);
              }}
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => onFilterChange("newest")}>
                Newest First
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onFilterChange("price-low")}>
                Price: Low to High
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onFilterChange("price-high")}>
                Price: High to Low
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
