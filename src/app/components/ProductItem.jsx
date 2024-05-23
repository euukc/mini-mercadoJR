import Image from "next/image"


export default function ProductItem({name, image, price, description}) {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between mb-10 border-b-2 border-black w-full pb-4">
                <div className="flex flex-col gap-2">
                    <strong>{name}</strong>
                    <p>{description}</p>
                    <p>Preço: {price}</p>
                </div>
                <div>
                    <Image src={image} alt={name} width={100} height={100}/> 
                </div>           
            </div>
            
        </div>
    )
}