const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];
console.log(fetchBreedDescription);


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});