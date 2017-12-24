// Import our two files weatehr and lcoation
var weather = require('./weather.js')
var location = require('./location.js')

// yargs a library that allows you to create your own curl commands
var argv = require('yargs')
	// so we pass in the location and a object
	.option('location', {
		alias: 'l',
		demand: false,
		describe: 'Location to fetch weather for',
		type: 'string'
	})
	.help('help')
	.argv

// l refers to the location
if(typeof argv.l === 'string' && argv.l.length > 0) {
	console.log('Location was provided - WELL DONE for giving me your location')
	
	weather(argv.l).then(function (currentWeather){
		console.log(currentWeather)
	}).catch(function (error) {
		console.location(error)
	})
} else{
	console.log('No location was provided')

	location().then(function (loc) {
		return weather(loc.city);
	}).then(function (currentWeather) {
		console.log(currentWeather)
	}).catch(function (error) {
		console.log(error)
	})
}

// to RUN THIS IN CMD, do this 
// node app.js --location "New York"/ London