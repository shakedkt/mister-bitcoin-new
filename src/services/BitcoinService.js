import axios from 'axios';
import * as moment from 'moment';


async function getRate() {
  const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1', {
    proxy: {
      port: 4200,
      host: 'http://localhost:4200'
    }
  })
  return res.data
}

export const BitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions
}


async function getMarketPrice() {

var date = Date.now()/1000 - 1 * 30 * 24 * 60 * 60;
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  let marketTable = 'https://api.kraken.com/0/public/OHLC?pair=xbtusd&interval=1440&since=' + `${date}`;
  console.log(marketTable);
  
  let response = await axios.get(proxyurl + marketTable);

  response = response.data.result.XXBTZUSD;
  
  return response.map((value) => {
    let prices = value.slice(1,5);
    prices = prices.map(parseFloat);
    let [open, high, low, close] = prices;

    return [_formatDate(value[0] * 1000), low, open, close, high];
  });
}

async function getConfirmedTransactions() {
  let tradeVolumes = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
  return tradeVolumes.data.values.map((value) => {
    return [_formatDate(value.x * 1000), value.y];
  });
}

function _formatDate(timeStamp) {
  return moment(timeStamp).format('MMM Do YY')
}



