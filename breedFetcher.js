// makes the value input from node
let input = process.argv.slice(2);

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, function(error, response, body) {
  
  // logs to see if there is something returning / errors or not
  //  console.error('error:', error); // Print the error if one occurred
  //  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //  console.log('body:', body); // Print the HTML for the Google homepage.
  if (error !== null) {
    return console.log(`Error details: ${error}`);
  }
  //console.log(Object.values(body), body)
  // makes the data(string) to object
  const data = JSON.parse(body);

  // condition if the array is empty
  if (data.length < 1) {
    console.log(`The breed has not been found`);
  } else {
     
    // accessing the first value in the array, then the object key
    const desc = data[0].description;
     
    return console.log(desc);
  }
});


