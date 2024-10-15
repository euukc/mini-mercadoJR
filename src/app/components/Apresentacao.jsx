import Image from 'next/image';
import Menu from './Menu';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductList from '../components/ProductList';
import productsData from '../data/products.json';



export default function Apresentacao() {

  const getStatus = () => {
    const horaAtual = new Date().getHours();
    return horaAtual >= 8 && horaAtual <= 22 ? 'Aberto' : 'Fechado';
  };

  const OperatingStatus = () => {
    const [status, setStatus] = useState(getStatus);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setStatus(getStatus());
      }, 60000); 

      return () => clearInterval(intervalId);
    }, [status]);

    const statusStyle = {
      color: status === 'Aberto' ? 'green' : 'red',
      
    };

    return (
      <div>
        <p style={statusStyle}>{status}</p>
      </div>
    );
  };

  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(productsData.map((product) => product.category))];

  const filteredProducts = selectedCategory === 'Todos'
    ? productsData
    : productsData.filter((product) => product.category === selectedCategory);


  return (
    <main className="md:w-[100%] sm:w-[100%] w-[100%] lg:w-[800px] rounded-lg bg-white relative mt-[-50px] p-[16px] flex flex-col mb-32 min-h-screen grow-1 shadow-2xl">
      <section className='flex w-full'>
        <div className='w-[30%] md:w-[20%]'>
          <Image className='w-[100%] rounded-lg' src="/logo-JR.png" alt='Logo do Mini Mercado JR' width={100} height={100}>
          </Image>
        </div>

        <div className='w-[70%] flex justify-start pl-4 flex-col text-[30px] xl:text-[40px] sm:text-[16px] pt-2 md:pt-6'>
          <strong> Mini Mercado & Fruteira JR </strong>          
        </div>
      </section>

      <section className='pt-6 text-[13.5px] md:text-[16px] sm:text-[16px] '>
        <div> <OperatingStatus /></div>
        <div> Pedido mínino para entrega: R$ 15,00 </div>
        <div> </div>
      </section>

      <Menu categories={categories} onSelectCategory={setSelectedCategory} />
      <ProductList products={filteredProducts} />
    </main>
  )
}
