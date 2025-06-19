import axios from 'axios';
// import {Product} from '../types/Product.ts';
import type { Product } from '../types/Product';



export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://fakestoreapi.com/products');

  console.log(response);
  return response.data;
};

export const fetchCategories = async (): Promise<string[]> => {
  const response = await axios.get('https://fakestoreapi.com/products/categories');
  console.log(response.data);
  return response.data;
};