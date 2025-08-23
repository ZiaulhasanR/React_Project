import { useEffect, useState } from "react";

const Products=({onClose})=> {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []); // empty dependency => run once on mount

  if (loading) return <p>Loading...</p>;

  return (
    <div onClick={onClose} className="p-4 border rounded shadow-md w-96 bg-white">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id} className="p-2 border rounded">
            <p className="font-semibold">{product.title}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
