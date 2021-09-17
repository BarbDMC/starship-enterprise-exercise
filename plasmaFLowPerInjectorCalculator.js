const velocityCalculator = require('./velocityCalculator');
const injectorsWithDamageCounter = require('./functions/injectorsWithDamageCounter');
const functionalInjectorsCounter = require('./functions/functionalInjectorsCounter');
const extraPlasmaCalculator = require('./functions/extraPlasmaCalculator');
const distributeExtraPlasma = require('./functions/distributeExtraPlasma');
const maximumPlasmaCapacityCalculator = require('./functions/maximumPlasmaCapacityCalculator');

module.exports = (injectorStatus) => {
  const {injectorA, injectorB, injectorC, velocityPercent} = injectorStatus;
  var injectorsDamage = [100 - injectorA, 100 - injectorB, 100 - injectorC];

  var plasmaFlow = velocityCalculator(velocityPercent);
  var injectorsWithDamage = injectorsWithDamageCounter(injectorsDamage);
  var functionalInjector = functionalInjectorsCounter(injectorsDamage);
  var extraPlasma  = extraPlasmaCalculator(velocityPercent, injectorsDamage)
  var injectorsWithExtraPlasma = distributeExtraPlasma(extraPlasma, injectorsDamage);
  var upperCapacityInjectors = maximumPlasmaCapacityCalculator(injectorStatus, injectorsWithExtraPlasma);

  const injectorsResults = [];

  if(injectorsWithDamage > 0){
    for(var i = 0; i < injectorsDamage.length; i++){
      injectorsResults.push({ 
        id    : i,
        value  : injectorsWithExtraPlasma[i],
      });
    }
  } else {
    for(var i = 0; i < injectorsDamage.length; i++){
      injectorsResults.push({ 
        id    : i,
        value  : plasmaFlow / functionalInjector,
      });
      
    }
  }

  if(upperCapacityInjectors > 0){
    return 'Unable to comply'
  } 
  else {
    return injectorsResults;
  }
  
  
}