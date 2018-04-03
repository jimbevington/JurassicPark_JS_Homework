var assert = require('assert');
var Dinosaur = require('../Dinosaur.js');
var Enclosure = require('../Enclosure.js');

describe('Jurassic Park', function(){

  beforeEach(function(){
    brachio1 = new Dinosaur("Brachiosaurus", 2);
    brachio2 = new Dinosaur("Brachiosaurus", 3);
    steg = new Dinosaur("Stegosaurus", 4);
    compy = new Dinosaur("Compsognathus", 10);
    enclosure1 = new Enclosure();
  })

  it('dino has type', function(){
    assert.strictEqual(brachio1.type, "Brachiosaurus");
    assert.strictEqual(steg.type, "Stegosaurus");
  });

  it('dino has offspring per year', function(){
    assert.strictEqual(compy.offspringPerYear, 10);
    assert.strictEqual(brachio1.offspringPerYear, 2);
  });

  it('enclosure starts empty', function(){
    assert.strictEqual(enclosure1.dinosaurs.length, 0);
  });

  it('can add dinosaur', function(){
    enclosure1.add(brachio1);
    assert.strictEqual(enclosure1.dinosaurs.length, 1);
    assert.strictEqual(enclosure1.dinosaurs[0], brachio1);
  });

  it('can remove all dinosaurs of type', function(){
    enclosure1.add(brachio1);
    enclosure1.add(brachio2);
    enclosure1.add(compy);
    enclosure1.removeByType("Brachiosaurus");
    assert.strictEqual(enclosure1.dinosaurs.length, 1);
  });


  it('all dinosaurs with minimum offspring count', function(){
    enclosure1.add(brachio1);
    enclosure1.add(brachio2);
    enclosure1.add(steg);
    enclosure1.add(compy);
    let promiscuousDinos = enclosure1.getDinosWithMinimumOffspring(4);
    assert.strictEqual(promiscuousDinos.length, 2);
    assert.deepStrictEqual(promiscuousDinos, [steg, compy]);
  });

  // extensions
  it('dino count after 1 year with 1 dino');
  it('dino count after 2 years with 1 dino');
  it('dino count after 2 years with 2 dinos');

})
