import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ContactService } from '../services/ContactService';
import { loadContacts } from '../actions/ContactActions';

import ContactList from '../cmps/ContactList';
import ContactFilter from '../cmps/ContactsFilter.jsx';

import addPost from '../images/addPost.png'

class ContactPage extends Component {
    state = {
        filterBy: {
            name: ''
        },
    };

    async componentDidMount() {
        this.loadContacts();
    }

    onFilterHandler = (filterBy) => {
        this.setState((prevState) => {
            return {
                filterBy: {
                    ...prevState.filterBy,
                    ...filterBy,
                },
            };
        }, this.loadContacts);
    };
    loadContacts = () => {
        this.props.loadContacts(this.state.filterBy);
    };

    render() {
        return (
            <div>
                <Link to="/mister-bitcoin-new/Contact/edit">

                    <img className='add-btn' src={addPost} />
                </Link>
                <ContactFilter
                    filterBy={this.state.filterBy}
                    onFilter={this.onFilterHandler}
                />
                <ContactList contacts={this.props.contacts} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contact.contacts,
    };
};

const mapDispatchToProps = {
    loadContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);

