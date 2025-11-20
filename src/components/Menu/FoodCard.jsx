function FoodCard({ name, description, price, img }) {

    return (
        <>
            <div className="shadow-2xl w-70 rounded-lg mx-30 mt-2 bg-white font-lekton hover:scale-102 duration-300 cursor-pointer">
                <img src={img} alt={name}  className="rounded-t-lg"/>
                <div className="flex flex-col px-2 py-1">
                    <h2 className="font-bold">{name}</h2>
                    <h3 className="text-gray-800">{description}</h3>
                    <div className="flex justify-between py-2">
                        <h4 className="font-bold">S/{price}</h4>
                        <button className="bg-[#DCA859] px-8 rounded font-bold text-white cursor-pointer hover:bg-[#FF9E0B] duration-300">Pedir</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FoodCard;