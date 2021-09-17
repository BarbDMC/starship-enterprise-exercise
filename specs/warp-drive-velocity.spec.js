describe('When you want to calculate the opertation time for a ship in the warp-drive management software', () => {

  const velocity = require('../velocityCalculator');
  it('Should try diferent values on velocityCalculator function and return correct percent ligth velocity', () => {
    expect(velocity(100)).toBe(300);
  });


});
