import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Menu({ onSelectCategory }) {
    const [fetchedCategories, setFetchedCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('https://backend-mercadojr-0bf437acad9e.herokuapp.com/api/categories');

            if (Array.isArray(response.data.categories)) {
                setFetchedCategories(response.data.categories);
            } else {
                console.error('Formato inesperado da resposta:', response.data);
            }
        } catch (error) {
            console.error('Erro ao buscar as categorias:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <section className="md:w-[100%] rounded bg-white flex justify-center md:pt-4 pt-2 md:text-[16px] text-[15px] flex-wrap mb-[180px] mt-12">
            <ul
                className="grid grid-cols-3 md:flex md:flex-wrap gap-4 justify-center">
                {fetchedCategories.map((category, index) => (
                    <li
                        key={index}
                        onClick={() => onSelectCategory(category)}
                        className='btn-category text-[13.5px] md:text-[16px] cursor-pointer p-2 md:px-4 md:min-w-[300px] text-center shadow-[#f46700] border-2-0 shadow-inner-lg rounded-3xl'>
                        {category}
                    </li>
                ))}
            </ul>
        </section>
    );
}
