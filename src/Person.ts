import Comparable from "./interfaces/Comparable";

export default class Person implements Comparable<Person> {
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

  compareTo(otherPerson: Person) {
    return this._age > otherPerson.age
      ? 1
      : this._age < otherPerson.age
        ? -1
        : 0;
  }

  prettyPrint() {
    console.log(
      `Person->[id=${this._id}, name=${this._name}, age=${this._age}]`
    );
  }
}
