"use cliente"

import { useEffect, useState } from "react";
import Image from "next/image";


export default function WhatsappBtn() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const scroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);

    const clickBtnWpp = () => {
        window.open(`https://api.whatsapp.com/send?phone=${53984781410}&text=${'Olá! Vim do site e tenho uma dúvida:'}`, '_blank');
    }

    const btnStyle = {
        boxShadow: '1px 1px 10px',
        borderRadius: '100px',
        display: isVisible ? 'block' : 'none'
    };


    return (
        <div className="fixed md:w-[80px] md:h-[80px] md:bottom-[400px] md:right-[20px] w-[40px] bottom-[60px] sm:w-[60px] cursor-pointer" style={btnStyle}>
            {isVisible && (
                <Image
                    src="/whatsapp.png"
                    width={100}
                    height={60}
                    alt="Botão do WhatsApp"
                    onClick={clickBtnWpp}
                />
            )}
        </div>
    )
}