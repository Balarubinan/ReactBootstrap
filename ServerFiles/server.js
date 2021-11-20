//  A Psuedo-server to simulate Socket endpoint for development
const { Server } = require("socket.io");

const io = new Server();

let coinList=`BTC,ETH,BNB,LTC,QTUM,ADA,XRP,EOS,IO
TA,XLM,TRX,ETC,VET,LINK,BTT,ZRX,BA
T,XMR,ZEC,DASH,ENJ,MATIC,ATOM,ALGOI
NR,DOGE,CHZ,BUSD,XTZ,BCH,SOL,KN
C,COMP,SNX,MKR,MANA,YFI,BAL,CRV,
DOT,PAXG,SUSHI,UNI,AAVE,FIL,GRT,1INC
H,CAKE,ICP,USDP`

let coinArr=coinList.split(',').slice(0,10)

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

function getSingleObj(coinName){
    let tags=Array.from("pPaqbsceEvhl")
    // console.log(tags)
    let obj={}
    for(let tag of tags){
        obj[tag]=getRandomNum(10000,20000)
    }
    // s denotes coin sybmol
    obj.s=coinName
    return obj
}

function getPayload(){
    let payload={body:[]}
    for(let coin in coinArr){
        payload.body.push(getSingleObj(coin))
    }
    console.log(payload)
    return payload
}

function EmitSingleCoin(coinName){
    let val=getSingleObj(coinName)
    console.log(val)
    io.emit('subscribe',{body:getSingleObj(coinName)})
    console.log("Done")
}
function tickerArray(){
    io.emit('tickerArry',getPayload())
}
io.on("connection", (socket) => {
    console.log("Client connected id :"+socket.id)
    io.emit('MyUpdate',{stat:"Welcome!"})
    // EmitSingleCoin("BTC")
    socket.on('subscribe',(data)=>{
        console.log("Sub called")
        EmitSingleCoin(data.body.coinName)
    })
    socket.on('sub30',(data)=>{tickerArray()})
});



io.on('error',(error)=>console.log("Errored out"))

io.listen(3000);
