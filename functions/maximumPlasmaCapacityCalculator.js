module.exports = (injectorStatus, injectorsResults) => {
    var maximumPlasmaCapacity = 0;
    var upperCapacity = 0;
    const {injectorA, injectorB, injectorC, velocityPercent} = injectorStatus;
    var maximumPerInjector = [100 - injectorA, 100 - injectorB, 100 - injectorC];

    for(var i = 0; i < maximumPerInjector.length; i++){
        maximumPlasmaCapacity = maximumPerInjector[i] + 99;
      if(injectorsResults[i] > maximumPlasmaCapacity) {
        upperCapacity += 1;
      }
    }
   return upperCapacity;

}