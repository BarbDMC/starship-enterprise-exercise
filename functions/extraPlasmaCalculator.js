const functionalInjectorsCounter = require('./functionalInjectorsCounter');
const velocityCalculator = require('../velocityCalculator');
const velocityDamageCalculator = require('./velocityDamageCalculator');

module.exports = (velocityPercent, injectorsDamage) => {
    var plasmaFlow = velocityCalculator(velocityPercent);
    var functionalInjector = functionalInjectorsCounter(injectorsDamage);
    var velocityDamage = velocityDamageCalculator(injectorsDamage);
    var plasmaDiference = plasmaFlow - velocityDamage;
    var missingPlasma = plasmaDiference / functionalInjector;
   
    return missingPlasma;
}