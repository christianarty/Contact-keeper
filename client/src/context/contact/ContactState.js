import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import axios from "axios";
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS
} from "../types";

const ContactState = props => {
  const initalState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(ContactReducer, initalState);

  //Get Contacts

  const getContacts = async () => {
    try {
      const response = await axios.get("/api/contacts");
      dispatch({ type: GET_CONTACTS, payload: response.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
    }
  };

  //Add contact
  const addContact = async contact => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const response = await axios.post("/api/contacts", contact, config);
      dispatch({ type: ADD_CONTACT, payload: response.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
    }
  };

  //Delete contact
  const deleteContact = async id => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
    }

    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //Clear contacts
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };
  //Set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //Update contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //Filter contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  //Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        error: state.error,
        filtered: state.filtered,
        addContact,
        getContacts,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        clearContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
