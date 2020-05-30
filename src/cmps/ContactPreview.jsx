import React from 'react';

export default ({ contact }) => {
const avatarImg = `https://robohash.org/${contact.name}.png`

    return (
        <div className="contact-preview" key={contact._id}>
                <img className="avatar-img" src={avatarImg} alt="" />
            <h3 className="contact-name">
                {contact.name}
            </h3>
        </div>
    );

};
