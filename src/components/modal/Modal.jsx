import { useState } from "react";
import './modal.scss';
import addicon from "../icon/Add-SVG.svg"


export  const Modal = ({children})=> {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };



  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
       <img src={addicon}/>
      </button>
    
      {modal && (
        <div className="modal show-modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            {children}
          </div>
        </div>
      )}
      
    </>
  );
}