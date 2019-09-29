import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, contactType } = contact;
  return (
    <div className="card bg-white ">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (contactType === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {contactType.charAt(0).toUpperCase() + contactType.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"> {email}</i>
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"> {phone}</i>
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
    contact:PropTypes.object.isRequired,
}

export default ContactItem;
