

export default function Menu({ categories, onSelectCategory }) {
    return (
        <section className="md:w-[100%] h-[15px] rounded bg-white flex justify-center md:pt-4 pt-2 md:text-[16px] text-[15px] flex-wrap mb-[180px] mt-12">

            <ul className="grid grid-cols-2 md:flex md:flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                    <li id="menu-navbar" 
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className="cursor-pointer shadow-md md:py-2 md:px-4 md:min-w-[200px] text-center">
                        {category}
                    </li>                    
                ))}
            </ul>            
        </section>
    )
}