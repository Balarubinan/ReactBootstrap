var axios = require('axios');
var fs=require('fs')

async function fetchCoinData(){
    var config = {
        method: 'get',
        url: 'https://api.nomics.com/v1/currencies?key=1f817e98d914351cb28cf89769a40b356d99ddc6',
        headers: { }
      };
      let dataObj=null
      await axios(config)
      .then(function (response) {
        dataObj=response.data
        console.log("Response arrived")
        console.log(response.data)
        fs.writeFile("output.json", JSON.stringify(response.data), 'utf8', function (err) {
          if (err) {
              console.log("An error occured while writing JSON Object to File.");
              return console.log(err);
          }
          console.log("JSON file has been saved.");
      });
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(typeof dataObj)
      console.log("Corssedme")
      return dataObj      
}

function fecthCoinIds(){

}

function staticFetch() {
  var text = fs.readFileSync('output.json','utf8')
  return(text)
}
// staticFetch().then(response=>console.log("d print"+response.data))

// console.log(staticFetch())
fetchCoinData()
// export default staticFetch;