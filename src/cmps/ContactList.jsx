import React from 'react';
import { Link } from 'react-router-dom';
import ContactPreview from './ContactPreview';

export default (props) => {
    return (
      <div className="contacts">
        {props.contacts.map((contact) => (
          <Link className="user-link" to={'/contact/' + contact._id} key={contact._id}>
            <ContactPreview contact={contact} />
          </Link>
        ))}
      </div>
    );
  };