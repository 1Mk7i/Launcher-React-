const astronomicalObjects = [
    { name: 'Sun', type: 'Star', distance: 0 },
    { name: 'Earth', type: 'Planet', distance: 149600000 },
    { name: 'Andromeda', type: 'Galaxy', distance: 2200000 },
    // Додати інші об'єкти
  ];
  
  function getAstronomicalObject(name) {
    return astronomicalObjects.find(obj => obj.name.toLowerCase() === name.toLowerCase());
  }
  
  module.exports = { getAstronomicalObject };
  