import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-between px-40 items-center h-20">
      <div>
        <h1 className="font-luckiestGuy text-5xl text-[#DD9F39] tracking-widest select-none">
          CROCANTE
        </h1>
      </div>
      <div>
        <ul className="flex justify-between gap-20 text-black font-lekton select-none">
          <li>
            <Link
              to="/"
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 
                         after:h-[3px] after:w-0 after:bg-[#DD9F39] 
                         after:transition-all after:duration-300
                         hover:after:w-full"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 
                         after:h-[3px] after:w-0 after:bg-[#DD9F39] 
                         after:transition-all after:duration-300
                         hover:after:w-full"
            >
              Menú
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 
                         after:h-[3px] after:w-0 after:bg-[#DD9F39] 
                         after:transition-all after:duration-300
                         hover:after:w-full"
            >
              Acerca de
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 
                         after:h-[3px] after:w-0 after:bg-[#DD9F39] 
                         after:transition-all after:duration-300
                         hover:after:w-full"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
