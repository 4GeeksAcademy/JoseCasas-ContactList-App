import { Link } from "react-router-dom";
import React, { useContext } from 'react'
import { Context } from "../store/appContext";

export default function ContactCard(props) {
  const { actions } = useContext(Context)
  console.log(props, "PROPPPPPPPPPPS")
  return (
    <div className="card d-flex m-3" style={{ "width": "18rem" }}>

      <div className="card-body">
        <img src="https://xsgames.co/randomusers/assets/avatars/pixel/35.jpg" />
        <h5 className="card-title">Name: {props.name}</h5>
        <p className="card-text">Email: {props.email}</p>
        <p className="card-text">Address: {props.address}</p>
        <p className="card-text">Phone: {props.phone}</p>
        <Link to="/UpdateContact">
          <a onClick={() => actions.updateContactData(props)} href="#" className="btn btnE mx-3"><i class="fa-solid fa-user-pen"></i>Edit</a>
        </Link>
        <a onClick={() => {
          actions.deleteContact(props.id)
          actions.getContacts()
        }} href="#" className="btn btnD"><i class="fa-solid fa-trash-can"></i>Delete</a>
      </div>
    </div>
  )
}