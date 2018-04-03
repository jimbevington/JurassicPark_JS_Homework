var Dinosaur = require('./Dinosaur.js');

var Park = function(){
  this.enclosure = [];
}

Park.prototype.add = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeByType = function (type) {
  this.enclosure = this.enclosure.filter(dinosaur => dinosaur.type != type);
};

Park.prototype.getDinosWithMinimumOffspring = function (minAmount) {
  return this.enclosure.filter(dinosaur => dinosaur.offspringPerYear >= minAmount)
};

Park.prototype.modelDinoPopulation = function (numOfYears) {
  let modelledPop = this.enclosure.slice(0);  //  copy of population

  // for each year
  for (let i = 0; i < numOfYears; i++){
    //  an empty array to store newborn dinos in
    let popIncrease = [];

//  for each Dino in that years population
    for (let dino of modelledPop){

      // for the number of Offspring per year
      for(let o = 0; o < dino.offspringPerYear; o++){
        // add a copy of that dino to the popIncrease
        popIncrease.push(dino);
      }
    }

//  add the pop increase to the original pop
    modelledPop = modelledPop.concat(popIncrease);
  }

  return modelledPop.length;
};

module.exports = Park;
