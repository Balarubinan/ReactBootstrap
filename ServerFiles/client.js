const io=require("socket.io-client")

const socket = io("http://localhost:3000")
// let socket=null
socket.on('connect',()=>{
  console.log("Connected")
  // same events don't overwite , but add to available listners 
  // both the I was called and I was called Too below will work!
  socket.on('subscribe',(data)=>{   
    console.log("I was called")
  })
  socket.on('subscribe',(data)=>{
    console.log("I was called TOo")
  })
  socket.emit('subscribe',{body:{coinName:"BTC"}})
  console.log("Subbed")
  socket.emit('sub30',{})
})
socket.io.on("error", (error) => {
  console.log("error"+error)
});
socket.on("MyUpdate",(data)=>console.log("Hello "+JSON.stringify(data)))

socket.on('tickerArry',data=>{
  console.log(data.body)
})

function InitConnection(callBack){
  // const socket = io("http://localhost:3000")
  socket=io("https://stg.walrusmoney.com")
  socket.on('connect',function(){
    console.log("Socket connected")})
  socket.on('error',()=>console.log("Error while trying to connect"))
  socket.on('tickerArray',function(response){
    // console.log(response)
    callBack(response)
  })
}

function addSubscriber(event,callBack){
  socket.on(event,()=>callBack(data))
}
// function addSubscriber(){

// }

// returns an array of JSON's
async function fetchCoinInfo(coinArr){
  if(!socket){
    console.log("Null socket")
  }
  let resArr=[]
  socket.on('subscribe',data=>{
    resArr.push(data.body)
    return resArr
  })

  for(let coin of coinArr){
    socket.emit('subscribe',{body:{coinName:coin}})
  }
  // console.log(resArr);console.log("*******")
}

// InitConnection()
// fetchCoinInfo(["BTC","ETH"]).then(d=>console.log(d),()=>{})

// Emit 1 : Name:subscribe data : coinName
// Emit 2 : Name:sub30 data : None
// onEvent 1: Name : tickerArry data : all coin's data
// onEvent 2: Name :Subscribe data : requested coin's data

// how to handle generic events??
// how to handle Broadcast events??