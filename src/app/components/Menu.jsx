

export default function Menu({ categories, onSelectCategory }) {
    return (
        <section className="md:w-[100%] h-[15px] rounded bg-white flex justify-center md:pt-4 pt-2 md:text-[16px] text-[15px] flex-wrap mb-[150px] mt-12">

            <ul className="flex gap-2 md:gap-4 flex-wrap justify-center md:justify-center">
                {categories.map((category) => (
                    <li id="menu-navbar" 
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className="cursor-pointer shadow-md py-2 px-4 min-w-[200px] text-center">
                        {category}
                    </li>                    
                ))}
            </ul>            
        </section>
    )
}