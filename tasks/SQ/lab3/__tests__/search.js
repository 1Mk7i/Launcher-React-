const { getAstronomicalObject } = require('./astronomyData');

function searchAstronomicalObject(query) {
  const object = getAstronomicalObject(query);
  if (object) {
    return object;
  }
  return 'Object not found';
}

module.exports = { searchAstronomicalObject };
