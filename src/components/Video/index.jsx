import React from "react";

const Video = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="overlay"></div>
      <video src="/vid1.mp4#t=12,70" autoPlay muted />
      <div className="content">
        <h1>Sobre mim</h1>
        <p className="mx-20 text-thin">
          Um professor de dança é como um compasso na vida de um dançarino,
          guiando seus passos, aprimorando suas técnicas e inspirando sua
          expressão artística.
        </p>
      </div>
    </div>
  );
};

export default Video;
