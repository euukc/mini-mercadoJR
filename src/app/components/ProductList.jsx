import ProductItem from "./ProductItem";


export default function ProductList({products}){
    return (
        <div>
            {products.map((product)=> (
                <ProductItem key={product.id} {...product}/>
            ))}
        </div>
    )
}