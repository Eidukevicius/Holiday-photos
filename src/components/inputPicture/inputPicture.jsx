import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as service from "../../services/TimesCrudServices";
import { auth } from "../../services/AuthServices";
import { useAuthState } from "react-firebase-hooks/auth";

export const InputPicture = (props) => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [pictureData, setPictureData] = useState({
    number:'',
    title: '',
    picture: '',
    uid:''
  });

  const [photoCount, setPhotoCount] = useState(0);
  
  useEffect(()=>{
    service.getAllPhotos(phot =>{
        setPhotoCount(phot.length);
    }, user)

}, [])

  const handleChange = (event) => {
    setPictureData({ ...pictureData, [event.target.name]: event.target.value, uid: user.uid });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    pictureData.number = photoCount + 1;
    service.addPhoto(pictureData);
    navigate('/');
    setPhotoCount(photoCount + 1);
  };

  return (
    <form onSubmit={submitHandle} className="form">
      <div className="form-group">
        <input type="text" name="title" placeholder="Pavadinimas" className=" m-1 form-control" onChange={handleChange} value={pictureData.title} />
      </div>
      <div className="form-group">
        <textarea name="picture" placeholder="Linkas" className=" m-1 form-control" onChange={handleChange} value={pictureData.picture} />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary w-100 m-1">Saugoti</button>
      </div>

    </form>
  );
};


