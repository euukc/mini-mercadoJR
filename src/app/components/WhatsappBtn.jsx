"use cliente"

import { useEffect, useState } from "react"


export default function WhatsappBtn() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const scroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            }

            const btnStyle = {
                boxShadow: '1px 1px 20px',
                borderRadius: '100px'
            };
        };

        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);

    const clickBtnWpp = () => {
        window.open(`https://api.whatsapp.com/send?phone=${55110000000}&text=${'Testando'}`, '_blank');
    }

    const btnStyle = {
        boxShadow: '1px 1px 10px',
        borderRadius: '100px',
        display: isVisible ? 'block' : 'none' // Define a visibilidade com base no estado
    };


    return (
        <div className="fixed md:w-[80px] md:h-[80px] md:bottom-[400px] md:right-[20px] w-[40px] bottom-[60px] sm:w-[60px] cursor-pointer" style={btnStyle}>
            {isVisible && <img src="/whatsapp.png" alt="Botão do WhatsApp" onClick={clickBtnWpp} />}
        </div>
    )
}