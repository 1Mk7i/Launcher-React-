const { searchAstronomicalObject } = require('./search');

describe('Integration Test: Astronomical Object Search', () => {
  it('should return correct information for Sun', () => {
    const result = searchAstronomicalObject('Sun');
    expect(result).toEqual({ name: 'Sun', type: 'Star', distance: 0 });
  });

  it('should return correct information for Earth', () => {
    const result = searchAstronomicalObject('Earth');
    expect(result).toEqual({ name: 'Earth', type: 'Planet', distance: 149600000 });
  });

  it('should return correct information for Andromeda', () => {
    const result = searchAstronomicalObject('Andromeda');
    expect(result).toEqual({ name: 'Andromeda', type: 'Galaxy', distance: 2200000 });
  });

  it('should return "Object not found" for an unknown object', () => {
    const result = searchAstronomicalObject('Mars');
    expect(result).toBe('Object not found');
  });
});