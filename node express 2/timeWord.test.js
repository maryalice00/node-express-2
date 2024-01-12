const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('00:00 should return midnight', () => {
    expect(timeWord('00:00')).toBe('midnight');
  });

  test('12:00 should return noon', () => {
    expect(timeWord('12:00')).toBe('noon');
  });

  test('06:30 should return six thirty am', () => {
    expect(timeWord('06:30')).toBe('six thirty am');
  });

  test('18:45 should return six forty five pm', () => {
    expect(timeWord('18:45')).toBe('six forty five pm');
  });


  test('09:08 should return nine oh eight am', () => {
    expect(timeWord('09:08')).toBe('nine oh eight am');
  });
});
