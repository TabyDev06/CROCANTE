import PageWrapper from "../components/PageWrapper";
import BannerContacto from "../../public/images/Contacto/BannerContact.png"

function Contact() {

    return (
        <PageWrapper>
            <>
                <div
                    className="w-full h-[40vh] bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${BannerContacto})`,
                    }}
                >
                    <div className="w-1/2 h-[40vh] flex justify-center ml-auto pr-50">
                        <div className="flex flex-col text-white font-marcellus justify-center gap-5">
                            <h3 className="text-5xl">Nuestra Historia de Sabor</h3>
                            <p className="font-lekton text-md text-gray-300">Explora un poco de nosotros: una historia de pasión y sabor que se recuerda en cada bocado.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around mt-2">
                    <div className="flex flex-col font-marcellus w-[50vh] gap-2">
                        <h3 className="text-center text-2xl font-bold">Formulario de Contacto</h3>
                        <div className="flex flex-col gap-3">
                            <input type="text" className="border border-gray-500 rounded-sm px-2" placeholder="Nombre" />
                            <input type="email" className="border border-gray-500 rounded-sm px-2" placeholder="Correo Electronico" />
                            <input type="text" className="border border-gray-500 rounded-sm px-2" placeholder="Asunto" />
                            <textarea className="border border-gray-500 rounded-sm px-2 resize-none h-20" placeholder="Mensaje"></textarea>
                            <button className="cursor-pointer bg-[#DCA859] text-white font-bold p-2 rounded hover:bg-[#FF9E0B] duration-400">Enviar Mensaje</button>
                        </div>
                    </div>
                    <div className="flex flex-col font-marcellus w-[70vh] gap-2">
                        <h3 className="text-center text-2xl font-bold">Nuestra Informacion</h3>
                        <div className="flex gap-20">
                            <div className="flex flex-col gap-5">
                                <label>Direccion :</label>
                                <label>Teléfono :</label>
                                <label>Correo Electrónico :</label>
                            </div>
                            <div className="flex flex-col gap-5">
                                <label>Calle Falsa 123, Ciudad Inventada</label>
                                <label>+51 928 507 417</label>
                                <label>crocante@gmail.com</label>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </PageWrapper>
    )
}

export default Contact;