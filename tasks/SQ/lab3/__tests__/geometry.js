// Функція для обчислення площі прямокутника
function rectangleArea(length, width) {
    return length * width;
  }
  
  // Функція для обчислення площі кола
  function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
  }
  
  // Функція для обчислення площі трикутника
  function triangleArea(base, height) {
    return 0.5 * base * height;
  }
  
  module.exports = { rectangleArea, circleArea, triangleArea };