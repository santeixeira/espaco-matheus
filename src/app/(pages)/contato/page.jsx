"use client";
import { useState } from "react";
import Contact from "@/pages/Contact";
import {
  FaCheckCircle,
  FaFacebookMessenger,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import Modal from "@/components/Modal";

const Contato = () => {
  const [modal, setModal] = useState(false);
  const changeModal = (e) => {
    setModal((current) => !current);
  };
  return (
    <>
      <Modal title={"Enviado!"} open={modal} close={() => setModal(false)}>
        <div className="mx-auto">
          <h3 className="text-white text-xl text-center">
            Sua mensagem foi registrada, vamos entrar em contato!{" "}
          </h3>
          <FaCheckCircle size={50} className="text-green-400 mx-auto my-8" />
        </div>
      </Modal>
      <div className="lg:w-[1080px] mx-auto overflow-hidden">
        <div className="h-full flex ">
          <div id="contatos" className="mt-[10em] mb-[3em] border-white">
            <h1 className="lg:text-left text-5xl px-0">Fale Comigo.</h1>
            <p className=" text-xl font-thin my-4 text-justify mx-5">
              Adoraria trabalhar com você, aqui está os meios de entrar em
              contato!
            </p>
          </div>
        </div>
        <div className="lg:flex inline-block lg:justify-center lg:columns-2 lg:gap-4 mx-auto my-4">
          <div className="lg:w-2/6">
            <h1 className="text-2xl">Redes Sociais</h1>
            <div className="flex items-center justify-between mb-8">
              <div className="grid grid-cols-4 mx-auto gap-8">
                <Link href={"/"}>
                  <FaInstagram
                    size={40}
                    className="hover:scale-110 hover:fill-rose-400 ease-in duration-200"
                  />
                </Link>
                <Link href={"/"}>
                  <FaTwitter
                    size={40}
                    className="hover:scale-110 hover:fill-cyan-400 ease-in duration-200"
                  />
                </Link>
                <Link href={"/"}>
                  <FaFacebookMessenger
                    size={40}
                    className="hover:scale-110 hover:fill-violet-400 ease-in duration-200"
                  />
                </Link>
                <Link href={"/"}>
                  <FaWhatsapp
                    size={40}
                    className="hover:scale-110 hover:fill-green-400 ease-in duration-200"
                  />
                </Link>
              </div>
            </div>
            <div className="my-4 text-center lg:text-left">
              <h3 className="text-2xl">Fortaleza</h3>
              <h4>622 3rd Avenue, 27th floor</h4>
              <h4>New York, NY 10017</h4>
              <h4>Brasil</h4>
            </div>
            <div className="my-4 text-center lg:text-left">
              <h3 className="text-2xl">Email</h3>
              <h4>hellony@performanceart.com</h4>
            </div>
            <div className="my-4 text-center lg:text-left">
              <h3 className="text-2xl">Telefone</h3>
              <h4>+55 (85) 99999-9999</h4>
            </div>
          </div>
          <div className="lg:w-4/6 lg:mx-auto mx-5">
            <Contact change={changeModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;
