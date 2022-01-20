const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error,res, body) => {

    if (error) {
      callback(error, null);
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback("Breed not found!", null);
      return;
    }
    callback(null, data[0].description);
  
  });

};

module.exports = { fetchBreedDescription };
