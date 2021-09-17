module.exports = (injectorsDamage) => {

  var functionalInjectorsAmount = 0;
  
  for(i = 0; i < injectorsDamage.length; i++){
    if(injectorsDamage[i] != 0){
      functionalInjectorsAmount += 1;
    }
  }
  return functionalInjectorsAmount;
}