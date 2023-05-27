"use client";
import { Button } from "@/components/Button";
import React, { useEffect, useState } from "react";
import axios from "axios";

const endpoint = process.env.API_URL_DEV + "/postal";

const ServerRender = async (page, size) => {
  const request = await fetch(endpoint + `?page=${page}&size=${size}`);
  const data = await request.json();
  const response = JSON.stringify(data, null, 2);
  console.log(response, size, page);
  return response;
};

const Contact = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email, message } = data;
    await axios
      .post(endpoint + "/create", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.warn(res);
      });
  };

  return (
    <>
      <h1 className="text-2xl">Caixa Postal</h1>
      <div className="flex items-center justify-start ">
        <div className="mx-auto w-full ">
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative z-0 ">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-white focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">
                  Seu nome
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={data.phone}
                  onChange={handleChange}
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-white focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">
                  Seu telefone
                </label>
              </div>
              <div className="relative z-0 col-span-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-white focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">
                  Seu e-mail
                </label>
              </div>
              <div className="relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows="5"
                  id="message"
                  value={data.message}
                  onChange={handleChange}
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-text-white focus:border-white focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">
                  Sua Mensagem
                </label>
              </div>
            </div>
            <div className="flex justify-center my-4">
              <Button message={"Enviar"} bg={"white"} color={"black"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
