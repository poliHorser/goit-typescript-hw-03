// Ключ (Key): Створіть клас Key. 
// У нього має бути одна приватна властивість signature, яка генерується випадково при створенні 
// об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, 
// який повертає значення властивості signature.



class Key {
    private signature = Math.random();
    
    // constructor() {
    //     this.signature = Math.random()
    // }

    getSignature(): number {
        return this.signature;
    }
}

// Людина(Person): Створіть клас Person.Конструктор цього класу приймає
// об'єкт класу Key і зберігає їх у приватному властивості key.
// Клас Person повинен мати метод getKey, який повертає збережений ключ.

class Person {
    constructor(private key: Key) { }
    
    getKey(): Key {
        return this.key
    }


}


// Дім(House): Створіть абстрактний клас House.
// Цей клас має дві властивості: door, яка може бути відкрита(true), або закрита(false),
// і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn,
// який додає об'єкт класу Person у масив tenants, якщо door відкрита.
// Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.



abstract class House {
    protected door: boolean = false;
    protected tenants: Person[] = [];

    abstract openDoor(key: Key): void;
    
    constructor( protected key: Key) {}

    comeIn(person: Person): void {
        if (this.door) {
        this.tenants.push(person);
        console.log("Person came in.");
        } else {
        console.log("Door is closed. Person cannot come in.");
        }
    }
}
// Мій будинок(MyHouse): Створіть клас MyHouse, який успадковується
// від абстрактного класу House.Реалізуйте метод openDoor у цьому класі.
// Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key,
// то двері відчиняються.

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door is opened.");
    } else {
      console.log("Invalid key. Door remains closed.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};