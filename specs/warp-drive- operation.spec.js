describe('When you want to calculate the opertation time for a ship in the warp-drive management software', () => {
  const timeOperation = require('../timeOperationCalculator')
    it('Should try diferent values and return correct operation time values', () => {
      
      const firstCase = getTimeOperation(0,0,0,100); 
      expect(firstCase).toBe('Infinite');
      const secondCase = getTimeOperation(0,0,0,90);
      expect(secondCase).toBe('Infinite');
      const thirdCase = getTimeOperation(0,0,0,30);
      expect(thirdCase).toBe('Infinite');

      const fourthCase = getTimeOperation(20,10,0,100);
      expect(fourthCase).toBe(90);
      const fifthCase = getTimeOperation(0,0,100, 80);
      expect(fifthCase).toBe(80);
      const sixthCase = getTimeOperation(0,0,0, 150);
      expect(sixthCase).toBe(50);
      const seventhCase = getTimeOperation(0,0,30,140);
      expect(seventhCase).toBe(50);

      const EighthCase = getTimeOperation(20,50,40,170);
      expect(EighthCase).toBe(0);
  });

  function getTimeOperation(injectorA, injectorB, injectorC, percent){
    return timeOperation({
      'injectorA': injectorA,
      'injectorB': injectorB,
      'injectorC': injectorC,
      'velocityPercent': percent
    })
  }
});