var axios = require('axios');
var fs=require('fs')


//  Coin names to be monitored
let coinList=`BTC,ETH,BNB,LTC,QTUM,ADA,XRP,EOS,IO
TA,XLM,TRX,ETC,VET,LINK,BTT,ZRX,BA
T,XMR,ZEC,DASH,ENJ,MATIC,ATOM,ALGOI
NR,DOGE,CHZ,BUSD,XTZ,BCH,SOL,KN
C,COMP,SNX,MKR,MANA,YFI,BAL,CRV,
DOT,PAXG,SUSHI,UNI,AAVE,FIL,GRT,1INC
H,CAKE,ICP,USDP`


export async function fetchCoinData(callBack){
    var config = {
        method: 'get',
        url: `https://api.nomics.com/v1/currencies/ticker?key=1f817e98d914351cb28cf89769a40b356d99ddc6&ids=${coinList}&interval=1h`,
      };
      let dataObj=null
      await axios(config)
      .then(function (response) {
        dataObj=response.data
        callBack(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      // console.log(dataObj)
      // return dataObj      
}

export function Fetchpass(email){
  // for debugging will implment later
  return "adminpass"
}

export default fetchCoinData; 
