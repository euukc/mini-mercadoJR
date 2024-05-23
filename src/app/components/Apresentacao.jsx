import Image from 'next/image';
import Menu from './Menu';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductList from '../components/ProductList';


const productsData = [
  {
    "id": 1,
    "name": "Martelo",
    "image": "/martelo.jpg",
    "price": "R$ 20,00",
    "description": "Martelo de aço",
    "category": "Martelos"
  },
  {
    "id": 2,
    "name": "Prego",
    "image": "/pregos.jpg",
    "price": "R$ 0,50 cada",
    "description": "Prego de aço",
    "category": "Pregos"
  },
  {
    "id": 3,
    "name": "Serrote",
    "image": "/serrote.jpg",
    "price": "R$ 30,00",
    "description": "Serrote xxxx",
    "category": "Serrotes"
  },
  {
    "id": 4,
    "name": "Alicate Universal",
    "image": "/alicate-universal.jpg",
    "price": "R$ 20,00",
    "description": "Martelo de Madeira",
    "category": "Alicates"
  },
  {
    "id": 5,
    "name": "Alicate Corte",
    "image": "/alicate-corte.png",
    "price": "R$ 20,00",
    "description": "Martelo de Madeira",
    "category": "Alicates"
  },
  {
    "id": 6,
    "name": "Chave Philips",
    "image": "/chave-philips.png",
    "price": "R$ 20,00",
    "description": "Chave Philips xxxxx",
    "category": "Chaves"
  }
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
    }, []);

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
    <main className="md:w-[50%] w-[85%] rounded bg-white absolute top-[50px] p-[16px] flex flex-col md:mt-32 mb-32">
      <section className='flex w-full'>
        <div className='w-[30%] md:w-[20%]'>
          <Image className='w-[100%] rounded-lg' src="/logo-JR.png" alt='Logo do Mini Mercado JR' width={100} height={100}>
          </Image>
        </div>

        <div className='w-[70%] flex justify-start pl-4 flex-col p-10'>
          <strong> JR Ferragem </strong>
          <p> Mini Mercado & Ferragem </p>
        </div>
      </section>

      <section className='pt-6'>
        <div> <OperatingStatus /></div>
        <div> Pedido mínino para entrega: R$ 15,00 </div>
        <div> </div>
      </section>

      <Menu categories={categories} onSelectCategory={setSelectedCategory} />
      <ProductList products={filteredProducts} />
    </main>
  )
}
