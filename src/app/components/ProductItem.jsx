import Image from "next/image";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';


export default function ProductItem({ product }) {
  const { name, image, price, description } = product;

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-wrap w-[40%] mb-4 min-h-[200px]" data-aos="fade-right">            
      <div className="flex w-full flex-col-reverse p-4 gap-2 items-center border-2-0 pb-4 shadow-inner-lg rounded-3xl text-center">
        <p className="text-[15px] lg:text-[16px] text-[#5ac268]">R$ {price}</p>
        <p className="text-[13px] lg:text-sm">{description}</p>
        <strong>{name}</strong>        
         <div className="w-full flex items-center justify-center">
            <Image className="rounded-2xl" src={image} alt={name} width={150} height={100} />
        </div> 
      </div>
    </div>
  );
}
