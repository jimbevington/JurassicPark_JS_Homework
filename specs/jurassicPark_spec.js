var assert = require('assert');
var Dinosaur = require('../Dinosaur.js');
var Enclosure = require('../Enclosure.js');

describe('Jurassic Park', function(){

  beforeEach(function(){
    brachio = new Dinosaur("Brachiosaurus", 2);
    steg = new Dinosaur("Stegosaurus", 4);
    compy = new Dinosaur("Compsognathus", 10);
    enclosure1 = new Enclosure();
  })

  it('dino has type', function(){
    assert.strictEqual(brachio.type, "Brachiosaurus");
    assert.strictEqual(steg.type, "Stegosaurus");
  });

  it('dino has offspring per year', function(){
    assert.strictEqual(compy.offspringPerYear, 10);
    assert.strictEqual(brachio.offspringPerYear, 2);
  });

  it('enclosure starts empty');
  it('can add dinosaur');
  it('can remove all dinosaurs of type');
  it('all dinosaurs with minimum offspring count');

  // extensions
  it('dino count after 1 year with 1 dino');
  it('dino count after 2 years with 1 dino');
  it('dino count after 2 years with 2 dinos');

})
