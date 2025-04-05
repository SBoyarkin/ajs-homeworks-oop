import {  Character,
  Bowerman,
  Swordsman,
  Magician,
  Undead,
  Zombie,
  Daemon,} from '../сharacter'

describe('Character', () => {
  test('should create a character with valid name and type', () => {
    const character = new Character('Alice', 'Magician');
    expect(character.name).toBe('Alice');
    expect(character.type).toBe('Magician');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });

  test('should throw error if name is too short', () => {
    expect(() => new Character('A', 'Bowerman')).toThrow('Имя должно быть от 2 до 10 символов');
  });

  test('should throw error if name is too long', () => {
    expect(() => new Character('VeryLongNameHere', 'Swordsman')).toThrow('Имя должно быть от 2 до 10 символов');
  });

  test('should throw error if type is invalid', () => {
    expect(() => new Character('Bob', 'InvalidType')).toThrow('Неверный тип персонажа');
  });
});

describe('Character levelUp', () => {
  let character;

  beforeEach(() => {
    character = new Character('Alice', 'Magician');
    character.attack = 10;
    character.defence = 40;
  });

  test('level up', () => {
    character.levelUp();
    expect(character.level).toBe(2);
  });

  test('should increase attack by 20%', () => {
    character.levelUp();
    expect(character.attack).toBe(12);
  });

  test('should increase defence by 20%', () => {
    character.levelUp();
    expect(character.defence).toBe(48);
  });

  test('should restore health to 100', () => {
    character.health = 50;
    character.levelUp();
    expect(character.health).toBe(100);
  });

  test('should throw error if health is 0', () => {
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
  });
});

describe('Character damage', () => {
  let character;

  beforeEach(() => {
    character = new Character('Alice', 'Magician');
    character.defence = 40;
  });

  test('should reduce health based on damage and defence', () => {
    character.damage(50);
    expect(character.health).toBe(70);
  });

  test('should not reduce health below 0', () => {
    character.health = 10;
    character.damage(100);
    expect(character.health).toBe(0);
  });

  test('should throw error if health is already 0', () => {
    character.health = 0;
    expect(() => character.damage(10)).toThrow('Нельзя нанести урон умершему');
  });
});

describe('Character subclasses', () => {
  test('Bowerman should have correct stats', () => {
    const bowerman = new Bowerman('Legolas', 'Bowerman');
    expect(bowerman.attack).toBe(25);
    expect(bowerman.defence).toBe(25);
  });

  test('Swordsman should have correct stats', () => {
    const swordsman = new Swordsman('Aragorn', 'Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('Magician should have correct stats', () => {
    const magician = new Magician('Gandalf', 'Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test('Undead should have correct stats', () => {
    const undead = new Undead('Nazgul', 'Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('Zombie should have correct stats', () => {
    const zombie = new Zombie('Walker', 'Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(40);
  });

  test('Daemon should have correct stats', () => {
    const daemon = new Daemon('Balrog', 'Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});
