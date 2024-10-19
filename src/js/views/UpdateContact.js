import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router';

export default function UpdateContacts() {
    const { actions, store } = useContext(Context)
    const [name, setName] = useState(store.updateContact.name);
    const [email, setEmail] = useState(store.updateContact.email);
    const [address, setAddress] = useState(store.updateContact.address);
    const [phone, setPhone] = useState(store.updateContact.phone);
    const navigate = useNavigate()

    const updateContact = () => {
        actions.updateContact(name, email, address, phone, store.updateContact.id)
        actions.getContacts()
        navigate("/")
    }

    return (
        <div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input value={name} onChange={(ev) => setName(ev.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input value={email} onChange={(ev) => setEmail(ev.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
                <input value={address} onChange={(ev) => setAddress(ev.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
                <input value={phone} onChange={(ev) => setPhone(ev.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <Link to="/">
                <button className='btn btn-success' onClick={() => updateContact()}>Update Contact</button>
            </Link>
        </div>
    )
}