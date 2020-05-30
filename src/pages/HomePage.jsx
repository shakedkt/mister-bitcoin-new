import React, { Component } from 'react'
import { UserService } from '../services/UserService'
import { BitcoinService } from '../services/BitcoinService'
import { loadUserById, saveUser} from '../actions/ContactActions';


import loadingSvg from '../images/loading.svg'

class HomePage extends Component {
    state = {
        user: null,
        btcRate: null
    };

    async componentDidMount() {

        let results = await Promise.all([UserService.getUser(), BitcoinService.getRate()]);
        let [user, btcRate] = results;
         btcRate = ((1 / btcRate) * 1)
         btcRate = btcRate.toString()
         btcRate = btcRate.substring(0, 8);

        this.setState({ btcRate, user });
    }

    get avatarImg() {
        return `https://robohash.org/${this.state.user.name}.png`;
    }

    render() {
        const { user: user, btcRate } = this.state;

        if (!user) {
            return  <div> <img src={loadingSvg} /></div>;
        }
        if (!btcRate) {
            return <div>no rate yet... </div>;
        }

        return (

            <div className="home-page">
                <img className="avatar-img" src={this.avatarImg} alt="" />

                <div className="user-deatils">
                    <h1>Hello {user.name}</h1>
                    <h2>coins: {user.coins} </h2>
                    <h2>btc price: ${btcRate}</h2>
                    <h3>moves: {(user.moves) ? user.moves.length : 0}</h3>
                </div>
            </div>
        )
    }
}
export default HomePage


