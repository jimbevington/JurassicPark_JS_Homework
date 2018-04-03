var Enclosure = function(){
  this.dinosaurs = [];
}

Enclosure.prototype.add = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

module.exports = Enclosure;
