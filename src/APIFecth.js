var axios = require('axios');
var fs=require('fs');


//  Coin names to be monitored
let coinList=`BTC,ETH,BNB,LTC,QTUM,ADA,XRP,EOS,IO
TA,XLM,TRX,ETC,VET,LINK,BTT,ZRX,BA
T,XMR,ZEC,DASH,ENJ,MATIC,ATOM,ALGOI
NR,DOGE,CHZ,BUSD,XTZ,BCH,SOL,KN
C,COMP,SNX,MKR,MANA,YFI,BAL,CRV,
DOT,PAXG,SUSHI,UNI,AAVE,FIL,GRT,1INC
H,CAKE,ICP,USDP`

const io=require("socket.io-client")
let socket=null
export function InitConnection(callBack){
  socket=io("https://stg.walrusmoney.com")
  socket.on('connect',function(){
    console.log("Socket connected")})
  socket.on('error',()=>console.log("Error while trying to connect"))
  socket.on('tickerArray',function(response){
    console.log(typeof response)
    callBack(JSON.parse(response))
  })
}


export function fetchIconUrls(callBack){
  return axios({
    method:'get',
    url:"https://stg.walrusmoney.com/rwd/layout/1"
  })
  // .then(function(resp){ 
  //   // response data obj has another data obj
  //   callBack(resp.data.data)
  // }).catch(err=>console.log(err))
}


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

// export function Fetchpass(email){
//   // for debugging will implment later
//   return "adminpass"
// }

// saves url of all icons
function LogosToFile(data){
  let urlArr=[]
  for(let obj of data){
    urlArr.push(obj.logo_url)
  }
  console.log(JSON.stringify(urlArr))
}

// checkGetUrls()
// fetchCoinData(LogosToFile)

export default fetchCoinData; 
