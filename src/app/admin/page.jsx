"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Admin() {
    const [products, setProducts] = useState([]);
    const [prices, setPrices] = useState({});
    const [buttonColors, setButtonColors] = useState({});
    const router = useRouter(); 

    const fetchProductsAdmin = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('https://backend-mercadojr-0bf437acad9e.herokuapp.com/api/products', {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true,
            });                        

            if (response.data.products) {
                setProducts(response.data.products);

                const initialPrices = {};
                response.data.products.forEach(product => {
                    initialPrices[product.id] = product.price;
                });
                setPrices(initialPrices);
            } else {
                console.error('Formato inesperado da resposta:', response.data);
            }
        } catch (error) {
            console.error('Erro ao buscar os produtos:', error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.log("Redirecionando para a tela de login, token não encontrado.");
            router.push('/login'); 
        } else {
            fetchProductsAdmin();
        }
    }, []);

    const handleUpdatePrice = async (id) => {
        const newPrice = prices[id];
        try {
            await axios.put(`https://backend-mercadojr-0bf437acad9e.herokuapp.com/api/products/${id}`, {
                price: newPrice,
            });
            setButtonColors(prev => ({ ...prev, [id]: 'green' }));


            setTimeout(() => {
                setButtonColors(prev => ({ ...prev, [id]: undefined }));
            }, 3000);
        } catch (error) {
            console.error('Erro ao atualizar o preço:', error);
        }
    };

    return (
        <div className="flex flex-col gap-2 justify-center items-center mt-[10px] md:mt-[100px] md:mx-[20%]">
            <h1 className="text-center md:text-[30px]">PÁGINA DE ADMINISTRAÇÃO</h1>
            <div className='w-full border rounded-3xl p-4 bg-white shadow-xl flex flex-col text-start'>
                {products.map(product => (
                    <div key={product.id} className="flex items-center justify-between mb-2">
                        <span>{product.name}</span>
                        <input
                            type="number"
                            value={prices[product.id]}
                            onChange={(e) => setPrices({ ...prices, [product.id]: e.target.value })}
                            className="border-2 rounded-xl w-20 min-w-[30%] px-2"
                        />
                        <button
                            style={{ backgroundColor: buttonColors[product.id] || 'blue' }}
                            className="ml-2 p-2 bg-blue-500 text-white rounded"
                            onClick={() => handleUpdatePrice(product.id)}>Atualizar</button>
                    </div>
                ))}
            </div>
            <div className='mt-[4%] border-2 rounded-2xl bg-[#fed808] p-4'>
                <button>
                    <Link href="/">Voltar para a Tela de Produtos </Link>
                </button>
            </div>
        </div>
    );
}
