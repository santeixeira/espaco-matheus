"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="h-screen ">
      <div id="contatos" className="max-w-[1080px] mx-auto h-screen my-[15em]">
        <h1 className="text-left text-5xl">Fale Comigo.</h1>
        <p className="text-xl font-thin my-4 text-justify px-8">
        Adoraria trabalhar com você, aqui está os meios de entrar em contato!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex justify-start items-center"
        >
          <div className="block items-center">
            <label className="block">
              Name:
              <input
                type="text"
                className="text-black block"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div className="block items-center">
            <label className="block">
              Email:
              <input
                className="block"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div className="block items-center">
            <label className="block">
              Message:
              <textarea
                className="block"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
