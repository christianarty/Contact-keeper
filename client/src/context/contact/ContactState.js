import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initalState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jilljohn@gmail.com",
        phone: "144-436-4722",
        contactType: "personal"
      },
      {
        id: 2,
        name: "Harry White",
        email: "harryw@gmail.com",
        phone: "344-436-4821",
        contactType: "personal"
      },
      {
        id: 3,
        name: "Jane Doe",
        email: "janeD@gmail.com",
        phone: "123-456-7891",
        contactType: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initalState);

  //Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({type: ADD_CONTACT, payload: contact})
  }

  
  //Delete contact

  //Set current contact

  //Clear current contact

  //Update contact

  //Filter contacts

  //Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
