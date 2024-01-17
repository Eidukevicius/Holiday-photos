import { useState } from "react";

export const Layout = ()=>{
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
    setModal(!modal);
  };

    return(
        <>
      <button onClick={toggleModal} className="btn btn-primary">Keisti formatavimą</button>
      

      {modal && (
        <div className="modal show-modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          </div>
        </div>
      )}
      
    </>
        

    )
}