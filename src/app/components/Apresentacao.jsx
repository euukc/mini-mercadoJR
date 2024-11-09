import Image from 'next/image';
import Menu from './Menu';
import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default function Apresentacao() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://backend-mercadojr-0bf437acad9e.herokuapp.com';
  
    try {
      const response = await axios.get(`${apiUrl}/api/products`);
  
      if (response.data.products) {
        setProducts(response.data.products);
      } else {
        console.error('Formato inesperado da resposta:', response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar os produtos:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  useEffect(() => {
    setFilteredProducts(selectedCategory
      ? products.filter(product => product.category === selectedCategory)
      : products
    );
  }, [selectedCategory, products]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };



  const getStatus = () => {
    const agora = new Date();
    const horaAtual = agora.getHours();
    const minutosAtuais = agora.getMinutes();
  
    
    if (horaAtual > 8 && horaAtual < 20) {
        return 'Aberto';
    } else if (horaAtual === 8 && minutosAtuais >= 0) {
        return 'Aberto';
    } else if (horaAtual === 20 && minutosAtuais <= 30) {
        return 'Aberto';
    } else {
        return 'Fechado';
    }
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

    return <p style={statusStyle}>{status}</p>;
  };

  return (
    <main className="md:w-[100%] sm:w-[100%] w-[95%] lg:w-[1000px] rounded-lg bg-white relative mt-[-50px] p-[16px] flex flex-col mb-32 min-h-screen grow-1 shadow-2xl">
      <section className="flex w-full">
        <div className="w-[30%] md:w-[20%]">
          <Image className="w-[100%] rounded-lg" src="/logo-JR.png" alt="Logo do Mini Mercado JR" width={100} height={100} />
        </div>

        <div className="w-[70%] flex justify-start pl-4 flex-col text-[30px] xl:text-[40px] sm:text-[16px] pt-2 md:pt-6">
          <strong> Fruteira & Mini Mercado JR </strong>
        </div>
      </section>

      <section className="pt-6 text-[13.5px] md:text-[16px] sm:text-[16px]">
        <OperatingStatus />
        <div> Horário de Funcionamento: 8h às 12h - 13h às 20:30 </div>
        <div> Endereço: Rua Luis Alves Pereira, nº 322, Areal</div>
        <div> Telefone: 53 98478-1410</div>
      </section>

      <Menu onSelectCategory={handleSelectCategory} />
      <ProductList products={filteredProducts} selectedCategory={selectedCategory} />
    </main>
  );
}
