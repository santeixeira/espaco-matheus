
import React from "react";
import Contact from "@/pages/Contact";
import {
  FaFacebookMessenger,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const Contato = () => {
  return (
    <div className="w-[1080px] mx-auto">
      <div className="h-full flex ">
        <div id="contatos" className="mt-[10em] mb-[3em] border-white">
          <h1 className="text-left text-5xl px-0">Fale Comigo.</h1>
          <p className="text-xl font-thin my-4 text-justify">
            Adoraria trabalhar com você, aqui está os meios de entrar em
            contato!
          </p>
        </div>
      </div>
      <div className="lg:flex justify-center columns-2 gap-4 mx-auto my-4">
        <div className="lg:w-2/6">
          <h1 className="text-2xl">Redes Sociais</h1>
          <div className="flex items-center justify-between mb-8">
            <div className="grid grid-cols-4 mx-auto gap-8">
              <Link href={"/"}>
                <FaInstagram size={40} />
              </Link>
              <Link href={"/"}>
                <FaTwitter size={40} />
              </Link>
              <Link href={"/"}>
                <FaFacebookMessenger size={40} />
              </Link>
              <Link href={"/"}>
                <FaWhatsapp size={40} />
              </Link>
            </div>
          </div>
          <div className="my-4">
            <h3 className="text-2xl">Fortaleza</h3>
            <h4>622 3rd Avenue, 27th floor</h4>
            <h4>New York, NY 10017</h4>
            <h4>Brasil</h4>
          </div>
          <div className="my-4">
            <h3 className="text-2xl">Email</h3>
            <h4>hellony@performanceart.com</h4>
          </div>
          <div className="my-4">
            <h3 className="text-2xl">Telefone</h3>
            <h4>+55 (85) 99999-9999</h4>
          </div>
        </div>
        <div className="lg:w-4/6">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Contato;
