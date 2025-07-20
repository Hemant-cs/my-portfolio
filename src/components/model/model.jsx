import React from "react";
import "./model.css"

function Modal({message, sentSuccessful, sentFail, setShowLoader, setSentSuccessful, setSentFail}) {
    console.log("model render", message);
    const handleOk = () => {
      setShowLoader(false);
      setSentSuccessful(false);
      setShowLoader(false);
    }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p className="modal-message">{message}</p>
        {sentSuccessful || sentFail ? <button onClick={handleOk}>Ok</button> :<div className="spinner"></div>}
      </div>
    </div>
  );
}

export default Modal;
