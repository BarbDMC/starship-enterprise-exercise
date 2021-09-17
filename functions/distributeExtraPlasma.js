module.exports = (missingPlasma, injectorsDamage) => {
    for(i = 0; i < injectorsDamage.length; i++){
      if(injectorsDamage[i] != 0){
        injectorsDamage[i] += missingPlasma;
      }
    }
    
    return  injectorsDamage;
}
