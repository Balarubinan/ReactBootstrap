const io=require("socket.io-client")

const socket = io("http://localhost:3000")

socket.on('connect',()=>{
  console.log("Connected")
  socket.on('subscribe',(data)=>{
    console.log(data)
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

// Emit 1 : Name:subscribe data : coinName
// Emit 2 : Name:sub30 data : None
// onEvent 1: Name : tickerArry data : all coin's data
// onEvent 2: Name :Subscribe data : requested coin's data
