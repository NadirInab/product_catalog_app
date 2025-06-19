import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Product } from '../types/Product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(['all']);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          axios.get('https://fakestoreapi.com/products'),
          axios.get('https://fakestoreapi.com/products/categories')
        ]);
        setProducts(productsRes.data);
        setCategories(['all', ...categoriesRes.data]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } 
    };

    fetchData();
  }, []);

  return { products, categories, error };
};