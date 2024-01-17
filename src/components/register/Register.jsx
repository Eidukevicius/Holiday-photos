import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, registerWithEmailAndPassword} from "../../services/AuthServices"




export const Register = () =>{
    const navigate = useNavigate();

    const [userData, setUserData]= useState({
        name: '',
        email:'',
        password:'',
    })

    const [user, loading, error ] = useAuthState(auth);

    const handleChange = (e)=>{
        const value = e.target.value;
        setUserData({
            ...userData,
            [e.target.name]:value
        })

    }
    

    useEffect(()=>{
        if(loading) return;
        if(user) navigate('/Main')

    }, [user, loading])

    const submitHandler = (e)=>{
        e.preventDefault();
        registerWithEmailAndPassword(userData.name, userData.email, userData.password)

    }



    return(
        <>
        <h2 className="m-3 text-center">Registruokis</h2>
        <form className="container" onSubmit={submitHandler}>
                <div className="mb-3">
                        <input type="text" className="form-control mb-3" name="name" placeholder="Jūsų vardas" onChange={handleChange}/>
                    <div className="mb-3">
                        <input type="email" name="email" className="form-control" placeholder="El.paštas" onChange={handleChange}/>
                    </div>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" name="password" placeholder="Slaptažodis" onChange={handleChange}/>
                </div>
                <div className="mb-3"><button type="submit" className="btn btn-primary w-100">Registruotis</button></div>
                <div className="mb-3">
                    <p>Turite paskyra?  <Link to="/" className="text-decoration-none">Galite prisijungti</Link></p>
                </div>
        </form>
        </>
    )

}