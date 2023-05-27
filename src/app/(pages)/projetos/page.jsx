"use client";
import { Button } from "@/components/Button";
import Image from "next/image";
import Slider from "@/components/Slider";
import SliderData from "@/components/Slider/SliderData";
import RangeSlider from "@/components/RangeSlider";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "@/components/Modal";
import UploadButton from "@/components/Upload";
import axios from "axios";

const endpoint = process.env.API_URL_DEV + "/galeria";

const ProjetoUpload = () => {
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState("");
  const [userInfo, setUserInfo] = useState({
    file: [],
    filePreview: null,
  });

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      file: e.target.files[0],
      filePreview: URL.createObjectURL(e.target.files[0]),
    });
  };

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
        console.warn(res);
        if (res.data.success === 1) {
          setSuccess("Image upload successfully");
        }
      });
  };

  return (
    <div id="projetos" className="max-w-[1080px] mx-auto h-screen m-[15em]">
      <div className={"justify-center items-center hidden"}>
        <Modal title={"Modal"}>
          <div className="container mr-60">
            <h3 className="text-white">
              React Image Upload And Preview Using Node Js -{" "}
              <span> codeat21.com </span>{" "}
            </h3>

            <div className="formdesign">
              {isSuccess !== null ? <h4> {isSuccess} </h4> : null}
              <div className="form-row">
                <label className="text-white">Select Image :</label>
                <input
                  type="file"
                  className="form-control"
                  name="upload_file"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <button type="submit" className="btn btn-dark" onClick={submit}>
                  {" "}
                  Save{" "}
                </button>
              </div>
            </div>

            {userInfo.filePreview !== null
              ? userInfo.filePreview && (
                  <Image
                    alt={""}
                    width={300}
                    height={300}
                    className="previewimg"
                    src={userInfo.filePreview}
                  />
                )
              : null}
          </div>
        </Modal>
      </div>
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
          />
        </div>
        <div>
          <Slider slides={SliderData} />
        </div>

        <div className="py-4">
          <RangeSlider />
        </div>
      </div>
    </div>
  );
};

export default ProjetoUpload;
