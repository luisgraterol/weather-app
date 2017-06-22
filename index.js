const request = require('request');
const argv = require('yargs').argv;

let apiKey = '4574118a2a6ba3eda6c17fc98d346eca';
let city = argv.c || 'caracas';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function(error, response, body){
    if (!error) {
        let weather = JSON.parse(body);
        console.log(`It's ${weather.main.temp} degrees in ${weather.name}!`);
    }
    else {
        console.log("Error:",error)
    }
})
