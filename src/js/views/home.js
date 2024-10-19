import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [agenda, setAgenda] = useState([])
	
	
	useEffect(() => {
		async function createUser() {
			let response = await fetch("https://playground.4geeks.com/contact/agendas/JoseCasas1")
			let data = await response.json()
			if (data.detail == "Agenda \"JoseCasas1\" doesn't exist.") {
				let response = await fetch("https://playground.4geeks.com/contact/agendas/JoseCasas1", {
					method: "POST"
				})
				let data = response.json()
			}
			else {
				setAgenda(data.agenda)
			}
		}
		createUser()
	}, [])
	return (
		<div>
			<Link to="/AddContact">
				<button className="btn btn-success mb-5">Add Contact</button>
			</Link>
			{store.contacts?.map((contact, index) => {
				return <ContactCard key={index} name={contact.name} email={contact.email} address={contact.address} phone={contact.phone} id={contact.id} />
			})}

		</div>
	)
};