import { Button } from "@/components/Button";
import React from "react";

const Contact = () => {
  return (
    <div class="flex items-center justify-start ">
      <div class="mx-auto w-full max-w-lg">
        <form action="https://api.web3forms.com/submit" className="mt-4">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <div class="grid gap-6 sm:grid-cols-2">
            <div class="relative z-0 ">
              <input
                type="text"
                name="name"
                class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-white focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">
                Seu nome
              </label>
            </div>
            <div class="relative z-0">
              <input
                type="text"
                name="email"
                class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-white focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">
                Seu telefone
              </label>
            </div>
            <div class="relative z-0 col-span-2">
              <input
                type="text"
                name="email"
                class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-white focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">
                Seu e-mail
              </label>
            </div>
            <div class="relative z-0 col-span-2">
              <textarea
                name="message"
                rows="5"
                class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-text-white focus:border-white focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">
                Sua Mensagem
              </label>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <Button message={"Enviar"} bg={"white"} color={"black"}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
