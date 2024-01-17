import { InputPicture } from "../inputPicture/inputPicture";
import { Modal } from "../modal/Modal";
import { ViewPhotos } from "../viewPhotos/ViewPhotos";
import { Layout } from "../layout/Layout";
import "./main.scss";
export const Main = () =>{
    return(
        <div className="container">
            
        <Modal>
            {<InputPicture/>}
        </Modal>
        <Layout/>
        <ViewPhotos/>
       
       
   </div>
    )
}