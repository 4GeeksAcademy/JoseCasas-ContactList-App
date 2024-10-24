const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				// { "name": "Jonh", "address": "5th St", "phone": "555-555-5555", "email": "Jonh@test.com" },
				// { "name": "Anna", "address": "18th Ave", "phone": "777-777-7777", "email": "Anna@test.com" },
			],
			updateContact: {}
		},
		actions: {

			addContact: async (name, email, address, phone) => {
				let contact = { name: name, email: email, address: address, phone: phone }

				let addResponse = await fetch("https://playground.4geeks.com/contact/agendas/JoseCasas1/contacts", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify(contact)
				})
				if (
					!addResponse.ok
				) {
					console.error(addResponse, "Problem Adding contact")
				}
				setStore({ contacts: addResponse.contacts })
				getActions().getContacts()
			},

			getContacts: async () => {
				let getResponse = await fetch("https://playground.4geeks.com/contact/agendas/JoseCasas1/contacts")

				let getData = await getResponse.json()
				console.log(getData, "HERE ARE YOUR CONTACTS")
				setStore({ contacts: getData.contacts })
			},


			updateContact: async (name, email, address, phone, id) => {
				let contact = { name: name, email: email, address: address, phone: phone }

				let putResponse = await fetch(`https://playground.4geeks.com/contact/agendas/JoseCasas1/contacts/${id}`, {
					method: "PUT",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify(contact)
				})
				setStore({ contacts: putResponse.contacts })
				getActions().getContacts()
			},

			updateContactData: (data) => {
				setStore({ updateContact: data })


			},

			deleteContact: async (id) => {
				let deleteResponse = await fetch(`https://playground.4geeks.com/contact/agendas/JoseCasas1/contacts/${id}`, {
					method: "DELETE",
				})
				if (
					!deleteResponse.ok
				) {
					console.error(deleteResponse, "Problem Deleting contact")
				} else {
					getActions().getContacts();
					console.log("HERE ARE YOUR CONTACTS AFTER DELETING")
				}
			},




			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
