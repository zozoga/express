const request = require('request');
request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
	if (!error && response.statusCode == 200) {
		const data = JSON.parse(body);
		console.log(body);
		const catImageUrl = data[0].url;
		console.log(catImageUrl);
	}
});