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

  it('enclosure starts empty', function(){
    assert.strictEqual(enclosure1.dinosaurs.length, 0);
  });

  it('can add dinosaur', function(){
    enclosure1.add(brachio);
    assert.strictEqual(enclosure1.dinosaurs.length, 1);
    assert.strictEqual(enclosure1.dinosaurs[0], brachio);
  });

  it('can remove all dinosaurs of type');

  it('all dinosaurs with minimum offspring count');

  // extensions
  it('dino count after 1 year with 1 dino');
  it('dino count after 2 years with 1 dino');
  it('dino count after 2 years with 2 dinos');

})
