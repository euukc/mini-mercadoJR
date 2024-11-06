"use client"

import Image from "next/image";
import { useEffect, useState } from "react"; //Hooks
import Header from "./components/Header";
import Apresentacao from "./components/Apresentacao";
import Footer from "./components/Footer";
import WhatsappBtn from "./components/WhatsappBtn";



export default function Home() {

  const [relogio, setRelogio] = useState();

  function clicarRelogio() {
    setRelogio(new Date().toString())
  };


  return (

    <div className="flex flex-col justify-center items-center min-h-full bg-[#f46700]">     
      <Header />
      <Apresentacao />
      <Footer />
      <WhatsappBtn />
    </div>
  );
}
