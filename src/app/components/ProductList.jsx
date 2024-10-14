import ProductItem from "./ProductItem";


export default function ProductList({products}){
    return (
        <div className="flex flex-wrap justify-around mt-[130px]">
            {products.map((product)=> (
                <ProductItem key={product.id} {...product}/>
            ))}
        </div>
    )
}