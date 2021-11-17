var axios = require('axios');
var fs=require('fs')
let coinList=`BTC,ETH,BNB,LTC,QTUM,ADA,XRP,EOS,IO
TA,XLM,TRX,ETC,VET,LINK,BTT,ZRX,BA
T,XMR,ZEC,DASH,ENJ,MATIC,ATOM,ALGOI
NR,DOGE,CHZ,BUSD,XTZ,BCH,FTT,SOL,KN
C,COMP,SNX,MKR,MANA,YFI,BAL,CRV,
DOT,PAXG,SUSHI,UNI,AAVE,FIL,GRT,1INC
H,CAKE,ICP,USDP`

// let coinList="BTC,ETH,BNB"

export async function fetchCoinData(callBack){

    var config = {
        method: 'get',
        url: `https://api.nomics.com/v1/currencies/ticker?key=1f817e98d914351cb28cf89769a40b356d99ddc6&ids=${coinList}&interval=1h`,
        // headers: {
        //   'Access-Control-Allow-Origin':'*',
        //   'Access-Control-Allow-Methods':'GET, POST, PUT'
        // }
      };
      let dataObj=null
      await axios(config)
      .then(function (response) {
        dataObj=response.data
        console.log("Response arrived"+response.data)
        callBack(response.data)
        console.log("After call to calback")
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(dataObj)
      // return dataObj      
}

function fecthCoinIds(){

}

// function staticFetch() {
//   var text = fs.readFileSync('output.json','utf8')
//   return(text)
// }

// staticFetch().then(response=>console.log("d print"+response.data))
// console.log(staticFetch())
// fetchCoinData()
export default fetchCoinData; 
// console.log(fetchCoinData())
// console.log("Got")