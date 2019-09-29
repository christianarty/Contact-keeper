import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    contactType: "personal"
  });

  const contactContext = useContext(ContactContext);

  const { name, email, phone, contactType } = contact;

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        contactType: "personal"
      });
    }
  }, [contactContext, current]);

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const clearAll = (e) => {
    clearCurrent()
  }

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
      
    }else {
      updateContact(contact);
    }
    clearAll();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
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
      <div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && <div><button className="btn btn-light btn-block" onClick={clearAll}> Clear </button></div>}
    </form>
  );
};

export default ContactForm;
