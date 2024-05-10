import { motion } from "framer-motion";
import React from "react";

interface NavbarProps {
  logo: string;
  menu: string[];
}

const Navbar: React.FC<NavbarProps> = ({ logo, menu }) => {
  return (
    <>
      <nav className="bg-none">
        <div className="w-screen flex content-center items-center justify-center xl:justify-between px-10 py-5 order-1">
          <a href="" className="hover:cursor-pointer">
            <motion.h1
              className="dm-sans-logo text-6xl mr-2 md:ml-0 md:text-8xl tracking-[-0.55rem] md:tracking-[-1rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              {logo}
            </motion.h1>
          </a>
          <ul className="gap-10 uppercase font-semibold text-[--dark-color] hidden md:text-lg md:hidden">
            {menu.map((text) => (
              <li key={text}>
                <a className="hover:text-[--light-font-color]" href="">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
