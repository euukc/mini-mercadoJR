import Image from 'next/image';
import Menu from './Menu';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductList from '../components/ProductList';


const productsData = [
  {
    "id": 1,
    "name": "Laranja",
    "image": "/laranja.jpg",
    "price": "R$ 20,00",
    "description": "",
    "category": "Hortifrute"
  },
  {
    "id": 2,
    "name": "Maçã",
    "image": "/maça.jpg",
    "price": "R$ 0,50 cada",
    "description": "",
    "category": "Hortifrute"
  },
  {
    "id": 3,
    "name": "Costela congelada",
    "image": "/carne-congelada.jpg",
    "price": "R$ 30,00",
    "description": "",
    "category": "Carnes"
  },
  {
    "id": 4,
    "name": "Ração para cachorro",
    "image": "/raçao-cachorro.jpg",
    "price": "R$ 20,00",
    "description": "",
    "category": "Rações"
  },  
  {
    "id": 4,
    "name": "Coca-cola garrafa 2L",
    "image": "/coca-cola.jpg",
    "price": "R$ 20,00",
    "description": "",
    "category": "Bebidas"
  }, 
  {
    "id": 4,
    "name": "Sprite garrafa 2L",
    "image": "/sprite.jpg",
    "price": "R$ 20,00",
    "description": "",
    "category": "Bebidas"
  }, 
  {
    "id": 4,
    "name": "Sabonete Palmolive",
    "image": "/sabonete-palmolive.jpg",
    "price": "R$ 20,00",
    "description": "",
    "category": "Higiente Pessoal"
  }, 
  {
    "id": 4,
    "name": "Pão Panco Integral",
    "image": "/pao-panco-integral.jpg",
    "price": "R$ 20,00",
    "description": "",
    "category": "Pãos"
  }, 
  {
    "id": 4,
    "name": "Pão Francês",
    "image": "/pao-frances.jpg",
    "price": "R$ 20,00",
    "description": "",
    "category": "Pãos"
  }, 
  {
    "id": 4,
    "name": "Ketchup",
    "image": "/ketchup.jpg",
    "price": "R$ 20,00",
    "description": "",
    "category": "Condimentos"
  }, 
  {
    "id": 4,
    "name": "Arroz Camil 5kg",
    "image": "/arroz-5kg.jpg",
    "price": "R$ 20,00",
    "description": "",
    "category": "Grãos e Cereais"
  }, 

];



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
      }, 60000);  //faz com que o estado status seja atualizado a cada minuto para garantir que o status ('Aberto' ou 'Fechado') esteja correto, mesmo que o usuário mantenha a página aberta por um longo período.

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
