export class Person {
  private _id: number;
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
    this._id = Math.floor(Math.random() * 1000);
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get id() {
    return this._id;
  }

  set name(newName: string) {
    if (newName) {
      this._name = newName;
    }
  }

  set age(newAge: number) {
    if (newAge) {
      this._age = newAge;
    }
  }

  prettyPrint() {
    console.log(
      `Person->[id=${this._id}, name=${this._name}, age=${this._age}]`
    );
  }
}

const p = new Person("Abhishek", 22);
p.prettyPrint();
