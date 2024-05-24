

export default function Menu({ categories, onSelectCategory }) {
    return (
        <section className="md:w-[100%] h-[15px] rounded bg-white flex justify-center md:pt-4 pt-2 md:text-[16px] text-[15px] flex-wrap mb-[120px] mt-12 ">

            <ul className="flex gap-4 flex-wrap justify-center">
                {categories.map((category) => (
                    <li id="menu-navbar" 
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className="cursor-pointer w-[10px]">
                        {category}
                    </li>                    
                ))}
            </ul>            
        </section>
    )
}