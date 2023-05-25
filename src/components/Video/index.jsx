import React from "react";

const Video = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="overlay"></div>
      <video src="/vid1.mp4#t=12,70" autoPlay muted/>
      <div className="content">
        <h1>Sobre mim</h1>
        <p className="mx-20 text-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi quaerat quos? Doloremque, ipsam tempore. Numquam, cupiditate ad voluptatum et explicabo nisi corrupti eius sequi obcaecati omnis, quod, libero dicta!.</p>
      </div>
    </div>
  );
};

export default Video;
