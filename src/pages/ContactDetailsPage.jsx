import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loadingSvg from '../images/loading.svg'
import { TransferFunds } from '../cmps/TransferFunds'
import { loadContactById, saveContact, deleteContact } from '../actions/ContactActions';
import { loadUserByName, addMove } from '../actions/UserActions';
import { MoveList } from '../cmps/MoveList';

class ContactDetailsPage extends Component {
    state = {
        amount: 0,
    }

    async componentDidMount() {
        this.loadContact();
        this.loadUser();
    }

    loadContact() {
        const id = this.props.match.params.id;
        this.props.loadContactById(id);
    }

    loadUser() {
        this.props.loadUserByName()
    }

    onGoBackClickHandler = (ev) => {
        this.props.history.go(-1);
    };

    componentDidUpdate(prevProps, prevState) {
    
        if (prevProps.match.params.id !== this.props.match.params.id) {
            console.log('got here');
            
            this.loadContact();
        }
    }

    deleteClickHandler = async () => {
        await this.props.deleteContact(this.props.contact._id);
        this.props.history.push('/mister-bitcoin-new/');
    };

    transferCoins = (amount) => {
        const { contact } = this.props
        this.props.addMove(contact, amount)
        console.log(this.props.user);

    }

    get filteredMoves() {
        const moves = this.props.user.moves
        return moves.filter(move => move.toId === this.props.contact._id)
    }

    render() {
        const { contact } = this.props;
        const { user } = this.props;
        const title = (contact) ? 'Your Moves:' : ''

        if (!contact) {
            return <div> <img src={loadingSvg} /></div>;
        }
        if (!user) {
            return <div> <img src={loadingSvg} /></div>;
        }
        console.log('i got rendered');

        const avatarImg = `https://robohash.org/${contact.name}.png`;        
        return (            
            <div className="conact-deatils">
                <div>
                    <button className="back-btn" onClick={this.onGoBackClickHandler}>Go Back</button>
                </div>

                <img className="avatar-img" src={avatarImg} alt="" />
                <h1>name: {contact.name}</h1>
                <h2>phone: {contact.phone}</h2>
                <h2>email: {contact.email}</h2>

                <TransferFunds className="transfer-funds" contact={contact} maxCoins={user.coins} onTransferCoins={this.transferCoins} />
                {this.filteredMoves.length !== 0 && <MoveList className="move-list-cmp" title={title} moveList={this.filteredMoves} isFullList={false} />}
                <Link to={`/mister-bitcoin-new/Contact/edit/${contact._id}`}>Edit</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact.currContact,
        user: state.user.currUser
    };
};

const mapDispatchToProps = {
    loadContactById,
    saveContact,
    deleteContact,
    loadUserByName,
    addMove
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailsPage);