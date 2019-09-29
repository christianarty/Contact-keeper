import React, { useState, useContext } from "react";
import ContactContext from '../../context/contact/contactContext'
const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    contactType: "personal"
  });

  const contactContext = useContext(ContactContext);

  const { name, email, phone, contactType } = contact;

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
      e.preventDefault();
      contactContext.addContact(contact)
      setContact({
        name: "",
        email: "",
        phone: "",
        contactType: "personal"
      })
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="contactType"
        id=""
        value="personal"
        checked={contactType === "personal"}
        onChange={onChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="contactType"
        id=""
        value="professional"
        checked={contactType === "professional"}
        onChange={onChange}
      />{" "}
      Professional{" "}
      <input
        type="submit"
        value="Add Contact"
        className="btn btn-primary btn-block"
      />
    </form>
  );
};

export default ContactForm;
