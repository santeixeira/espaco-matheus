"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../Logo";
import navItems from "./navItems";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#000");
        setTextColor("#fff");
      } else {
        setColor("transparent");
        setTextColor("#fff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-30 ease-in duration-300"
    >
      <div className="max-w-[1644px] m-auto flex justify-between items-center p-4 text-white h-24">
        <Link href="/">
          <h1
            style={{ textColor: `${textColor}` }}
            className="font-bold text-4xl hover:scale-110 ease-in duration-150"
          >
            <Logo />
          </h1>
        </Link>
        <ul style={{ textColor: `${textColor}` }} className="hidden sm:flex">
          {navItems.map((value, index) => {
            return (
              <li className="p-4 hover:scale-110 hover:border-bottom ease-in duration-150" key={index}>
                <Link href={value.link}>{value.item}</Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Button*/}

        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ textColor: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ textColor: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu*/}

        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href={"/pagina+inicial"}>Página Inicial</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href={"/sobre+mim"}>Sobre Mim</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href={"/projetos"}>Projetos</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href={"/noticias"}>Notícias</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href={"/contatos"}>Contatos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
