import { useState } from 'react';
import { ProductCard } from './components/ProductCard';
import { useProducts } from './hooks/useProduct';
import type { Product } from './types/Product';
import type { favorites } from './types/Product';

function App() {
  const { products, categories } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<favorites>({});
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product)=> (selectedCategory === 'all'  || product.category === selectedCategory   && product.title.toLowerCase().includes(searchTerm.toLowerCase())) );

  const toggleFavorite = (id: number) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Products Shop</h1>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-md"
        />
      </div>

      <div className="flex justify-center mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2"
        >
          <option value="all">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>


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
