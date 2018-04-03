var Enclosure = function(){
  this.dinosaurs = [];
}

Enclosure.prototype.add = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Enclosure.prototype.removeByType = function (type) {
  this.dinosaurs = this.dinosaurs.filter(dinosaur => dinosaur.type != type);
};

Enclosure.prototype.getDinosWithMinimumOffspring = function (minAmount) {
  return this.dinosaurs.filter(dinosaur => dinosaur.offspringPerYear >= minAmount)
};

module.exports = Enclosure;
