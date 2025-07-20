import React from "react";
import "./model.css"

function ModalWithButton({message}) {
    console.log("model render", message)
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p className="modal-message">sending your message...</p>
        <div className="spinner"></div>
        <button>OK</button>
      </div>
    </div>
  );
}

export default ModalWithButton;
