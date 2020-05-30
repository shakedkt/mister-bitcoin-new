import React, { Component } from 'react';
import { BitcoinService } from '../services/BitcoinService'
import { Chart } from "react-google-charts";

import loadingSvg from '../images/loading.svg'

class statisticPage extends Component {

    state = {
        marketObj: {
            title: 'Market price (UD)',
            data: [],
            columnNames: ['Date', 'Low', 'Open', 'Close', 'High'],
            options: {
                width: 350,
                height: 600,
                legend: 'none',
                colors: ['#363636'],
                backgroundColor: '#cecece',
                bar: { groupWidth: '100%' }, // Remove space between bars.
                candlestick: {
                    fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
                    risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
                  },
            },
            isLoaded: false
        }
    }
    componentDidMount() {
        this.getMarketPrice()
    }

    async getMarketPrice() {
        const marketObj = await BitcoinService.getMarketPrice()

        marketObj.unshift(['Date', 'Low', 'Open', 'Close', 'High'])
        this.setState(prevState => ({
            marketObj: {
                ...prevState.marketObj,
                data: marketObj
            }
        }))
        this.setState({
            isLoaded: true
        })
    }

    async getRate() {
        const rate = await BitcoinService.getRate()
        this.setState({ rate })
    }

    render() {

        const { marketObj } = this.state
        if (!this.state.isLoaded) return <div> <img src={loadingSvg} /></div>
        let datush = marketObj.data;
        console.log(datush);
        
        return (

            <div>
                <h3>Market price (USD)</h3>
                <div className="chart-page">
                    <Chart chartType="CandlestickChart" data={datush} options={marketObj.options} />
                </div>
            </div>
        )
    }
}

export default statisticPage