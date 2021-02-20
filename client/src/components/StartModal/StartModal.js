import React from "react";
// import Modal from "../Modal/Modal";
// import "StartModal.css";

const StartModal = () => {
  const image =
    "https://www.pngfind.com/pngs/m/377-3773029_9-blank-scroll-banner-png-for-free-download.png";

  const ModalStyle = {
    zIndex: "1",
    height: "60%",
    width: "60%",
    backgroundImage: `url(${image})`,
    backgroundSize: "140% 140%",
    backgroundPosition: "center",
    position: "absolute",
    right: "20%",
    top: "23%",
    visibility: "visible",
  };

  const ButtonStyle = {
    color: "blue",
  };
  return (
    <>
      <div style={ModalStyle} id="startModal">
        <div id="modalContent">
          <h1>Escape from the Vampire's Castle!</h1>
          <p>
            Search for clues and solve the puzzles to escape! Click the "Start"
            button to begin.
          </p>
          <button style={ButtonStyle}>Start</button>
        </div>
      </div>
    </>
  );
};

export default StartModal;
