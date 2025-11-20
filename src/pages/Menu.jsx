import CategoryBar from "../components/CategoryBar";

function Menu() {

    return (
        <>
            <div className="w-full h-screen bg-[#FFFDF7]">

                <div className="font-lekton mx-30 my-2 w-1/2">
                    <h2 className="text-2xl font-bold">Nuestro Delicisoso Menú</h2>
                    <p>Descubre nuestros pollos a la brasa, papas crocantes y combos irresistibles que conquistan cada antojo.</p>
                </div>
                <CategoryBar />
            </div >
        </>
    )
}

export default Menu;