import { Link } from "react-router-dom";
import React, { useContext } from 'react'
import { Context } from "../store/appContext";

export default function ContactCard(props) {
  const { actions } = useContext(Context)
  console.log(props, "PROPPPPPPPPPPS")
  return (
    <div className="card" style={{ "width": "18rem" }}>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.email}</p>
        <p className="card-text">{props.address}</p>
        <p className="card-text">{props.phone}</p>
        <Link to="/UpdateContact">
          <a onClick={() => actions.updateContactData(props)} href="#" className="btn btn-info">Update Contact</a>
        </Link>
        <a onClick={() => {
          actions.deleteContact(props.id)
          actions.getContacts()
        }} href="#" className="btn btn-danger">Delete Contact</a>
      </div>
    </div>
  )
}