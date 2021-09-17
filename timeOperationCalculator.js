const plasmaFlowPerInjector = require('./plasmaFLowPerInjectorCalculator');
const extraPlasmaCalculator = require('./functions/extraPlasmaCalculator');

module.exports = (injectorStatus) => {

  var injectorsResults = plasmaFlowPerInjector(injectorStatus);
  if(injectorsResults === 'Unable to comply'){
      return 0;
  } 
 
  const {injectorA, injectorB, injectorC, velocityPercent} = injectorStatus;
  var injectorsDamage = [100 - injectorA, 100 - injectorB, 100 - injectorC];
  var extraPlasma = extraPlasmaCalculator(velocityPercent, injectorsDamage) 
  var operationTime = 100 - extraPlasma; 
  
  if(operationTime >= 100){
   return 'Infinite'
  } else {  
    return operationTime;
  }
  
}