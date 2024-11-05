"use client"
import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('')       
        

        try {
            const response = await axios.post('https://backend-mercadojr-0bf437acad9e.herokuapp.com/api/auth/login',
                JSON.stringify({ email, password }),  
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }              
            );

            if (response.status === 200) {          
                
                router.push('/admin');
                
            }

        } catch (error) {
            console.error(error);
            if (!error?.response) {
                setError('Erro ao acessar o servidor!')
            } else if (error.response.status == 401) {
                setError('E-mail ou senha inválidos!')
            }
        }}

    return (
            <div className="flex flex-col gap-2 justify-center items-center mt-[100px]">
                <div className="md:w-[500px] w-[96%] border rounded-3xl p-4 bg-white shadow-xl">
                    <h1 className="md:mb-[50px] text-center text-[20px] md:text-[30px] mb-[10px]">Login</h1>
                    <form className="flex flex-col gap-6">
                        <input className="border rounded-2xl p-2 bg-white shadow-xl"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)} />
                        <input className="border rounded-2xl p-2 bg-white shadow-xl"
                            type="password"
                            name="password"
                            placeholder="Senha"
                            required
                            onChange={(e) => setPassword(e.target.value)} />
                        <button
                            className="border rounded-2xl p-4 bg-[#fed808] shadow-xl md:text-[20px]"
                            type="submit"
                            onClick={(e) => handleLogin(e)}>LOGIN</button>
                    </form>
                    <p className="text-center text-bold text-red-500 mt-[10px]">{error}</p>
                </div>
            </div>
        )
    }