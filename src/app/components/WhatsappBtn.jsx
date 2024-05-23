"use cliente"

import { useEffect, useState } from "react"


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
        window.open(`https://api.whatsapp.com/send?phone=${55110000000}&text=${'Testando'}`, '_blank');
    }


    return (
        <div className="fixed md:w-[80px] md:h-[80px] md:bottom-[400px] md:right-[20px] w-[40px] bottom-[60px] sm:w-[60px] cursor-pointer">
            {isVisible && <img src="/whatsapp.png" alt="Botão do WhatsApp" onClick={clickBtnWpp} />}
        </div>
    )
}