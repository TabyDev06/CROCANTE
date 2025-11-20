import PageWrapper from "../components/PageWrapper";

import BannerInicio from "../../public/images/Inicio/BannerInicio.png";
import BestChef from "../../public/images/Inicio/BestChef.png";
import MomentsThatCreak from "../../public/images/Inicio/MomentsThatCreak.png";
import OurVariedMenu from "../../public/images/Inicio/OurVariedMenu.png";

function Inicio() {
    return (
        <PageWrapper>
            <>
                <div
                    className="w-full h-[50vh] bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${BannerInicio})`,
                    }}
                ></div>

                <div>
                    <div>
                        <h3 className="text-center font-marcellus text-2xl m-5">
                            Todos Somos una Familia
                        </h3>
                    </div>

                    <div className="flex mx-50 items-center justify-center gap-30">
                        <div className="flex flex-col text-center gap-3">
                            <img
                                src={BestChef}
                                alt="The Best Chef"
                                className="w-50 aspect-3/2 object-cover rounded-lg hover:scale-105 duration-500 cursor-pointer"
                            />
                            <h4 className="font-lekton font-bold">Nuestro Chef Estrella</h4>
                        </div>

                        <div className="flex flex-col text-center gap-3">
                            <img
                                src={MomentsThatCreak}
                                alt="Moments That Creak"
                                className="w-50 aspect-3/2 rounded-lg hover:scale-105 duration-500 cursor-pointer"
                            />
                            <h4 className="font-lekton font-bold">Momentos que Crujen</h4>
                        </div>

                        <div className="flex flex-col text-center gap-3">
                            <img
                                src={OurVariedMenu}
                                alt="Our Varied Menu"
                                className="w-50 aspect-3/2 rounded-lg hover:scale-105 duration-500 cursor-pointer"
                            />
                            <h4 className="font-lekton font-bold">Nuestro Menú Variado</h4>
                        </div>
                    </div>
                </div>
            </>
        </PageWrapper>
    );
}

export default Inicio;
