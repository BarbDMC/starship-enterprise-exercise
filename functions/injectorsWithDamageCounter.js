module.exports = (injectorsDamage) =>{
  
  var amountInjectorsWithDamage = 0;

  for(var i = 0; i < injectorsDamage.length; i++ ){
    if(injectorsDamage[i] < 100){
      amountInjectorsWithDamage += 1;
    }
  }
  return amountInjectorsWithDamage;

}