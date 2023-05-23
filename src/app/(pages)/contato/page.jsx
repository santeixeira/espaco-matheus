"use client";
import React, { useState } from "react";
import Contact from "@/pages/Contact";
import { FaFacebookMessenger, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Contato = () => {
  return (
    <div className="w-[960px] mx-auto">
      <div className="h-full flex ">
        <div id="contatos" className="mt-[15em] mb-[3em] border-white">
          <h1 className="text-left text-5xl">Fale Comigo.</h1>
          <p className="text-xl font-thin my-4 text-justify px-8">
            Adoraria trabalhar com você, aqui está os meios de entrar em
            contato!
          </p>
        </div>
      </div>
      <div className="flex justify-center columns-2 gap-4 mx-auto my-4">
        <div className="w-1/4">
          <h1 className="text-2xl">Redes Sociais</h1>
          <div className="flex items-center justify-center mx-auto">
            <div className="grid grid-cols-4 mx-auto gap-4">
              <FaInstagram size={40} />
              <FaTwitter size={40} />
              <FaFacebookMessenger size={40} />
              <FaWhatsapp size={40} />
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <h1 className="text-2xl">Caixa Postal</h1>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Contato;
