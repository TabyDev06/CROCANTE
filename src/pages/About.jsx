import PageWrapper from "../components/PageWrapper"

import BannerAcerca from "../../public/images/Acerca/BannerAcerca.png"
import OurBeginnings from "../../public/images/Acerca/OurBeginnings.png"
import OurPhilosophy from "../../public/images/Acerca/OurPhilosophy.png"

function Acerca() {

    return (
        <PageWrapper>
            <>
                <div
                    className="w-full h-[40vh] bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${BannerAcerca})`,
                    }}
                >
                    <div className="w-1/2 h-[40vh] flex justify-center ml-auto pr-50">
                        <div className="flex flex-col text-white font-marcellus justify-center gap-5">
                            <h3 className="text-5xl">Nuestra Historia de Sabor</h3>
                            <p className="font-lekton text-md text-gray-300">Explora un poco de nosotros: una historia de pasión y sabor que se recuerda en cada bocado.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mx-20 font-marcellus gap-20 mt-2">
                    <div className="flex flex-col gap-2 cursor-pointer hover:scale-102 duration-500">
                        <h4 className="text-center text-2xl">Nuestro Inicios</h4>
                        <p className="text-gray-700">Empezamos con recetas caseras y una pasión por el buen sabor. Con el tiempo, esa idea sencilla creció hasta convertirse en un espacio donde cada plato refleja nuestra historia.</p>
                        <img src={OurBeginnings} alt="Nuestros Inicios" className="w-full h-45 object-cover rounded" />
                    </div>
                    <div>
                        <div className="flex flex-col gap-2 cursor-pointer hover:scale-102 duration-500">
                            <h4 className="text-center text-2xl">Nuestra Filosofia</h4>
                            <p className="text-gray-700">En Crocante cocinamos con pasión y simplicidad, usando ingredientes frescos y cuidando cada detalle. Queremos que cada plato hable por sí mismo y que cada visita deje una huella memorable.</p>
                            <img src={OurPhilosophy} alt="Nuestros Inicios" className="w-full h-45 object-cover rounded" />
                        </div>
                    </div>
                </div>
            </>
        </PageWrapper>
    )
}

export default Acerca;