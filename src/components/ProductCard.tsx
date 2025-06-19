import type { Product } from '../types/Product';

type ProductCardProps = {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
};

export const ProductCard = ({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="relative h-48 bg-gray-50 flex items-center justify-center p-5">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full object-contain"
        />
        <button
          onClick={() => onToggleFavorite(product.id)}
          className={`absolute top-2 right-2 p-2 rounded-full ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 truncate">{product.title}</h3>
        <div className="text-green-600 font-bold">${product.price.toFixed(2)}</div>
        <div className="text-gray-500 text-sm capitalize">{product.category}</div>
      </div>
    </div>
  );
};