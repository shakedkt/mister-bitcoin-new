import React, { Component } from 'react';
import { loadContactById, saveContact } from '../actions/ContactActions';
import { connect } from 'react-redux';

class ContactEditPage extends Component {
    state = {
        _id: '',
        name: '',
        email: '',
        phone: ''
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        if (id) {
            await this.props.loadContactById(id);
            console.log('#1', this.props.contact);
            this.setState({ ...this.props.contact }, () => {
            });
        }
    }

    handleChange = (ev) => {
        console.log(ev.target);
        
        const { value, name } = ev.target;
        this.setState({ [name]: value });
    };

    saveContact = async (ev) => {
        ev.preventDefault();

        const contact = await this.props.saveContact({ ...this.state });

        this.props.history.push(`/mister-bitcoin-new/Contact/${contact._id}`);
    };

    render() {
        const { _id, name, phone, email } = this.state;
        return (
            <div className="form-fill">
                <form className="form-edit" onSubmit={this.saveContact}>
                    <div>
                        <label>
                            <div className="fill">
                            Name
                            </div>
                          <input
                                onChange={this.handleChange}
                                value={name}
                                type="text"
                                name="name"
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                        <div className="fill">
                            Phone
                            </div>
              <input
                                onChange={this.handleChange}
                                value={phone}
                                type="text"
                                name="phone"
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                        <div className="fill">
                            Email
                            </div>
              <input
                                onChange={this.handleChange}
                                value={email}
                                type="text"
                                name="email"
                            />
                        </label>
                    </div>
                    <div>
                        <button>SAVE</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    contact: state.contact.currContact,
});

const mapDispatchToProps = {
    loadContactById,
    saveContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactEditPage);

