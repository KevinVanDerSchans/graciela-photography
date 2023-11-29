import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


const MenuItems = (props) => {

  const { parentMenu } = props;
  const location = useRouter();

  const [home, setHome] = useState(false);
  const [works, setWorks] = useState(false);
  const [myServices, setMyServices] = useState(false);
  const [FAQ, setFAQ] = useState(false);
  const [aboutMe, setAboutMe] = useState(false);
  const [contact, setContactMe] = useState(false);


  return (
    <>
      {/* HOME */}
      <li className={location === "/" ? "menu-item active" : "menu-item"}>
        <Link href="/" title="Inicio">
          <span>Inicio</span>
        </Link>
      </li>

      {/* WORKS */}
      <li className={location === "/works" ? "menu-item active" : "menu-item"}>
        <Link href="/works" title="Sesiones">
          <span>Sesiones</span>
        </Link>
      </li>


      {/* About Me */}
      <li className={location === "/aboutMe" ? "menu-item active" : "menu-item"}>
        <Link href="/aboutMe" title="Sobre mi">
          <span>Sobre mi</span>
        </Link>
      </li>


      {/* Why choose us? */}
      <li className={location === "/whyChooseUs" ? "menu-item active" : "menu-item"}>
        <Link href="/whyChooseUs" title="¿Por qué elegirnos?">
          <span>¿Por qué elegirnos?</span>
        </Link>
      </li>


      {/* FAQ */}
      <li className={location === "/faq" ? "menu-item active" : "menu-item"}>
        <Link href="/faq" title="FAQ">
          <span>FAQ</span>
        </Link>
      </li>


      {/* Contact */}
      <li className={location === "/contact" ? "menu-item active" : "menu-item"}>
        <Link href="/contact" title="Contacto">
          <span>Contacto</span>
        </Link>
      </li>
    </>
  );
};

export default MenuItems;
