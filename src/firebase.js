import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYHNYinMrfYwKTqqZxOoqNqWron8ZzB6g",
  authDomain: "holiday-photos-7f3c1.firebaseapp.com",
  projectId: "holiday-photos-7f3c1",
  storageBucket: "holiday-photos-7f3c1.appspot.com",
  messagingSenderId: "406316923780",
  appId: "1:406316923780:web:ebb163d1d96630800cbbd1",
  measurementId: "G-8DPPL1MMHG"
};
const app = firebase.initializeApp(firebaseConfig)

export default firebase;
export {
    app
}   