const request = require("request");


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;
  request(url, (error, resp, body) => {
    if (error) {
      callback("Error is: ", error, null);
    }
    if (body) {
      const data = JSON.parse(body);
      const breed = data[0];
      if (breed) {
        callback(null, breed.description);
      } else {
        callback(`Can't find: ${breedName}`, null)
      }
    }
  });
};

module.exports = { fetchBreedDescription };
