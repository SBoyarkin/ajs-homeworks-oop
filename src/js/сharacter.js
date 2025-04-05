const CARRAY = ["Bowerman", 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

export class Character {
  constructor(name, type) {
    this.name = name
    this.type = type
    this.health = 100
    this.level = 1
    this.attack = undefined
    this.defence = undefined

    if (this.name.length < 2 || this.name.length > 10 )
      throw new Error('Имя должно быть от 2 до 10 символов')

    if (!CARRAY.includes(this.type)) {
      throw new Error('Неверный тип персонажа')
      }
  }

    levelUp() {
    if (this.health > 0) {
    this.level++
    this.attack += this.attack * 0.2
    this.defence += this.defence * 0.2
    this.health = 100 }
    else {
      throw new Error('Нельзя повысить левел умершего')
    }
  }

damage(points) {
  if (this.health <= 0) {
    throw new Error('Нельзя нанести урон умершему');
  }

  const damage = points * (1 - this.defence / 100);
  this.health -= damage;

  if (this.health < 0) {
    this.health = 0;
  }
}

}

export class Bowerman extends Character{
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character{
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character{
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character{
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character{
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 40;
  }
}

export class Daemon extends Character{
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}



