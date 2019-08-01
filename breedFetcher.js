const request = require('request');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;



request(url, (error, resp, body) => {

  if (error) {
    return console.log('Error is: ', error);
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Can\'t find: ${breedName}`);
  }
});
