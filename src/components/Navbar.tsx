import { FunctionComponent, useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

interface NavbarProps {}

export const Navbar: FunctionComponent<NavbarProps> = () => {
  const [active, setActive] = useState<string>("");

  const [toggle, settoggle] = useState<boolean>(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center  py-5 fixed  z-20 bg-primary `}
    >
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto ">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" />
          <p>Maddy Macwan</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 ">
          {navLinks.map((link, index) => (
            <li
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:scale-125 cursor-pointer`}
              key={index}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => settoggle(!toggle)}
          />
          <div
            className={` ${
              !toggle ? "hidden" : "flex"
            }  p-5 absolute top-20 right-4 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-gradient-to-r from-[#434343] to-[#000000] `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-5">
              {navLinks.map((link, index) => (
                <li
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:scale-125 cursor-pointer`}
                  key={index}
                  onClick={() => setActive(link.title)}
                >
                  <a href={link.id}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
