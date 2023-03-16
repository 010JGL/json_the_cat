

const fetchBreedDescription = function(breedName, callback) {
  const request = require('request');
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    
    // logs to see if there is something returning / errors or not
    //console.error('error:', error); // Print the error if one occurred
    //  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //  console.log('body:', body); // Print the HTML for the Google homepage.
    
    if (error !== null) {
      callback(error, null);
      return;
    }
    let data = JSON.parse(body);
    if (data.length === 0) {
      callback(`The breed your looking is not here`, null);
      return;
    }
    if (data[0] !== undefined) {
      callback(error, data[0].description);
    }
  });
};


module.exports = { fetchBreedDescription };
