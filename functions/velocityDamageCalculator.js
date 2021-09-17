module.exports = (injectorsDamage) =>{
  
  var velocityDamage = 0;
  
  for(i = 0; i < injectorsDamage.length; i++){
    if(injectorsDamage[i] != 0){
      velocityDamage += injectorsDamage[i];
    }
  }
  return velocityDamage;
}