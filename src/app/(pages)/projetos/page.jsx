"use client";
import Button from "@/components/Button";
import Image from "next/image";
import RangeSlider from "@/components/RangeSlider";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "@/components/Modal";
import axios from "axios";
import { fetchSlideData } from "@/data/mutations";
import { AiOutlineMenu } from "react-icons/ai";
AiOutlineMenu;

const ProjetoUpload = () => {
  const [modal, setModal] = useState(false);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [userInfo, setUserInfo] = useState({
    file: [],
    filePreview: null,
  });

  const changeModal = () => {
    setModal((current) => !current);
  };

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      file: e.target.files[0],
      filePreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  useEffect(() => {
    fetchSlideData(setImages);
  }, []);

  const [isSuccess, setSuccess] = useState(null);

  const submit = async () => {
    const formData = new FormData();
    formData.append("image", userInfo.file);
    formData.append("description", description);
    await axios
      .post("http://localhost:8080/api/galeria/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        window.location.reload(false);
        console.warn(res);
        if (res.data.success === 1) {
          setSuccess("Image upload successfully");
        }
      });
  };

  return (
    <div id="projetos" className="max-w-[1080px] mx-auto pt-[15em] bg-black">
      <Modal
        title={"Adicionar imagem"}
        open={modal}
        close={() => setModal(false)}
      >
        <h3 className="text-white text-xl text-justify">
          Colabore com este projeto ao adicionar uma fotografia da performance,
          esta imagem será avaliada e postada no mural!
        </h3>

        <div className="w-full my-4">
          <div className="relative z-0 col-span-2">
            <textarea
              name="message"
              rows="2"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="peer block w-full text-white appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-text-white focus:border-white focus:outline-none focus:ring-0"
              placeholder=" "
              required
            ></textarea>
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">
              Sua Mensagem - Será importante para quem tem deficiência visual!
            </label>
          </div>

          <div className="formdesign">
            {isSuccess !== null ? <h4> {isSuccess} </h4> : null}
            <div className="flex w-full items-center justify-center bg-grey-lighter">
              <label className="w-64 flex border-gray-500 bg-black text-white flex-col items-center my-8 px-2 py-4 text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-transparent hover:text-black hover:bg-white">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2">Selecione uma foto</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  name="upload_file"
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="flex justify-center">
              {userInfo.filePreview !== null
                ? userInfo.filePreview && (
                    <Image
                      alt={""}
                      width={300}
                      height={300}
                      className=" object-cover h-72 w-96"
                      style={{ borderRadius: 6 }}
                      src={userInfo.filePreview}
                    />
                  )
                : null}
            </div>

            <div className="flex justify-center">
              <Button props={submit} message={"Salvar"} color={"white"} />
            </div>
          </div>
        </div>
      </Modal>

      <div className="p-5">
        <h1 className="text-left text-5xl py-4 px-4">Peformance.</h1>
        <p className="text-xl font-thin text-justify px-4 pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          sequi enim necessitatibus quia quis veniam nisi voluptate reiciendis
          illum sunt nostrum ea earum similique, harum aperiam praesentium
          eveniet beatae assumenda?
        </p>
        <div className="flex items-center justify-center">
          <Button
            icon={<FaPlus />}
            message={"Adicionar"}
            alignment={"center"}
            props={changeModal}
          />
        </div>
        <div className="py-4">
          <RangeSlider images={images} />
        </div>
        <div className="flex items-center justify-center">
          <Button
            icon={<AiOutlineMenu />}
            message={"Abrir álbum completo"}
            alignment={"center"}
            props={changeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjetoUpload;
