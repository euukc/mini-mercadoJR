import { useEffect } from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ products }) {

  useEffect(() => {
    console.log('Produtos no ProductList:', products);
  }, [products]);

 
  return (

    <div className="flex flex-wrap justify-around mt-[-100px]">
      {products.map((product) => (
        <ProductItem
          key={product.id} product={product} />
      ))}
    </div>
  );
}
