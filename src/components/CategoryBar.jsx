import { useState } from "react";
import FoodCard from "./Menu/FoodCard";
import menu from "../data/menu.json"

function CategoryBar() {
    const [activeCategory, setActiveCategory] = useState("Pollos");

    const categories = ["Pollos", "Combos", "Hamburguesas", "Extras", "Bebidas"]

    const filteredFoods = menu.filter(food => food.category === activeCategory);

    return (
        <>
            <div className="mx-30 font-lekton font-bold">
                <ul className="flex justify-around w-full h-15 items-center">
                    {categories.map((category) => (
                        <li
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`cursor-pointer px-20 py-3 rounded-lg duration-300 
                            ${activeCategory === category ? "text-white bg-[#FF9A00]" : "hover:bg-[#DCA859]"}`
                            }
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Dynamic rendering as FoodCard */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 mx-15 justify-items-center">
                {filteredFoods.map(food => (
                    <FoodCard
                        key={food.name}
                        name={food.name}
                        description={food.description}
                        price={food.price}
                        img={`/${food.img}`}
                    />
                ))}
            </div>



        </>
    )
}

export default CategoryBar;