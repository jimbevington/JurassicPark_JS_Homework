var assert = require('assert');
var Dinosaur = require('../Dinosaur.js');
var Park = require('../Park.js');

describe('Jurassic Park', function(){

  beforeEach(function(){
    brachio1 = new Dinosaur("Brachiosaurus", 2);
    brachio2 = new Dinosaur("Brachiosaurus", 3);
    steg = new Dinosaur("Stegosaurus", 4);
    compy = new Dinosaur("Compsognathus", 10);
    park = new Park();
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
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('can add dinosaur', function(){
    park.add(brachio1);
    assert.strictEqual(park.enclosure.length, 1);
    assert.strictEqual(park.enclosure[0], brachio1);
  });

  it('can remove all dinosaurs of type', function(){
    park.add(brachio1);
    park.add(brachio2);
    park.add(compy);
    park.removeByType("Brachiosaurus");
    assert.strictEqual(park.enclosure.length, 1);
  });


  it('all dinosaurs with minimum offspring count', function(){
    park.add(brachio1);
    park.add(brachio2);
    park.add(steg);
    park.add(compy);
    let promiscuousDinos = park.getDinosWithMinimumOffspring(4);
    assert.strictEqual(promiscuousDinos.length, 2);
    assert.deepStrictEqual(promiscuousDinos, [steg, compy]);
  });

  // extensions
  it('dino count after 1 year with 1 dino');
  it('dino count after 2 years with 1 dino');
  it('dino count after 2 years with 2 dinos');

})
