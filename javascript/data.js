//total cases by case type by country: https://api.covid19api.com/summary (te viene todo)
//con detalle: https://api.covid19api.com/total/country/:country/status/:status (status es confirmed, recovered o deaths)
function request(url) {
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    //console.log(myJson); call next action
    printResponse(myJson);
  });
}

function printResponse(r){
    console.log(r);
}

request('https://jsonplaceholder.typicode.com/todos/1');
