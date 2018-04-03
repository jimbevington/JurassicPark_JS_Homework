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

module.exports = Park;
