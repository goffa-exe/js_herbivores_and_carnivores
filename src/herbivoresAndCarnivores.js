'use strict';

class Animal {
  static alive = [];
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(100, name);
    Animal.alive.push(this);
  }
  hidden = false;
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(100, name);
    Animal.alive.push(this);
  }

  bite(herbivoreAnimal) {
    if (herbivoreAnimal instanceof Herbivore && !herbivoreAnimal.hidden) {
      herbivoreAnimal.health -= 50;

      if (herbivoreAnimal.health <= 0) {
        herbivoreAnimal.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
