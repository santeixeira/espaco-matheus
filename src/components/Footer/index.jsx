import React from "react";
import Logo from "../Logo";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className=" max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:text-emerald-400"
            >
              Sobre
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:text-emerald-400"
            >
              Projetos
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:text-emerald-400"
            >
              Notícias
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:text-emerald-400"
            >
              Políticas
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:text-emerald-400"
            >
              Contatos
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:text-emerald-400"
            >
              Desenvolvedor
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="text-white hover:text-gray-200">
            <span className="sr-only">Facebook</span>
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <span className="sr-only">Instagram</span>
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <span className="sr-only">Twitter</span>
            <FaTwitter size={20} />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-white">
          © 2023 San Thiago Teixeira | Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
