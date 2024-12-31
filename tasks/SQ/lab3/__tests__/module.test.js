const { rectangleArea, circleArea, triangleArea } = require('./geometry');

describe('Geometry Functions', () => {
  test('calculates the area of a rectangle', () => {
    const length = 5;
    const width = 10;
    const expected = 50;
    expect(rectangleArea(length, width)).toBe(expected);
  });

  test('calculates the area of a circle', () => {
    const radius = 7;
    const expected = Math.PI * 49; // Math.PI * radius^2
    expect(circleArea(radius)).toBeCloseTo(expected, 5); 
  });

  test('calculates the area of a triangle', () => {
    const base = 6;
    const height = 8;
    const expected = 24;
    expect(triangleArea(base, height)).toBe(expected);
  });
});
