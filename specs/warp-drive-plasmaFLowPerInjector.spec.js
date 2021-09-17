describe('When you want to calculate the injectors damage', () => {

  const plasmaFlow = require('../plasmaFLowPerInjectorCalculator');
  fit('Should try diferent values on damageCalculator function and return correct values for injectors', () => {

    const expectedFirstCase = [{id: 0, value: 100}, {id: 1, value: 100}, {id: 2, value: 100}];
    const caseFirst = getPlasmaFlow(0,0,0,100);
    expect(caseFirst).toStrictEqual(expectedFirstCase);

    const expectedSecondCase = [{id: 0, value: 90}, {id: 1, value: 90}, {id: 2, value: 90}];
    const caseSecond = getPlasmaFlow(0,0,0,90); 
    expect(caseSecond).toStrictEqual(expectedSecondCase);

    const expectedThirdCase = [{id: 0, value: 30}, {id: 1, value: 30}, {id: 2, value: 30}];
    const caseThird = getPlasmaFlow(0,0,0,30); 
    expect(caseThird).toStrictEqual(expectedThirdCase);

   const expectedFourthCase = [{id: 0, value: 90}, {id: 1, value: 100}, {id: 2, value: 110}];
   const caseFourth = getPlasmaFlow(20,10,0,100); 
   expect(caseFourth).toStrictEqual(expectedFourthCase);

    const expectedFifthCase = [{id: 0, value: 120}, {id: 1, value: 120}, {id: 2, value: 0}];
    const caseFifth = getPlasmaFlow(0,0,100,80);
    expect(caseFifth).toStrictEqual(expectedFifthCase);

    const expectedSixthCase =  [{id: 0, value: 150}, {id: 1, value: 150}, {id: 2, value: 150}];
    const caseSixth = getPlasmaFlow(0,0,0,150);
    expect(caseSixth).toStrictEqual(expectedSixthCase);

    const expectedSeventhCase = [{id: 0, value: 150}, {id: 1, value: 150}, {id: 2, value: 120}];
    const caseSeventh = getPlasmaFlow(0,0,30,140);
    expect(caseSeventh).toStrictEqual(expectedSeventhCase);

    const expectedEighthCase = 'Unable to comply';
    const caseEighth = getPlasmaFlow(20,50,40,170);
    expect(caseEighth).toBe(expectedEighthCase);

  });

  //-->
  function getPlasmaFlow(injectorA, injectorB, injectorC, percent){
    return plasmaFlow({
      'injectorA': injectorA,
      'injectorB': injectorB,
      'injectorC': injectorC,
      'velocityPercent': percent
    })
  }
});