import React, {useState, useContext} from 'react'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router';

export default function AddContacts() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const {actions, store} = useContext(Context)
    const navigate = useNavigate()

   const addContact = () => {
        actions.addContact(name, email, address, phone)
        navigate("/")
   }
 
    return (
        <div className="container bg-dark pt-3">
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input onChange={(ev) => setName(ev.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input onChange={(ev) => setEmail(ev.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
                <input onChange={(ev) => setAddress(ev.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
                <input onChange={(ev) => setPhone(ev.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <Link to="/">
            <button className='btn btn-success mb-3' onClick={() => addContact()}>Add Contact</button>
            </Link>
        </div>
    )
}