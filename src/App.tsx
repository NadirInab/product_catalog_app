import { useState } from 'react';
import { ProductCard } from './components/ProductCard';
import { useProducts } from './hooks/useProduct';
import type { Product } from './types/Product';

function App() {
  const { products, categories } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');

  const getFilteredProducts = (): Product[] => {
    if (searchTerm.trim()) {
      return products.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      return products.filter(p => p.category === selectedCategory);
    }

    return products;
  };

  const filteredProducts = getFilteredProducts();

  const toggleFavorite = (id: number) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Products Shop</h1>
      
      {/* Search Input */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-md"
        />
      </div>

      {/* Category Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2"
        >
          <option value="all">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={!!favorites[product.id]}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
