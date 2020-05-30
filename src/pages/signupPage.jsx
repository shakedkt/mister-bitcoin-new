import React, { Component } from 'react'
import { StorageService } from '../services/StorageService'
import {UserService} from '../services/UserService'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadUserByName } from '../actions/UserActions';

import logo from '../images/Bitcoin.png'


export class signupPage extends Component {
    state = {
        name: ''
    };

    async componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        const user = StorageService.load('user')
        if (user) {
            this.props.history.push('/mister-bitcoin-new/');
        }
    }

    onFormSubmit = async (ev) => {
        ev.preventDefault();

        await UserService.signUp(this.state.name);
        this.props.loadUserByName(this.state.name)
        this.props.history.push('/mister-bitcoin-new/home');
    }


    handleChange = (ev) => {
        const { value, name } = ev.target;

        this.setState({ [name]: value }, () => {
            // console.log('this.state', this.state);
        });
    };

    render() {
        const imgSrc = '../image/kindpng_2575803.png'
        const { name } = this.state;

        return (
            <section className="signup-page">
                <img src={logo} alt="" />

                <form className="form-edit" onSubmit={this.onFormSubmit}>
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
                        <button>SAVE</button>
                    </div>
                </form>

            </section >
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.user.currUser,
    };
};

const mapDispatchToProps = {
    loadUserByName,
};

export default connect(mapStateToProps, mapDispatchToProps)(signupPage);

