import { useState } from 'react'
// import fetchProducts from '../api/fetchProducts'
import {fetchProducts, fetchCategries} from './api/products.ts' ;
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(["asdsfsf"]) ;


  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(),
          fetchCategories()
        ]);
        setProducts(productsData);
        setCategories(['all', ...categoriesData]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
  return (
    <>
  <h1>{data} </h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
    </>
  )
}

export default App
